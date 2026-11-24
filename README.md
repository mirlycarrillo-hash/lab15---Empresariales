# Laboratorio 15: Autenticación JWT con Django y React

Aplicación con inicio de sesión mediante JWT. El backend (Django REST Framework y SimpleJWT) entrega un token y el frontend (React) lo guarda, lo usa para consultar una ruta privada y lo elimina al cerrar sesión.

## Backend
```
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
cd backend
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```
Rutas: `/api/publico`, `/api/privado`, `/api/token/`, `/api/token/refresh/`

## Frontend
```
cd frontend
npm install
npm run dev
```
Aplicación: http://localhost:5173

## Funcionamiento
- Al iniciar sesión se genera el token y se guarda en `localStorage`.
- Sin token no se puede acceder a `/inicio`: se redirige a `/login`.
- Al cerrar sesión el token se elimina.

## Autor
Mirly Carrillo López.