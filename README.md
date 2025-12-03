# FunVille Toys

![FunVille Toys Screenshot](https://i.ibb.co.com/hFqDQVcj/Screenshot-2025-12-03-094045.png)

**FunVille Toys** is a vibrant and interactive toy marketplace where users can explore, view, and manage a wide range of toys. The platform delivers a fun, safe, and user-friendly experience designed for toy lovers of all ages.

---

## 🔹 Live Website
🌐 **Live URL:** [Visit FunVille Toys](https://stellar-cucurucho-6b728f.netlify.app/)

---

## 🎯 Purpose
The purpose of **FunVille Toys** is to create a seamless online toy experience where users can:

- Browse toys for different age groups  
- View detailed toy information  
- Play games and win prizes (registered users only)  
- Enjoy a smooth, responsive, and visually appealing design across all devices  

---

## 🚀 Key Features

- 🔐 **User Authentication**  
  Email/password and Google login using Firebase Authentication

- 🛡️ **Private Routes**  
  Access to certain pages restricted to logged-in users

- 📦 **Dynamic Toy Listing**  
  Custom hooks for fetching toys from server APIs

- 🧸 **Toy Details Page**  
  Shows image, price, rating, seller info, release date, etc.

- 📱 **Fully Responsive Design**  
  Built with Tailwind CSS + DaisyUI for modern UI components

- 🎉 **Sweet Alerts**  
  Attractive alerts for success/error feedback using SweetAlert2

- ⚠️ **Error Handling & Loader**  
  Custom error page + loader for better UX

- 🗓️ **Date Formatting**  
  Uses `date-fns` for clean, readable date formatting

- 🎡 **Image Sliders**  
  Interactive carousels using Swiper.js

---

## 🛠️ Technology Stack

### **Frontend**
- React 19  
- React Router 7  
- Firebase 12  
- Tailwind CSS 4  
- DaisyUI  
- Swiper.js  
- SweetAlert2  
- React Icons  
- React Helmet  
- Axios  
- date-fns  

### **Development Tools**
- Vite  
- ESLint + Plugins  
- TypeScript type definitions  
- @vitejs/plugin-react  

---

## 📦 Dependencies

### **Production Dependencies (`dependencies`)**
- @tailwindcss/vite  
- axios  
- date-fns  
- firebase  
- react  
- react-dom  
- react-helmet  
- react-icons  
- react-router  
- sweetalert2  
- swiper  
- tailwindcss  

### **Development Dependencies (`devDependencies`)**
- @eslint/js  
- @types/react  
- @types/react-dom  
- @vitejs/plugin-react  
- daisyui  
- eslint  
- eslint-plugin-react-hooks  
- eslint-plugin-react-refresh  
- globals  
- vite  

---

## 💻 Local Setup

Follow these steps to run **FunVille Toys** locally:

1. **Clone the repository** </br>
git clone (your-repo-url) </br>
cd funville-toys

2. **Install dependencies and start development server** </br>
npm install

3. **Create .env file (if needed) and add your Firebase credentials** </br>
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

4. **Run the development server** </br>
npm run dev

5. **Open in browser** </br>
Visit http://localhost:5173 (or the port Vite shows) to see the app.

---

## 👨‍💻 Author
Developed by **Anas Bin Shahid**  
A creative web developer passionate about building friendly, fun, and interactive web applications.

---
