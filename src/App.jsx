import './App.css'

const menu = [
  { name: 'Adobong Manok', price: 60 },
  { name: 'Sinigang na Baboy', price: 70 },
  { name: 'Pritong Tilapia', price: 55 },
  { name: 'Ginisang Monggo', price: 40 },
  { name: 'Chopsuey', price: 50 },
  { name: 'Kanin', price: 10 },
]

function App() {
  return (
    <>
      <header className="hero">
        <h1>Aling Nena's Carinderia</h1>
        <p>Lutong-bahay na ulam, mura at masarap. Bukas araw-araw!</p>
        <a href="#menu" className="btn">Tingnan ang Menu</a>
      </header>

      <section id="menu" className="menu">
        <h2>Aming Menu</h2>
        <div className="menu-grid">
          {menu.map((item) => (
            <div key={item.name} className="menu-card">
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