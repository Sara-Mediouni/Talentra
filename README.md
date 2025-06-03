# 🚀 TALENTRA — Job Matching Platform (NestJS + Next.js)

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![NextJS](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)


🎯 **TALENTRA** is a modern job platform built with a microservice architecture using **NestJS** for the backend and **Next.js** for the frontend. It connects **candidates** and **recruiters**, making the hiring process fast, personalized, and intuitive.

---

## 📸 Preview

![talentra-preview](./public/preview.png) <!-- Ajoute une image si tu en as une -->

---

## 🛠️ Tech Stack

### Frontend
- ⚡️ [Next.js](https://nextjs.org/) — React Framework
- 🎨 Tailwind CSS — Utility-first CSS
- 🌐 TypeScript

### Backend
- 🔧 [NestJS](https://nestjs.com/) — Node.js Framework
- 🧩 Microservices (with Redis transport)
- 📦 MongoDB (via Mongoose)
- ⚙️ Redis (for microservices transport + caching)
- 🔐 JWT Authentication

---

## 🔍 Features

### 👤 For Candidates
- Register / Login with secure JWT
- Complete personal & professional profile
- Browse & search job offers by filters
- Apply to job offers
- Track application status

### 🏢 For Companies
- Register / Login
- Create & manage job offers
- Filter and view candidates
- Manage applications

---

## 🧪 Tests

- Unit tests with **Jest** & **React Testing Library**
- Coverage badges and CI/CD (GitHub Actions)

---

## 📁 Project Structure
```bash
talentra/
├── gateway/ # NestJS API Gateway
├── user-service/ # Microservice - Users (candidates & companies)
├── job-service/ # Microservice - Job offers
├── frontend/ # Next.js frontend
├── shared/ # Shared DTOs / types
└── docker/ # Docker & docker-compose setup

yaml
Copy
Edit
```