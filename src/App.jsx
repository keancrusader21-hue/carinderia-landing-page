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
        <p>📍 Purok 1, Padada, Davao del Sur</p>
        <p>🕖 Bukas: 6:00 AM - 8:00 PM, Lunes hanggang Linggo</p>
        <p>📞 0912 345 6789</p>
        <a href="tel:+639123456789" className="btn">Tumawag Ngayon</a>
      </section>

      <footer className="footer">
        <p>© 2026 Aling Nena's Carinderia. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App