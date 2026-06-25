======================================================================
                 LASTLINE FINANCE WEBSITE PROJECT - README
======================================================================

Welcome to the LastLine Finance project! This is a Full-Stack website 
application designed to handle client loan applications seamlessly. 

Tech Stack:
-----------
- Frontend: HTML5, Tailwind CSS, JavaScript (Fetch API)
- Backend: Node.js, Express.js
- Database: MongoDB (via Mongoose)
- Email Service: Nodemailer (Gmail App Passwords)

Project Structure:
------------------
/root
  ├── /backend
  │     ├── /config
  │     │     └── db.js (MongoDB Connection)
  │     ├── /controllers
  │     │     └── applicationController.js
  │     ├── /models
  │     │     └── applicationModel.js (Mongoose Schema)
  │     ├── server.js (Main Express Server)
  │     ├── .env (Environment Variables - Secret)
  │     └── package.json
  │
  └── /frontend
        ├── apply now.html (Client Application Form)
        ├── admin.html (Professional Admin Dashboard)
        ├── script.js (Frontend Form Submit logic)
        ├── index.html, About Us.html, Our Services.html, etc.