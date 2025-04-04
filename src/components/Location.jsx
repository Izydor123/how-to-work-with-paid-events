import './Location.css'
import place from '../assets/1160.jpg'

function Location() {

  return (
    <section className="location" id="location">
      <h1>Location of the Event</h1>
      <p>Here</p>
      <div className="location-content">
        <img src={place} alt="Place of meeting" />
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97475.70086317716!2d-8.498675417188505!3d40.22873073325376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22f9144aacd16d%3A0x634564477b42a6b9!2sCoimbra!5e0!3m2!1spl!2spt!4v1743601387940!5m2!1spl!2spt" 
         width="600" 
         height="500" 
         allowFullScreen="" 
         loading="lazy" 
         referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}

export default Location