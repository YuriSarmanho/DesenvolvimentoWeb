import  { PencilLine } from 'phosphor-react'
import style from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img 
        className={style.cover} 
        src="https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={style.profile}>
        <img className={style.avatar} src="https://github.com/YuriSarmanho.png"/>
        <strong>Yuri Sarmanho</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#"> <PencilLine size={20}/> Editar seu perfil</a>
      </footer>
    </aside>
  )
}