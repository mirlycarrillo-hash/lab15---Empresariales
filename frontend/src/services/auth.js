const API_URL = 'http://127.0.0.1:8000/api'
const CLAVE_TOKEN = 'token'

export async function iniciarSesion(username, password) {
  const respuesta = await fetch(`${API_URL}/token/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })

  if (!respuesta.ok) {
    throw new Error('Usuario o contraseña incorrectos')
  }

  const datos = await respuesta.json()
  localStorage.setItem(CLAVE_TOKEN, datos.access) 
  return datos.access
}

export function cerrarSesion() {
  localStorage.removeItem(CLAVE_TOKEN) 
}

export function getToken() {
  return localStorage.getItem(CLAVE_TOKEN)
}

export function estaAutenticado() {
  return Boolean(getToken())
}

export async function obtenerPrivado() {
  const respuesta = await fetch(`${API_URL}/privado`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  })

  if (respuesta.status === 401) {
    cerrarSesion() 
    throw new Error('Sesión expirada')
  }
  return respuesta.json()
}