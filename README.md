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


Backend runs at:
➡ http://localhost:5000/

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

<img width="1920" height="1080" alt="landing page" src="https://github.com/user-attachments/assets/ae8fdf51-ec2a-46ab-825c-61fd0929a1d5" />

🔹 Police Login
<img width="1919" height="1079" alt="POLICE LOGIN" src="https://github.com/user-attachments/assets/b4d4b415-c138-4334-93ca-32b55be8f67c" />

🔹 Officer Profiles
<img width="1920" height="1080" alt="DETAIL OFFICERS LIST" src="https://github.com/user-attachments/assets/f89af75b-1188-428d-b902-b9b91a58eb33" />

🔹 Wanted / Missing Registry
<img width="1918" height="1078" alt="MISSING AND WANTED " src="https://github.com/user-attachments/assets/d633cb43-dbea-4f80-957b-324289eb8146" />

🔹 Legal Reference Sections Hub
<img width="1920" height="1080" alt="SECTIONS" src="https://github.com/user-attachments/assets/c6bd1130-7625-483d-8c62-bb1dc04efb7e" />

🔹 FIR Case Timeline
<img width="1919" height="1079" alt="TIME LINE" src="https://github.com/user-attachments/assets/31db61a8-4d92-429a-b10d-e2af6e2d84e4" />

🔹 Police Dashboard
<img width="1917" height="1077" alt="Track FIR" src="https://github.com/user-attachments/assets/f39e4ae2-7ad2-4dba-8e81-ee7856f38b73" />

🔹 Download FIR
<img width="1918" height="1078" alt="DOWNLOAD FIR" src="https://github.com/user-attachments/assets/b9314cc3-8a5a-4271-8141-42aa47a891b4" />

🔹 Track FIR (Citizen)
<img width="1917" height="1077" alt="Track FIR" src="https://github.com/user-attachments/assets/8f95c6e0-c7d5-4de2-8183-7958e1a6ca51" />

🔹 User Details ( Admin )
<img width="1305" height="850" alt="USER DETAILS" src="https://github.com/user-attachments/assets/93f2a00b-bd14-47e9-a721-c84f0a39cead" />

🔹 Attendance (Police)
<img width="1237" height="968" alt="ATTENDANCE" src="https://github.com/user-attachments/assets/7ad391e4-035c-4194-b369-b769a3dac808" />

🔹 Judge Portal
<img width="1531" height="970" alt="JUDGE DECISION" src="https://github.com/user-attachments/assets/30a1c9af-0fee-4fe8-b51d-8f45cb862629" />

🔹 Admin Analytics
<img width="825" height="786" alt="ADMIN PORTAL" src="https://github.com/user-attachments/assets/8cf86af1-f634-49f8-b5ae-03563777c06b" />
