import styles from './Login.module.css';
import { useAuthentication } from '../../hooks/useAutentication';
import { useState, useEffect } from 'react';

const Login = () => {

  const [ email, setEmail ] = useState('teste@teste.com');
  const [ password, setPassword ] = useState('123456');
  const [ error, setError ] = useState('');
  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const user = {
      email,
      password
    }
    const res = await login(user)
  };

  useEffect(() => {
    if(authError) {
      setError(authError)
    }
  }, [authError])


  return (
    <>
      <div className={styles.login}>
        <h1>Entrar</h1>
        <p>Faça o login para poder utilizar o sistema.</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>E-mail:</span>
            <input type="email"
              name="email"
              id="email"
              required placeholder='E-mail do usuário'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Senha:</span>
            <input type="password"
              name="password"
              id="password"
              required placeholder='Insira sua senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {!loading && <button className='btn'>Entrar</button>}
          {loading && <button className='btn' disable>Aguarde...</button>}
          {error && <p className='error'>{error}</p>}
        </form>
      </div>
      <div className={styles.informationContainer}>
        <div className={styles.information}>
          <p>Este é um email criado para você testar todas as funcioanlidades sem ter que se cadastrar.</p>
        </div>
      </div>
    </> 
  )
}

export default Login;