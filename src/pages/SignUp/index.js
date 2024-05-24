import { useState, useContext } from 'react'
// import login from '../../assets/login.png'
import you from '../../assets/you.png'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/auth'

export default function SignUp() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signUp, loadingAuth } = useContext(AuthContext)

    async function handleSubmit(e){
      e.preventDefault()

      if(nome !== '' && email !== '' && password !== ''){
       await signUp(email, password, nome)
      }
        
    }
    
  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={you} alt="Logo do sistema de chamados" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Nova conta</h1>
          <input 
            type="text" 
            placeholder="Digite seu nome..."
            value={nome}
            onChange={ (e) => setNome(e.target.value) } 
          />

          <input 
            type="text" 
            placeholder="Digite seu email..."
            value={email}
            onChange={ (e) => setEmail(e.target.value) } 
          />

          <input 
            type="password" 
            placeholder="Digite sua senha..."
            value={password}
            onChange={ (e) => setPassword(e.target.value) } 
          />
            <button type='submit'>
              {loadingAuth ? 'Carregando...' : 'Cadastrar'}
            </button>
        </form>

        <span className='register'>Já possui uma conta?
            <Link to='/'> Faça login</Link>
        </span>

      </div>
    </div>
  );
}