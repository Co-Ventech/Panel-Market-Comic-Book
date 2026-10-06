# Panel Market

Panel Market is a fictional comics storefront built with Next.js, React, Fastify, Sequelize, and PostgreSQL. The frontend and API live in separate folders in this repository.

## Features

### Frontend

- Storefront homepage with featured catalog sections
- Search page and product detail pages
- Cart state managed with React Context
- Flash sale, new releases, and best sellers pages
- Checkout and order confirmation UI
- Four local product images in `frontend/public`

The catalog is currently sample data in the frontend. Checkout is a UI flow and does not create a backend order or charge a payment method.

### Backend

- Fastify HTTP server
- User registration and login routes
- Joi request validation
- Sequelize user model backed by PostgreSQL
- Password hashing and JWT helpers
- Local database configuration through environment variables

The API currently exposes a health check and authentication endpoints. The frontend does not yet fetch its catalog or checkout data from this API.

## Architecture

The backend follows a layered MVC-style design:

```text
HTTP request → Route → Validator → Controller → Service → Model → PostgreSQL
```

- **Routes** map HTTP methods and paths to handlers.
- **Validators** check request input before controller logic runs.
- **Controllers** handle HTTP input and responses.
- **Services** hold application logic outside the HTTP layer.
- **Models** define persisted data and database behavior.
- **Utilities** provide reusable functions such as password hashing and JWT creation.

This separation keeps each part focused, makes changes easier to isolate, and gives the application a clear place to add features as it grows. In the frontend, reusable React components compose pages, while Context shares cart state between them.

## Requirements

- Node.js 18 or newer
- PostgreSQL for the backend

## Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Run the backend

Create a PostgreSQL database, then configure the connection:

```bash
cd backend
copy .env.example .env
```

Edit `backend/.env` with your local PostgreSQL username, password, host, port, and database name. Then run:

```bash
npm install
npm run dev
```

The API listens on `http://127.0.0.1:5000` by default. `backend/.env` is excluded from Git; do not commit credentials.

## API endpoints

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/api/v1/` | Health check |
| `POST` | `/api/v1/auth/register` | Register a user |
| `POST` | `/api/v1/auth/login` | Authenticate a user |

## Repository layout

```text
frontend/
  app/          Next.js routes and pages
  components/   Reusable storefront UI
  context/      Shared cart state
  public/       Local image and static assets
backend/
  config/       PostgreSQL and Sequelize configuration
  src/routes/       API route definitions
  src/controllers/  HTTP request handlers
  src/services/     Application logic
  src/models/       Sequelize models
  src/validators/   Request validation
  src/utils/        Shared helpers
```
