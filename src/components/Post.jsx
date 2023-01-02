import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/viniciusmaclters.png" />
          <div className={styles.authorInfo}>
            <strong>Vinicius Maclters</strong>
            <span>Web Developer</span>        
          </div>
        </div>

        <time title='02 de Janeiro às 06:23h' dateTime='2023-01-02 06:23:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
       <p>Fala galeraa 👋</p>

       <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

       <p>👉{' '}<a href="">jane.design/doctorcare</a></p>

       <p>
          <a href="">#novoprojeto</a>{' '} {/* serve para dar um espaço. Não recomendado */}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>{' '}
       </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixei seu feedback</strong>

        <textarea
          placeholder='Deixei um comentário'  
        />
        
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
      <Comment />
      <Comment />
      <Comment />
      </div>
    </article>
    )
}