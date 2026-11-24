import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { iniciarSesion } from '../services/auth'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [cargando, setCargando] = useState(false)
  const navigate = useNavigate()

  const enviar = async (e) => {
    e.preventDefault()
    setError(null)
    setCargando(true)
    try {
      await iniciarSesion(username, password)
      navigate('/inicio')
    } catch (err) {
      setError(err.message)
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="login-contenedor">
      <form className="login-tarjeta" onSubmit={enviar}>
        <h1>Iniciar sesión</h1>

        <label>Usuario</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={cargando}>
          {cargando ? 'Ingresando...' : 'Ingresar'}
        </button>
      </form>
    </div>
  )
}