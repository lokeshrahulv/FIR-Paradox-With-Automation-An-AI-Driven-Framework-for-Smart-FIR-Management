✅ FINAL README.md (Complete Version)
# 📌 FIR Paradox With Automation  
### **An AI-Driven Framework for Smart FIR Management**

FIR Paradox is an end-to-end digital FIR lifecycle management system designed for Government and Police operations.  
It integrates **AI-powered FIR tagging**, **automated workflows**, **multi-role access portals**, and **real-time case monitoring**.

This platform connects **Citizens ↔ Police ↔ Judiciary** through a unified system, improving transparency, reducing manual errors, and accelerating investigation workflows.

---

# 🚀 Key Features

## 👤 **Citizen Portal**
- File FIR online with documents, ID proof & evidence uploads  
- Track FIR status in real-time (Police + Judiciary updates)  
- View complete timeline with all system-generated events  
- Download approved FIR as a PDF  

---

## 👮 **Police Operations Console**
- View all pending FIRs requiring verification  
- Automated and manual section tagging (IPC, CrPC, etc.)  
- Case timeline with event audit history  
- Officer profile directory (duties, badges, station mapping)  
- Wanted & Missing Registry dashboard  
- Shift scheduling and task assignment  
- Daily crime summary & trends  

---

## ⚖ **Judiciary Console**
- Review FIRs forwarded by Police  
- Accept / Reject FIRs  
- Add sections, comments, or hearing dates  
- Send decisions back to Police  
- Full transparency through timeline tracking  

---

## 🤖 **AI Automation (ML Microservice)**
- Predicts FIR category from text  
- Suggests relevant IPC/CrPC sections  
- Extracts key details from descriptive text  
- Supports FastAPI inference backend  
- Integrates seamlessly with Express backend  

---

# 🛠 Tech Stack

## **Frontend**
- **React.js**  
- **Vite** (development server & build tool)  
- **TailwindCSS**  
- **HTML5 / CSS3 / JavaScript (ES6+)**  

## **Backend**
- **Node.js + Express.js**  
- **JWT Authentication**  
- **REST API Architecture**  

## **Database**
- **MongoDB**  
- Mongoose ODM model structure  

## **Machine Learning Microservice**
- **Python (FastAPI)**  
- NLP-based classification models  
- `requirements.txt` included for dependency setup  

---

# 📂 Project Folder Structure

```bash
FIR-Paradox/
│
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   ├── services/
│   │   │   └── api.js
│   │   └── assets/           # screenshots
│   └── package.json
│
├── backend/                  # Express.js backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── ml-service/               # AI / Machine Learning Module
│   ├── app/
│   │   ├── main.py
│   │   ├── routers/
│   │   └── services/
│   ├── requirements.txt
│
└── README.md

⚙️ Installation & Setup Guide
1️⃣ Clone the Repository
git clone https://github.com/your-username/fir-paradox.git
cd fir-paradox

2️⃣ Install & Run Frontend
cd frontend
npm install
npm run dev


Run on:
➡ http://localhost:5173/

3️⃣ Install & Run Backend
cd backend
npm install
npm start


Backend runs at:
➡ http://localhost:5000/

4️⃣ Install & Run ML Service
cd ml-service
pip install -r requirements.txt
uvicorn app.main:app --reload


ML API runs at:
➡ http://localhost:8000/

🔐 Environment Variables
Backend (.env)
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret
PORT=5000

Frontend (.env)
VITE_API_URL=http://localhost:5000

📸 Screenshots (UI Showcase)
🔹 Landing Page

![Landing Page](./assets/landing page.png)

🔹 Police Login

![Police Login](./assets/POLICE LOGIN.png)

🔹 Officer Profiles

![Officer Profiles](./assets/DETAIL OFFICERS LIST.png)

🔹 Wanted / Missing Registry

![Missing Registry](./assets/MISSING AND WANTED .png)

🔹 Legal Reference Sections Hub

🔹 FIR Case Timeline

![Case Timeline](./assets/TIME LINE.png)

🔹 Police Dashboard

![Police Dashboard](./assets/Track FIR.png)

🔹 Download FIR

![Download FIR](./assets/DOWNLOAD FIR.png)

🔹 Track FIR (Citizen)

![Track FIR](./assets/Track FIR.png)

🔹 File an FIR

![File FIR](./assets/file a FIR.png)
