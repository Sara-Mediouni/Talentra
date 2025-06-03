# 🚀 Talentra – Modernizing the Job Search Experience

<p align="center">
  <img src="./frontend/public/Capture d’écran 2025-06-03 133810.png" alt="Talentra Hero" width="600"/>
</p>

<p align="center">
  <b>Empowering individuals and companies to connect faster, smarter.</b><br/>
  Fullstack platform using NestJS microservices, Next.js frontend, TailwindCSS UI and Redis communication.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" />
</p>

---

## 📚 Table of Contents

- [🔍 Preview](#-preview)
- [⚙️ Tech Stack](#️-tech-stack)
- [✨ Features](#-features)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🛣️ Roadmap](#-roadmap)
- [📄 License](#-license)

---

## 🔍 Preview

<p align="center">
  <img src="./public/hero-talentra.png" alt="Hero Preview" width="70%"/>
</p>

---

## ⚙️ Tech Stack

- 🔧 **NestJS** – Backend microservices
- 🎨 **Next.js** – Frontend rendering
- 💅 **TailwindCSS** – UI styling
- 🧠 **Redis** – Microservice communication
- 🗂 **MongoDB** – Database (User, Jobs, Applications)

---

## ✨ Features

### 👤 For Job Seekers:
- Register / Login
- Profile creation with skills and CV
- Job search by category and keyword
- Apply to jobs and track status

### 🏢 For Employers:
- Company registration & dashboard
- Job posting & management
- Browse and filter candidates

### 🔁 Shared:
- JWT Auth & Role-based access
- Modular NestJS microservices
- Smart filtering and UX with TailwindCSS

---

## 🚀 Getting Started

### Backend
```bash
cd backend
npm install
npm run start:dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Ensure Redis and MongoDB are running locally or in Docker.
## 📁 Project Structure


```bash
talentra/
│
├── gateway/                # NestJS API Gateway
├── user-service/           # Microservice - Users
├── job-service/            # Microservice - Job Offers
├── application-service/    # Microservice - Applications
├── frontend/               # Next.js client app
└── shared/                 # Shared interfaces and DTOs

```