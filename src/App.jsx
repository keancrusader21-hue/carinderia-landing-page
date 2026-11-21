import { useState } from 'react'
import './App.css'
import adobo from './assets/menu/adobo.jpg'
import sinigang from './assets/menu/sinigang.jpg'
import tilapia from './assets/menu/tilapia.jpg'
import monggo from './assets/menu/monggo.jpg'
import chopsuey from './assets/menu/chopsuey.jpg'
import kanin from './assets/menu/kanin.jpg'

const menu = [
  { name: 'Adobong Manok', price: 60, category: 'Ulam', image: adobo },
  { name: 'Pritong Tilapia', price: 55, category: 'Ulam', image: tilapia },
  { name: 'Sinigang na Baboy', price: 70, category: 'Sabaw', image: sinigang },
  { name: 'Ginisang Monggo', price: 40, category: 'Gulay', image: monggo },
  { name: 'Chopsuey', price: 50, category: 'Gulay', image: chopsuey },
  { name: 'Kanin', price: 10, category: 'Extra', image: kanin },
]

const categories = ['Lahat', 'Ulam', 'Sabaw', 'Gulay', 'Extra']

function App() {
  const [active, setActive] = useState('Lahat')
  const filtered = active === 'Lahat' ? menu : menu.filter((m) => m.category === active)

  return (
    <>
        
      <nav className="navbar">
        <a href="#home" className="logo">Aling Nena's</a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header id="home" className="hero">
        <h1>Aling Nena's Carinderia</h1>
        <p>Lutong-bahay na ulam, mura at masarap. Bukas araw-araw!</p>
        <a href="#menu" className="btn">Tingnan ang Menu</a>
      </header>

          <section id="menu" className="menu">
        <h2>Aming Menu</h2>
        <div className="filters">
          {categories.map((c) => (
            <button
              key={c}
              className={c === active ? 'filter active' : 'filter'}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="menu-grid">
          {filtered.map((item) => (
            <div key={item.name} className="menu-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₱{item.price}</p>
            </div>
          ))}
        </div>
      </section>


                <section id="contact" className="contact">
        <h2>Bisitahin Kami</h2>
        <p>📍 Purok 2-A, Salvacion, Trento, Agusan Del Sur</p>
        <p>🕖 Bukas: 6:00 AM - 8:00 PM, Lunes hanggang Linggo</p>
        <p>📞 0912 345 6789</p>

        <div className="contact-buttons">
          <a href="tel:+639123456789" className="btn">Tumawag Ngayon</a>
          <a
            href="https://www.facebook.com/kean.ide.73"
            target="_blank"
            rel="noreferrer"
            className="btn btn-messenger"
          >
            Message sa Messenger
          </a>
        </div>

            <iframe
          className="map"
          title="Location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d545.5179495365529!2d126.12286124521518!3d8.00953024467643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fc35790d320b4b%3A0x6a1801a27f1250df!2sSalvacion%2C%20Boston%2C%20Davao%20Oriental!5e0!3m2!1sen!2sph!4v1795257618147!5m2!1sen!2sph"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </section>

      <footer className="footer">
        <p>© 2026 Aling Nena's Carinderia. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App