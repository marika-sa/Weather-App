# Weather App

A full-stack weather app built with **Next.js (TypeScript)** on the frontend and **C# ASP.NET Core** on the backend. Displays current weather, timezone, and astronomy data for 3 cities: Dublin, London, and Tokyo.

---

## Prerequisites

Make sure you have the following installed before getting started:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [.NET SDK](https://dotnet.microsoft.com/download) (v7 or higher)
- A [RapidAPI](https://rapidapi.com) account with a key for [WeatherAPI](https://rapidapi.com/weatherapi/api/weatherapi-com)

---

## Project Structure

```
weather-app/
├── server/       # C# ASP.NET Core backend
└── client/       # Next.js TypeScript frontend
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

---

### 2. Set Up the Server (C#)

Navigate to the server folder:

```bash
cd server
```

Add your RapidAPI key to `appsettings.json` — create this file in the `server/` folder (it is gitignored):

```json
{
  "WeatherApiKey": "your_rapidapi_key_here",
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

Restore dependencies and run the server:

```bash
dotnet restore
dotnet run
```

The server will start on `http://localhost:5290`. You can verify it's running by visiting:

```
http://localhost:5290/api/locations
http://localhost:5290/api/weather/{city}
http://localhost:5290/api/astronomy/{city}
http://localhost:5290/api/timezone/{city}

```

Each of these should be available while running the server.

---

### 3. Set Up the Client (Next.js)

Open a new terminal and navigate to the client folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## Running Both Servers

You will need two terminals running simultaneously:

| Terminal | Command                    | URL                   |
| -------- | -------------------------- | --------------------- |
| Server   | `cd server && dotnet run`  | http://localhost:5290 |
| Client   | `cd client && npm run dev` | http://localhost:3000 |

---

## API Endpoints

All endpoints are proxied through Next.js — the client calls `/api/...` and Next.js forwards to the C# server automatically.

| Method | Endpoint                    | Description                            |
| ------ | --------------------------- | -------------------------------------- |
| GET    | `/api/locations`            | Returns available locations            |
| GET    | `/api/weather/{location}`   | Returns current weather for a location |
| GET    | `/api/timezone/{location}`  | Returns timezone data for a location   |
| GET    | `/api/astronomy/{location}` | Returns astronomy data for a location  |

Available locations: `london`, `paris`, `dublin`

---

## Environment Variables

The only environment variable needed is the RapidAPI key, which goes in `server/appsettings.json` as shown above. This file is gitignored so it will never be committed to the repository.

---

## Tech Stack

| Layer        | Technology                 |
| ------------ | -------------------------- |
| Frontend     | Next.js, TypeScript, React |
| Backend      | C# ASP.NET Core            |
| Weather Data | WeatherAPI via RapidAPI    |
| Proxy        | Next.js rewrites           |
