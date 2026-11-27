
import './App.css';

function App() {
  const dishes = [
    
  
{
  name: 'Chicken Biryani',
  price: '₹249',
  category: 'Bestseller',
  image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=80'
},

    {
      name: 'Classic Burger',
      price: '₹179',
      category: 'Popular',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600'
    },
    {
      name: 'Italian Pizza',
      price: '₹299',
      category: 'Special',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600'
    },
    {
      name: 'Pasta Alfredo',
      price: '₹229',
      category: 'Chef Special',
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600'
    }
  ];

  return (
    <div className="website">

      <nav className="navbar">
        <a href="#home" className="logo">
          FOOD<span>PARADISE</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-button" href="#contact">
          Book a Table
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="subtitle">WELCOME TO FOOD PARADISE</p>

          <h1>
            Experience The
            <span> Taste Of Heaven</span>
          </h1>

          <p className="hero-description">
            Discover delicious food, amazing flavours and
            unforgettable dining experiences.
          </p>

          <a href="#menu" className="primary-button">
            Explore Our Menu →
          </a>
        </div>
      </section>

      <section className="about section" id="about">
        <p className="subtitle">OUR STORY</p>
        <h2>Welcome To Food Paradise</h2>
        <p>
          We serve freshly prepared food with passion,
          quality ingredients and unforgettable flavours.
          Come and enjoy a wonderful dining experience
          with your family and friends.
        </p>
      </section>

      <section className="menu-section section" id="menu">
        <p className="subtitle">OUR SPECIALITIES</p>
        <h2>Explore Our Delicious Menu</h2>

        <div className="food-grid">
          {dishes.map((dish, index) => (
            <div className="food-card" key={index}>
              <img src={dish.image} alt={dish.name} />

              <div className="food-info">
                <span className="food-category">
                  {dish.category}
                </span>

                <h3>{dish.name}</h3>

                <div className="food-bottom">
                  <strong>{dish.price}</strong>
                  <a href="#contact">Order Now →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="booking section" id="contact">
        <p className="subtitle">RESERVE YOUR TABLE</p>
        <h2>Enjoy Great Food With Us</h2>
        <p>Contact us to reserve your table today.</p>

        <a
          href="https://wa.me/919144031033?text=Hello%20Food%20Paradise!%20I%20want%20to%20book%20a%20table."
          target="_blank"
          rel="noreferrer"
          className="primary-button"
        >
          Book Through WhatsApp
        </a>
      </section>



      <section id="contact" className="contact-section">
        <div className="contact-content">
          <span className="section-label">GET IN TOUCH</span>
          <h2>Contact Us</h2>
          <p>We would love to hear from you!</p>

          <div className="contact-details">
            <p><strong>Restaurant:</strong> Food Paradise</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Email:</strong> foodparadise@example.com</p>
            <p><strong>Address:</strong> Kolkata, West Bengal, India</p>
            <p><strong>Opening Hours:</strong> 11 AM – 11 PM</p>
          </div>
        </div>
      </section>

      
<footer className="footer">
  <h2>FOOD PARADISE</h2>
  <p>Delicious Food. Great Memories.</p>

  <div className="footer-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#menu">Menu</a>
    <a href="#contact">Contact</a>
  </div>

  <p className="copyright">
    © 2026 Food Paradise. All Rights Reserved.
  </p>
</footer>


    </div>
  );
}

export default App;
