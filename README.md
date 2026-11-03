# SINAN.DEV — Personal Portfolio

A modern, responsive personal portfolio website showcasing my **skills, projects, education, certifications, experience, and contact information**.

Built with **React.js and Vite**, with a focus on clean UI, responsive design, smooth animations, and a professional developer experience.

---

## 🚀 Tech Stack

- **Frontend:** React.js
- **Build Tool:** Vite
- **Languages:** JavaScript, HTML, CSS
- **Icons:** Lucide React
- **Version Control:** Git & GitHub
- **Deployment:** Vercel

---

## ✨ Features

- 🎨 Modern and responsive design
- 👨‍💻 Developer profile and introduction
- 🛠️ Technical skills showcase
- 🚀 Projects portfolio
- 💼 Internship / experience section
- 🎓 Education details
- 🏆 Certifications and achievements
- 📄 Resume viewer
- 📸 Personal profile photo
- 📬 Contact section
- 🔗 LinkedIn, GitHub, Instagram and Email links
- 📱 Mobile-friendly layout
- ✨ Smooth animations and interactive UI
- ⬆️ Back-to-top navigation

---

## 📂 Project Structure

```text
sinan-portfolio/
│
├── public/
│   ├── certificates/
│   │   ├── degree-certificate.pdf
│   │   └── ...
│   ├── my_self.png
│   ├── SinanResume.pdf
│   └── ...
│
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MahammadSinan48/sinan-portfolio.git
cd sinan-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The website will be available on the local development URL shown in your terminal.

---

## 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

## ✏️ Customization

Most personal information can be updated from the configuration and data sections near the top of:

```text
src/App.jsx
```

### Personal Information

Update the `CONFIG` object for:

- Email
- LinkedIn
- GitHub
- Instagram
- Resume
- Profile photo

### Experience

Update the `EXPERIENCE` section to add:

- Job / internship title
- Company
- Dates
- Technologies
- Responsibilities

### Certifications

Update the `CERTS` array to add:

- Certificate name
- Issuing organization
- Year
- Category
- Certificate PDF

---

## 📄 Assets

Place public assets inside:

```text
public/
```

For example:

```text
public/my_self.png
public/SinanResume.pdf
public/certificates/degree-certificate.pdf
```

Reference them in React using paths beginning with `/`:

```jsx
<img src="/my_self.png" alt="Mahammad Sinan" />
```

Example certificate:

```jsx
<a href="/certificates/degree-certificate.pdf">
  View Certificate
</a>
```

---

## 🔗 Connect With Me

- **GitHub:** MahammadSinan48
- **LinkedIn:** Mahammad Sinan
- **Instagram:** @md.sinan.in
- **Email:** mahammadsinan4807@gmail.com

---

## 🌐 Deployment

This project is optimized for deployment with **Vercel**.

### Deploy with Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Select **Vite** as the framework.
4. Use:

```text
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

5. Click **Deploy**.

Every future push to the connected GitHub repository can trigger a new deployment.

---

## 🔄 Updating the Portfolio

After making changes locally:

```bash
git add .
git commit -m "Update portfolio"
git push
```

If the repository is connected to Vercel, the new version can be deployed automatically.

---

## 🛡️ Git Ignore

The following generated or private files should not be committed:

```text
node_modules/
dist/
.env
.env.local
```

---

## 👨‍💻 Author

**Mahammad Sinan**

BE Computer Science and Engineering — 2026

Interested in:

- Software Development
- Full-Stack Development
- AI & Machine Learning
- Web Development
- Problem Solving

---

## 📜 License

This project is created for personal portfolio and professional showcase purposes.

© 2026 Mahammad Sinan. All rights reserved.