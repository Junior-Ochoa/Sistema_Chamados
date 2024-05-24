import { useState, useContext } from 'react'
import "./signin.css";

// import logo from "../../assets/logo.png";
// import login from '../../assets/login.png'
import you from '../../assets/you.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'

 
export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn, loadingAuth } = useContext(AuthContext)

    async function handleSignIn(e){
      e.preventDefault()

      if(email !== '' && password !== ''){
        await signIn(email, password)
      }
    }
    
  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={you} alt="Logo do sistema de chamados" />
        </div>

        <form onSubmit={handleSignIn}>
          <h1>Entrar</h1>
          <input 
            type="text" 
            placeholder="E-mail"
            value={email}
            onChange={ (e) => setEmail(e.target.value) } 
          />

          <input 
            type="password" 
            placeholder="Senha"
            value={password}
            onChange={ (e) => setPassword(e.target.value) } 
          />
            <button type='submit'>
              {loadingAuth ? "Carregando..." : "Acessar"}
            </button>
        </form>

        <span className='register'>Não tem uma conta?
            <Link to='/register'> Cadastre-se</Link>
        </span>

      </div>
    </div>
  );
}
