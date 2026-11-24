import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cerrarSesion, getToken, obtenerPrivado } from '../services/auth'

export default function Inicio() {
  const [mensaje, setMensaje] = useState('Cargando...')
  const navigate = useNavigate()
  const token = getToken()

  useEffect(() => {
    obtenerPrivado()
      .then((datos) => setMensaje(datos.mensaje))
      .catch(() => navigate('/login'))
  }, [navigate])

  const salir = () => {
    cerrarSesion()
    navigate('/login')
  }

  return (
    <div className="login-contenedor">
      <div className="login-tarjeta">
        <h1>Página privada</h1>
        <p>Respuesta del servidor: <strong>{mensaje}</strong></p>

        <p className="token-etiqueta">Token guardado en el navegador:</p>
        <p className="token">{token ? `${token.slice(0, 40)}...` : 'Sin token'}</p>

        <button onClick={salir}>Cerrar sesión</button>
      </div>
    </div>
  )
}