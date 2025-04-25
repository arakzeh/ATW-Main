import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => (
  <div className="container">
    <header>
      <img
        src="https://via.placeholder.com/150x80?text=Logo"
        alt="Company Logo"
        className="logo"
      />
      <h1>Across The World Company Ltd.</h1>
      <p>Established in Dhahran, Saudi Arabia</p>
    </header>

    <section className="section">
      <h2>Our Vision</h2>
      <p>
        To excel in delivering high-quality services across sports,
        entertainment, events, equipment rental, and industrial cleaning in
        Saudi Arabia and abroad.
      </p>
    </section>

    <section className="services">
      <div>
        <h3>1. Sports Academies Support</h3>
        <p>
          Campus development, facilities, training, and scouting in Saudi
          Arabia, Spain, and Portugal.
        </p>
      </div>
      <div>
        <h3>2. Entertainment Services</h3>
        <p>
          Enriching the Eastern Province with cultural and family-friendly
          events and attractions.
        </p>
      </div>
      <div>
        <h3>3. Events & Functions</h3>
        <p>
          Supporting individuals and companies in organizing impactful events.
        </p>
      </div>
      <div>
        <h3>4. Equipment Rental</h3>
        <p>
          Renting machinery and equipment to meet industrial and commercial
          needs.
        </p>
      </div>
      <div>
        <h3>5. Industrial & Building Cleaning</h3>
        <p>
          Comprehensive cleaning for buildings, factories, and large facilities.
        </p>
      </div>
    </section>

    <section className="contact">
      <h2>Contact Us</h2>
      <p>Email: gm@atw-saudi.com</p>
      <p>Phone: +966 581389716</p>
    </section>

    <footer>
      <p>&copy; {new Date().getFullYear()} Across The World Company Ltd.</p>
      <div className="socials">
        <a href="#">🌐 atw-saudi.com </a>
        <a href="#">📘 Facebook</a>
        <a href="#">📸 Instagram</a>
      </div>
    </footer>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
