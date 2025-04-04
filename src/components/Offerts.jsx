import './Offerts.css';

function Offerts(){
  const guides = [
    {
      title: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      features: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum"
      ],
      price: "299.99€",
      buttonText: "Choose"
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      features: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum"
      ],
      price: "Contact Us",
      buttonText: "Choose",
      recommended: true
    },
  ];

  const buttonClick = (event) => {
    event.preventDefault();
    console.log("e");
  }

  return (
    <section id="offerts" className="offerts">
      <div className="offerts-content">
        <h2>Choose Your Guide</h2>
        <div className="pricing-table">
          {guides.map((guide, index) => (
            <div 
              key={index} 
              className={`pricing-card ${guide.recommended ? 'recommended' : ''}`}
            >
              {guide.recommended && (
                <div className="recommended-badge">Recommended</div>
              )}
              <h3>{guide.title}</h3>
              <p className="description">{guide.description}</p>
              <ul className="features">
                {guide.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="price">{guide.price}</div>
              <button className="choose-button" onClick={buttonClick}>{guide.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerts