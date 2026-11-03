
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <main className="home-page">
      <section className="hero iphone-hero">
        <div  className="hero-content">
          <h1>iPhone</h1>
          <h2>Meet the latest generation.</h2>

          <div className="hero-links">
            <Link to="/iphone" className="hero-link">
              Learn more <span>›</span>
            </Link>

            <Link to="/iphone" className="hero-link">
              Buy <span>›</span>
            </Link>
          </div>
        </div>

        <img
          src="../assets/iphone18.jpg"
          alt="iPhone 18  "
          className="hero-image"
        />
      </section>
    </main>
  );
}

export default Home;
