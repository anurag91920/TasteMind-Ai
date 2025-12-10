📘 TEASTEMIND AI — Full Stack AI/ML Platform
React.js + Node.js + Express.js + MySQL + AI/ML
<p align="center"> <img src="https://dummyimage.com/400x120/000/fff&text=TEASTEMIND+AI" alt="Teastemind AI Logo"> </p>
🚀 Project Overview

Teastemind AI एक powerful full-stack AI/ML आधारित Food-Tech Platform है जिसमें:

User Authentication

Menu Management

Order System

Customer Reviews

Review Sentiment Analysis (AI)

Forecasting Model (AI)

Recommender Engine (AI)

Admin Dashboard

Modern UI + Modular Backend Architecture

सब एक ही सिस्टम में मौजूद है।

यह AI/ML integrated React + Node + MySQL का एक complete production-level project है।

🏗️ Tech Stack
🌐 Frontend

React.js

Context API

TailwindCSS / Custom Styles

Axios (API Communication)

Component-Based Architecture

⚙️ Backend

Node.js

Express.js

MySQL

JWT Authentication

Modular Controllers + Routes

🤖 AI / ML

Located in backend:

backend/ml/


Models included:

forecast.js — Sales / Demand Prediction

sentiment.js — NLP review sentiment classifier

recommender.js — Smart product recommendation engine

📁 Project Structure
Frontend Structure
frontend/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── Assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── themes/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .env
├── package.json
└── README.md

Backend Structure
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── auth.controller.js
│   ├── menu.controller.js
│   ├── ml.controller.js
│   ├── order.controller.js
│   └── review.controller.js
│
├── middleware/
│   └── auth.js
│
├── ml/
│   ├── forecast.js
│   ├── recommender.js
│   └── sentiment.js
│
├── models/
│   ├── menu.model.js
│   ├── order.model.js
│   ├── review.model.js
│   └── user.model.js
│
├── routes/
│   ├── auth.routes.js
│   ├── menu.routes.js
│   ├── ml.routes.js
│   ├── order.routes.js
│   └── review.routes.js
│
├── .env
├── app.js
└── package.json

🛢️ Database ER Diagram (ASCII)
+-------------------+       +-------------------+
|      users        |       |      menu         |
+-------------------+       +-------------------+
| id (PK)           |       | id (PK)           |
| name              |       | name              |
| email             |       | price             |
| password          |       | category          |
+-------------------+       +-------------------+

          | 1-N
          |
          v

+-------------------+
|      orders       |
+-------------------+
| id (PK)           |
| user_id (FK)      |
| menu_id (FK)      |
| quantity          |
| total_price       |
+-------------------+

          | 1-N
          |
          v

+-------------------+
|     reviews       |
+-------------------+
| id (PK)           |
| user_id (FK)      |
| menu_id (FK)      |
| rating            |
| review_text       |
| sentiment_score   |
+-------------------+

🏛️ High Level Architecture Diagram
                   ┌───────────────────────────────┐
                   │           FRONTEND             │
                   │        (React.js App)          │
                   └───────────────┬────────────────┘
                                   │ Axios API Calls
                                   ▼
                  ┌────────────────────────────────────────┐
                  │               BACKEND API               │
                  │        Node.js + Express.js             │
                  └───────────────┬────────────────────────┘
         Auth Routes  Menu Routes  Orders Routes  ML Routes
                                   │
                                   ▼
                       ┌──────────────────────┐
                       │      MySQL DB        │
                       └──────────────────────┘
                                   │
                                   ▼
                       ┌──────────────────────┐
                       │    AI / ML Engine    │
                       │ forecast / sentiment │
                       │ recommender models   │
                       └──────────────────────┘

🔧 Installation & Setup Guide
1️⃣ Clone Project
git clone https://github.com/yourname/teastemind-ai.git
cd teastemind-ai

⚙ BACKEND SETUP
2️⃣ Install dependencies
cd backend
npm install

3️⃣ .env (Backend)
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=teastemind_ai

JWT_SECRET=yourjwtsecret

FORECAST_MODEL=true
RECOMMENDER_MODEL=true
SENTIMENT_MODEL=true

4️⃣ Start backend
npm run dev


📌 Opens at → http://localhost:5000/

🌐 FRONTEND SETUP
5️⃣ Install dependencies
cd ../frontend
npm install

6️⃣ .env (Frontend)
REACT_APP_API_URL=http://localhost:5000/

7️⃣ Start frontend
npm start


📌 Opens at → http://localhost:3000/

🤖 AI/ML API Details
1️⃣ Sentiment Analysis
POST /ml/sentiment  
Body: { "text": "Food was amazing!" }

2️⃣ Forecasting
POST /ml/forecast  
Body: { "menuId": 1 }

3️⃣ Recommendation Engine
POST /ml/recommend  
Body: { "userId": 5 }

📡 REST API Endpoints
🔐 Auth
Method	Endpoint	Description
POST	/auth/register	Register user
POST	/auth/login	Login user
GET	/auth/profile	User profile
🍽 Menu

| GET | /menu | Get all menu items |
| POST | /menu/add | Add menu item |

🛒 Orders

| POST | /order/create | Place order |
| GET | /order/list | Get user orders |

⭐ Reviews

| POST | /review/add | Add review |
| GET | /review/list | List reviews |

🤖 ML

| POST | /ml/sentiment | NLP analysis |
| POST | /ml/forecast | Sales forecasting |
| POST | /ml/recommend | Recommendations |

🖼️ Screenshots Section
📌 (Add your project screenshots here)
- Login Page
- Admin Dashboard
- Menu Page
- Orders Page
- AI Sentiment Result
- Recommendations UI

📦 Production Build
Frontend:
npm run build
serve -s build

Backend:
npm start

📜 License

MIT License © 2025 Teastemind AI