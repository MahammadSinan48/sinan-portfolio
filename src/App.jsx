import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Instagram, Mail, Menu, X, Download, ArrowRight, ExternalLink, Code2, Layout, Server, Database, Wrench, Users, ScanFace, GraduationCap, Briefcase, Award, Send, ShoppingCart, BookOpen, MessageSquare, Sparkles
} from 'lucide-react'

/* ======= EDIT YOUR DETAILS HERE ======= */
const CONFIG = {

  email: 'mahammadsinan4807@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mahammad-sinan',
  github: 'https://github.com/MahammadSinan48',
  instagram: 'https://www.instagram.com/md.sinan.in/',
  resume: '/SinanResume.pdf', // replace with /resume.pdf after adding it to /public
  photo: '/my_self.png', // e.g. '/profile.jpg' placed in /public; empty shows placeholder
}





const CERTS = [
  {
    title: "BE – Computer Science and Engineering",
    issuer: "Ghousia College of Engineering / VTU",
    year: "2026",
    category: "Education",
    icon: "🎓",
    file: "/certificates/degree-certificate.pdf",
  },
  {
    title: "Python Programming",
    issuer: "Python Certification",
    year: "2026",
    category: "Programming",
    icon: "🐍",
    file: "/certificates/python-certificate.pdf",
  },
  {
    title: "JavaScript Development",
    issuer: "JavaScript Certification",
    year: "2026",
    category: "Programming",
    icon: "⚡",
    file: "/certificates/javascript-certificate.pdf",
  },
  {
    title: "Full Stack Development Internship",
    issuer: "QSpiders",
    year: "2026",
    category: "Internship",
    icon: "💼",
    file: "/certificates/internship-certificate.pdf",
  },
  {
    title: "AI-Based Smart Attendance System",
    issuer: "Final Year Project",
    year: "2026",
    category: "Project",
    icon: "🤖",
    file: "/certificates/project-certificate.pdf",
  },
  {
    title: "Yoga Certificate",
    issuer: "Yoga / Wellness Program",
    year: "2026",
    category: "Achievement",
    icon: "🧘",
    file: "/certificates/yoga-certificate.pdf",
  },
];










const NAV = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']
const TYPED = ['Computer Science Engineer', 'Aspiring Software Engineer', 'Aspiring Full Stack Developer', 'Python & Web Enthusiast']
const SKILLS = [
  { t: 'Programming', i: Code2, items: ['Java', 'C', 'Python'] },
  { t: 'Frontend', i: Layout, items: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'] },
  { t: 'Backend', i: Server, items: ['Django'] },
  { t: 'Database', i: Database, items: ['MySQL', 'MongoDB'] },
  { t: 'Tools', i: Wrench, items: ['Git', 'GitHub', 'VS Code'] },
  { t: 'Other', i: Users, items: ['Problem Solving', 'Communication', 'Team Collaboration'] },
]
const PROJECTS = [
  { n: 'AI-Based Smart Attendance System', s: 'Using Face Recognition', i: ScanFace, tags: ['Python', 'OpenCV', 'Machine Learning'], pts: ['Automated attendance using facial recognition', 'Real-time face detection and attendance recording', 'Reduces proxy attendance'] },
  { n: 'Ghousia Connect', s: 'College platform', i: MessageSquare, tags: ['HTML', 'CSS', 'JavaScript'], pts: ['Platform connecting students and faculty', 'Student-focused web application'] },
  { n: 'U100 E-Commerce Website', s: 'Responsive storefront', i: ShoppingCart, tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], pts: ['Responsive shopping interface', 'Cart system and interactive modals'] },
  { n: 'Student Notes & Question-Paper Portal', s: 'Academic resources', i: BookOpen, tags: ['Web Platform'], pts: ['Organised notes and previous question papers', 'Easy academic resource access'] },
].map(p => ({ ...p, github: CONFIG.github, demo: '#contact' })) // replace with real repo / demo URLs
const EXPERIENCE = { role: 'Java full Stack Development Intern', company: 'Qspiders',   dates: ' 22 jan 2026 – 10 jul 2026', tags: ['Java','HTML', 'CSS', 'JavaScript', 'SQL', 'MS Excel'] }
/*const CERTS = [] // e.g. { name: 'Certificate Title', issuer: 'Issuer', year: '2025', link: 'https://...' } */

/* ======= HOOKS & SMALL COMPONENTS ======= */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el); return () => io.disconnect()
  }, [])
  return ref
}
const Reveal = ({ children, delay = 0, className = '' }) => {
  const ref = useReveal()
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}
function Typing({ words }) {
  const [txt, setTxt] = useState(''); const [w, setW] = useState(0); const [del, setDel] = useState(false)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setTxt(words[0]); return }
    const full = words[w]
    const id = setTimeout(() => {
      if (!del && txt === full) return setDel(true)
      if (del && txt === '') { setDel(false); return setW((w + 1) % words.length) }
      setTxt(full.slice(0, txt.length + (del ? -1 : 1)))
    }, !del && txt === full ? 1400 : del ? 35 : 75)
    return () => clearTimeout(id)
  }, [txt, del, w, words])
  return <span className="typed" aria-label={words[w]}>{txt}<i className="caret" /></span>
}
function Particles() {
  const ref = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const c = ref.current, x = c.getContext('2d'); let raf, W, H
    const resize = () => { W = c.width = innerWidth; H = c.height = innerHeight }
    resize(); addEventListener('resize', resize)
    const n = Math.min(70, Math.floor(innerWidth / 18))
    const ps = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3, r: Math.random() * 1.6 + .4 }))
    const tick = () => {
      x.clearRect(0, 0, W, H)
      ps.forEach((p, i) => {
        p.x = (p.x + p.vx + W) % W; p.y = (p.y + p.vy + H) % H
        x.fillStyle = 'rgba(139,212,255,.7)'; x.beginPath(); x.arc(p.x, p.y, p.r, 0, 7); x.fill()
        for (let j = i + 1; j < n; j++) { const q = ps[j], d = Math.hypot(p.x - q.x, p.y - q.y); if (d < 110) { x.strokeStyle = `rgba(124,92,255,${.18 * (1 - d / 110)})`; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(q.x, q.y); x.stroke() } }
      })
      raf = requestAnimationFrame(tick)
    }
    tick(); return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} className="particles" aria-hidden="true" />
}
const Heading = ({ eyebrow, title }) => (
  <Reveal className="heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><div className="bar" /></Reveal>
)

/* ======= SECTIONS ======= */
function Nav() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const [active, setActive] = useState('home')
  useEffect(() => {
    const on = () => setScrolled(scrollY > 20); on(); addEventListener('scroll', on, { passive: true })
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    NAV.forEach(n => { const el = document.getElementById(n.toLowerCase()); el && io.observe(el) })
    return () => { removeEventListener('scroll', on); io.disconnect() }
  }, [])
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <nav className="wrap nav-in" aria-label="Main">
        <a href="#home" className="logo">SINAN<span>.DEV</span></a>
        <ul className={open ? 'open' : ''}>
          {NAV.map(n => <li key={n}><a href={`#${n.toLowerCase()}`} className={active === n.toLowerCase() ? 'act' : ''} onClick={() => setOpen(false)}>{n}</a></li>)}
        </ul>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
    </header>
  )
}
const Socials = () => (
  <div className="socials">
    <a href={CONFIG.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
    <a href={CONFIG.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
    <a href={CONFIG.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
    <a href={`mailto:${CONFIG.email}`} aria-label="Email"><Mail /></a>
  </div>
)
function Hero() {
  return (
    <section id="home" className="hero wrap">
      <div className="hero-txt">
        <span className="pill"><Sparkles size={14} /> Open to opportunities · Class of 2026</span>
        <h1><span className="line">Hi, I'm</span> <span className="line grad">Mahammad Sinan</span></h1>
        <p className="role">Computer Science Engineer | Aspiring Full Stack Developer</p>
        <p className="typing"><Code2 size={18} /> <Typing words={TYPED} /></p>
        <div className="cta">
          <a className="btn primary" href="#projects">View Projects <ArrowRight size={18} /></a>
          <a className="btn ghost" href={CONFIG.resume} download>Download Resume <Download size={18} /></a>
          <a className="btn ghost" href="#contact">Contact Me <Mail size={18} /></a>
        </div>
        <Socials />
      </div>
      <div className="hero-vis">
        <div className="orb o1" /><div className="orb o2" />
        <div className="avatar">
          {CONFIG.photo ? <img src={CONFIG.photo} alt="" /> : (
            <svg viewBox="0 0 200 200" role="img" aria-label="Profile photo placeholder">
              <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7c5cff" /><stop offset="1" stopColor="#22d3ee" /></linearGradient></defs>
              <rect width="200" height="200" fill="#0b1030" /><circle cx="100" cy="78" r="34" fill="url(#g)" opacity=".85" /><path d="M32 200c4-52 34-72 68-72s64 20 68 72z" fill="url(#g)" opacity=".6" />
              <text x="100" y="188" textAnchor="middle" fontSize="13" fill="#9fb0ff" fontFamily="Inter">ADD YOUR PHOTO</text>
            </svg>
          )}
        </div>
        <div className="chip c1"><Code2 size={16} /> Python</div>
        <div className="chip c2"><Server size={16} /> Django</div>
        <div className="chip c3 "><Layout size={16} /> JavaScript</div>
      </div>
    </section>
  )
}




function CertificateGallery({ onClose }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    'All',
    ...new Set(CERTS.map(cert => cert.category))
  ]

  const filteredCertificates =
    activeCategory === 'All'
      ? CERTS.filter(cert => cert.category !== 'Education')
      : CERTS.filter(cert => cert.category === activeCategory)

  return (
    <div className="certificate-modal">

      {/* Animated background */}
      <div className="certificate-modal-bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>


      {/* Modal */}
      <div className="certificate-modal-content">

        {/* Header */}
        <div className="certificate-modal-header">

          <div>
            <span className="eyebrow">
              MY ACHIEVEMENTS
            </span>

            <h2>
              Certificates & Achievements
            </h2>

            <p>
              Explore my certifications, internships,
              projects and other accomplishments.
            </p>
          </div>

          <button
            className="certificate-close"
            onClick={onClose}
            aria-label="Close certificates"
          >
            <X size={24} />
          </button>

        </div>


        {/* Category filters */}
        <div className="certificate-filters">

          {categories.map(category => (

            <button
              key={category}
              className={
                activeCategory === category
                  ? 'active'
                  : ''
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>


        {/* Certificate cards */}
        <div className="certificate-gallery">

          {filteredCertificates.map((cert, index) => (

            <div
              className="gallery-certificate"
              key={cert.title}
              style={{
                animationDelay: `${index * 80}ms`
              }}
            >

              <div className="gallery-icon">
                {cert.icon}
              </div>


              <div className="gallery-info">

                <span className="gallery-category">
                  {cert.category}
                </span>

                <h3>
                  {cert.title}
                </h3>

                <p>
                  {cert.issuer}
                </p>

                <small>
                  {cert.year}
                </small>

              </div>


              <a
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                className="gallery-view"
              >
                <ExternalLink size={17} />
                View Certificate
              </a>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}














function Contact() {
  const [f, setF] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [sent, setSent] = useState(false)

  const on = k => e =>
    setF({
      ...f,
      [k]: e.target.value
    })

  const submit = e => {
    e.preventDefault()

    const body = `${f.message}\n\n— ${f.name} (${f.email})`

    window.location.href =
      `mailto:${CONFIG.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`

    setSent(true)
  }

  return (
    <section id="contact" className="wrap sec">

      <Heading
        eyebrow="06 — Contact"
        title="Let's Work Together"
      />

      <div className="contact-grid">

        <Reveal className="glass card cinfo">

          <h3>
            Mahammad Sinan
          </h3>

          <p>
            Open to Software Developer and Full Stack Developer roles.
            Send a message and I'll get back to you.
          </p>

          <a
            className="clink"
            href={`mailto:${CONFIG.email}`}
          >
            <Mail size={18} />
            {CONFIG.email}
          </a>

          <a
            className="clink"
            href={CONFIG.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            className="clink"
            href={CONFIG.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} />
            GitHub
          </a>

        </Reveal>


        <Reveal delay={100}>

          <form
            className="glass card form"
            onSubmit={submit}
          >

            {[
              ['name', 'Name', 'text'],
              ['email', 'Email', 'email'],
              ['subject', 'Subject', 'text']
            ].map(([k, l, t]) => (

              <label key={k}>
                {l}

                <input
                  required
                  type={t}
                  value={f[k]}
                  onChange={on(k)}
                  placeholder={l}
                />

              </label>

            ))}


            <label>
              Message

              <textarea
                required
                rows="5"
                value={f.message}
                onChange={on('message')}
                placeholder="Your message"
              />
            </label>


            <button
              className="btn primary"
              type="submit"
            >
              Send Message
              <Send size={18} />
            </button>


            {sent && (
              <p
                className="ok"
                role="status"
              >
                Opening your email app to send the message…
              </p>
            )}

          </form>

        </Reveal>

      </div>

    </section>
  )
}












const About = () => (
  <section id="about" className="wrap sec">
    <Heading eyebrow="01 — About" title="About Me" />
    <div className="about-grid">
      <Reveal className="glass about-txt">
        <p>I am a Computer Science and Engineering graduate with an interest in software development, web technologies, Python, AI and modern application development. I enjoy building practical solutions and continuously improving my technical skills.</p>
      </Reveal>
      <Reveal delay={120} className="facts">
        {[['Degree', 'BE, Computer Science & Engineering'], ['University', 'VTU'], ['Graduation', '2026'], ['Goal', 'Software / Full Stack Developer']].map(([k, v]) => (
          <div className="glass fact" key={k}><small>{k}</small><b>{v}</b></div>
        ))}
      </Reveal>
    </div>
  </section>
)
const Skills = () => (
  <section id="skills" className="wrap sec">
    <Heading eyebrow="02 — Skills" title="Technical Skills" />
    <div className="grid3">
      {SKILLS.map(({ t, i: Icon, items }, k) => (
        <Reveal key={t} delay={k * 80}>
          <div className="glass card skill">
            <div className="ico"><Icon /></div>
            <h3>{t}</h3>
            <div className="meter" aria-hidden="true"><i style={{ '--n': items.length }} /></div>
            <ul className="badges">{items.map(s => <li key={s}>{s}</li>)}</ul>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
)
const Projects = () => (
  <section id="projects" className="wrap sec">
    <Heading eyebrow="03 — Work" title="Featured Projects" />
    <div className="grid2">
      {PROJECTS.map((p, k) => (
        <Reveal key={p.n} delay={(k % 2) * 100}>
          <article className="glass card project">
            <div className={`thumb t${k % 4}`}><p.i size={54} strokeWidth={1.4} /><span className="grid-bg" /></div>
            <div className="pbody">
              <h3>{p.n}</h3><small>{p.s}</small>
              <ul className="pts">{p.pts.map(x => <li key={x}>{x}</li>)}</ul>
              <ul className="badges">{p.tags.map(t => <li key={t}>{t}</li>)}</ul>
              <div className="plinks">
                <a className="btn sm ghost" href={p.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
                <a className="btn sm primary" href={p.demo}><ExternalLink size={16} /> Demo</a>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
)
const Experience = () => (
  <section id="experience" className="wrap sec">
    <Heading eyebrow="04 — Journey" title="Experience" />
    <div className="timeline">
      <Reveal><div className="tl-item"><span className="dot"><Briefcase size={16} /></span>
        <div className="glass card">
          <h3>{EXPERIENCE.role}</h3><p className="meta">{EXPERIENCE.company} · {EXPERIENCE.dates}</p>
          <p>Worked on web development tasks using the technologies below.</p>
          <ul className="badges">{EXPERIENCE.tags.map(t => <li key={t}>{t}</li>)}</ul>
        </div></div></Reveal>
    </div>
  </section>
)


  const Education = () => {
  const [showCertificates, setShowCertificates] = useState(false)

  return (
    <>
      <section id="education" className="wrap sec">

        <Heading
          eyebrow="05 — Learning"
          title="Education & Certifications"
        />

        <div className="education-grid">

          {/* ================= EDUCATION ================= */}

          <Reveal>
            <div className="education-card">

              <div className="card-icon">
                <GraduationCap size={30} />
              </div>

              <span className="card-label">
                EDUCATION
              </span>

              <h3>
                BE – Computer Science and Engineering
              </h3>

              <p className="institution">
                Ghousia College of Engineering, Bengaluru
              </p>

              <p className="degree-info">
                Visvesvaraya Technological University (VTU) · 2026
              </p>

              <div className="education-details">

                <span>
                  🎓 Bachelor's Degree
                </span>

                <span>
                  💻 Computer Science
                </span>

                <span>
                  📅 2022 – 2026
                </span>

              </div>

              <a
                href="/certificates/degree-certificate.pdf"
                target="_blank"
                rel="noreferrer"
                className="certificate-btn"
              >
                <ExternalLink size={17} />
                View Degree Certificate
              </a>

            </div>
          </Reveal>


          {/* ================= CERTIFICATES ================= */}

          <Reveal delay={100}>

            <div className="certifications-card">

              <div className="card-top">

                <div className="card-icon">
                  <Award size={30} />
                </div>

                <div>

                  <span className="card-label">
                    ACHIEVEMENTS
                  </span>

                  <h3>
                    Certificates
                  </h3>

                </div>

              </div>


              <p className="cert-description">
                Explore my professional certifications,
                internships, programming achievements,
                projects, workshops and other accomplishments.
              </p>


              <div className="certificate-preview">

                <div className="preview-item">
                  <span>🐍</span>

                  <div>
                    <strong>Programming</strong>
                    <small>
                      Python, JavaScript & more
                    </small>
                  </div>
                </div>


                <div className="preview-item">
                  <span>💼</span>

                  <div>
                    <strong>Internships</strong>
                    <small>
                      Professional experience
                    </small>
                  </div>
                </div>


                <div className="preview-item">
                  <span>🤖</span>

                  <div>
                    <strong>Projects</strong>
                    <small>
                      Academic & technical work
                    </small>
                  </div>
                </div>


                <div className="preview-item">
                  <span>🏆</span>

                  <div>
                    <strong>Achievements</strong>
                    <small>
                      Additional accomplishments
                    </small>
                  </div>
                </div>

              </div>


              <button
                className="view-all-certificates"
                onClick={() => setShowCertificates(true)}
              >
                <Award size={19} />

                <span>
                  View All Certificates
                </span>

                <ArrowRight size={19} />

              </button>

            </div>

          </Reveal>

        </div>

      </section>


      {/* Certificate popup */}

      {showCertificates && (
        <CertificateGallery
          onClose={() => setShowCertificates(false)}
        />
      )}
    </>
  )
}










const Footer = () => (
  <footer className="footer">
    <div className="wrap foot-in">
      <div className="footer-brand">
        <a href="#home" className="logo">
          SINAN<span>.DEV</span>
        </a>
        <p>
          Building modern, meaningful & user-focused digital experiences.
        </p>
      </div>

      <div className="footer-center">
        <span>© {new Date().getFullYear()} Mahammad Sinan</span>
        <span className="footer-dot">•</span>
        <span>Built with React & Vite</span>
      </div>

      <div className="footer-social">
        <Socials />
      </div>
    </div>

    <div className="footer-bottom">
      <span>Designed & Developed by <strong>Mahammad Sinan</strong></span>

      <a href="#home" className="back-top">
        <span>Back to top</span>
        <span className="top-arrow">↑</span>
      </a>


    </div>
  </footer>
);

export default function App() {
  return (<><div className="bg" aria-hidden="true" /><Particles /><Nav /><main><Hero /><About /><Skills /><Projects /><Experience /><Education /><Contact /></main><Footer /></>)
}
