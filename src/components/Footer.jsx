import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        © {currentYear} Paid Events. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer