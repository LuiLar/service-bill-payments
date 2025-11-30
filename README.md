# service-bill-payments

A small service (microservice) for managing client bills and payments. It provides a simple REST API to:

- Create bills.
- Mark bills as paid.
- Retrieve pending bills and payment history for a client.

Stack: Node.js (ES Modules), Express, Mongoose (MongoDB).

Project layout (key files):

- `src/index.js` — server bootstrap and route registration.
- `src/routes/bills.route.js` — bill and payment routes.
- `src/routes/health.route.js` — health check route (`/`).
- `src/models/bill.model.js` — Mongoose schema for bills.

Main endpoints

- `GET /` — health check.
- `POST /bills` — create a new bill. Example request body:

  ```json
  {
    "clientId": 123,
    "serviceType": "Electricity",
    "billingPeriod": "2025-11",
    "amount": 150.75
  }
  ```

- `POST /payments` — mark a bill as paid. Example request body:

  ```json
  {
    "clientId": 123,
    "serviceType": "Electricity",
    "billingPeriod": "2025-11"
  }
  ```

- `GET /clients/:id/pending-bills` — get pending bills for client `:id`.
- `GET /clients/:id/payment-history` — get paid bills for client `:id`.

See `src/controllers/bills.controller.js` for behaviour and HTTP status codes returned by each endpoint.

Requirements

- Node.js 18+ (or another version that supports ESM).
- npm or yarn.
- MongoDB.

Environment variables

- `PORT` — port the server listens on.
- `MONGO_URI` — MongoDB connection string.

Install and run (development)

1. Install dependencies:

```bash
cd service-bill-payments
npm install
```

2. Duplicate and rename `.env.example` to `.env`, asign value to the vars and then start in development mode:

```bash
npm run dev
```

3. Run your local MongoDB and create a new DB (whichever name you like) and create 2 collections within it: `bills` and `clients`. You can find dump files for each collection respectively, in a folder called `dumps`.

Usage examples (curl)

- Create a bill:

```bash
curl -X POST http://localhost:3000/bills \
	-H "Content-Type: application/json" \
	-d '{"clientId":123,"serviceType":"Water","billingPeriod":"2025-11","amount":45.5}'
```

- Pay a bill:

```bash
curl -X POST http://localhost:3000/payments \
	-H "Content-Type: application/json" \
	-d '{"clientId":123,"serviceType":"Water","billingPeriod":"2025-11"}'
```

- Get pending bills:

```bash
curl http://localhost:3000/clients/123/pending-bills
```

Notes and recommendations

- The data model in `src/models/bill.model.js` defines enums for `serviceType` and `status`.
- Send `clientId` as an integer and use the correct types for other fields.
- Could add SWAGER to document all endpoints
- Didn't have time to implement JWT
