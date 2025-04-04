import './Speakers.css';
import sample from '../assets/5028.jpg'

function Speakers() {
  const speakers = [
    {
      name: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: sample
    },
    {
      name: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.k",
      image: sample
    }
  ];

  return (
    <section id="speakers" className="speakers">
      <div className="speakers-content">
        <h2>Our Speakers</h2>
        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker-card">
              <div className="speaker-image">
                {speaker.image ? (
                  <img src={speaker.image} alt={speaker.name} />
                ) : (
                  <div className="image-placeholder"></div>
                )}
              </div>
              <div className="speaker-info">
                <h3>{speaker.name}</h3>
                <p className="description">{speaker.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;