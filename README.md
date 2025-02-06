# 🎓 Academy System (Backend)

Welcome to the **Academy System** backend! This project is built using **Node.js, Express.js, and MongoDB** to manage users, courses, and grades in an educational system. It provides authentication, user management, and data handling through a RESTful API.  

## 🚀 Features  
✅ User authentication (register/login with JWT)  
✅ Role-based access control (Admin & Student)  
✅ CRUD operations for users, courses, and grades  
✅ Secure password hashing with **bcrypt**  
✅ RESTful API with proper request validation  

---

## ⚙️ Prerequisites  
Before running the project, ensure you have:  
- **Node.js** (v14 or higher)  
- **MongoDB** (Local or MongoDB Atlas)  
- **npm** (Node Package Manager)  

---

## 🛠 Installation & Setup  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/mohammadkh24/Academy.git
cd Academy
```

### 2️⃣ Install dependencies  
```bash
npm install
```

### 3️⃣ Configure environment variables  
Create a `.env` file in the root directory and add:  
```ini
PORT=4000
MONGO_URI=mongodb://localhost:27017/Academy
JWT_SECRET=your-secure-secret-key
```

### 4️⃣ Start the server  
For production:  
```bash
npm start
```
For development (with auto-reload using nodemon):  
```bash
npm run dev
```

---

## 📖 API Documentation  
You can access the full API documentation via **Postman**:  
[👉 View API Documentation](https://www.postman.com/teamwork-4920/workspace/my-workspace/collection/38477852-91a670d5-78fe-4689-8a5a-929679a5a066?action=share&creator=38477852)  

---

## 🤝 Contributing  
Want to contribute? Feel free to fork the project, make your changes, and submit a pull request.    

🔹 Built with ❤️ using **Node.js, Express & MongoDB**  
