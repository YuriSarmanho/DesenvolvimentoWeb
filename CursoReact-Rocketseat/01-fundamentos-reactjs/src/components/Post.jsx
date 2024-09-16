import style from './Post.module.css'

export function Post () {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img className={style.avatar} src="https://github.com/YuriSarmanho.png" />
          <div className={style.autorInfo}>
            <strong>Yuri Sarmanho</strong>
            <span>Web Developer</span>
          </div>
        </div>



        <time title='21 de Agosto às 23:52' dateTime='2024-08-21 23:52'>Publicado há 1h</time>
      </header>

      <div className={style.content}>
      <p>Fala galeraa 👋</p>

      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

      <p>👉 <a href="">jane.design/doctorcare</a></p>

      <p> <a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}