import { HandPalm, Play } from "phosphor-react"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
 
import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./styles"
import { NewCycleForm } from "./components/NewCycleForm"
import { CountDown } from "./components/Countdown"
import { FormProvider } from "react-hook-form"
import { CyclesContext } from "../../contexts/CyclesContext"

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(1).max(60)
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCicle, interruptCurrentCycle } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task // variável de explicação para facilitar o entendimento do código

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createNewCicle)} action="">
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <CountDown />

        { activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
