import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Health Insurance
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="main">
        <section className="hero bg-primary text-white text-center">
          <div className="container">
            <h1 className="display-4">Health Insurance Made Easy</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquet aliquam arcu a semper.
            </p>
            <button className="btn btn-light btn-lg">Get Started</button>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="feature-item text-center">
                  <i className="fas fa-shield-alt"></i>
                  <h3>Comprehensive Coverage</h3>
                  <p>
                    We provide a wide range of health insurance plans to meet
                    your needs.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-item text-center">
                  <i className="fas fa-users"></i>
                  <h3>Expert Team</h3>
                  <p>
                    Our team of insurance experts is always ready to assist
                    you and answer your questions.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-item text-center">
                  <i className="fas fa-thumbs-up"></i>
                  <h3>Customer Satisfaction</h3>
                  <p>
                    We prioritize the satisfaction of our customers and aim to
                    provide the best service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer bg-dark text-white text-center">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Health Insurance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
