import React from 'react'
import { Link } from 'react-router-dom'

export default function
() {
  return (
        <React.Fragment>
    <nav>
        <div class="container">
            <div class="logo">
                <i class="fas fa-globe fa-3x"></i>
                <h1>Daily<span>South African</span></h1>
            </div>

            <div class="social">
                <a href="https://web.facebook.com/" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
                <a href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
                <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube fa-2x"></i></a>
            </div>

            <div class="options">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    </nav>

    <div class="container">
        <section class="about">
            <article>
                <h2>About us</h2>
                <p>
                    The Daily South African is a publication dedicated to bringing our customers the latest and most up to date news.
                </p>
                <p>
                    Recently established and based in Johannesburg, we provide unique coverage through our independent journalists and writers.
                    We pride ourselves in getting the latest and best news stories. 
                </p>
            </article>

            <article>
                <h3>Become a memember</h3>
                <p>
                    Join us
                </p>
                <a href="#">Join Now</a>
            </article>
        </section>
    </div>

    <footer>
        <div class="container">
            <div class="footer">
                <article>
                    <div class="logo">
                        <i class="fas fa-globe fa-2x"></i>
                        <h2>News<span>Grid</span></h2>
                    </div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                        deserunt assumenda enim non? Ratione ipsum voluptates fuga eos
                        earum vitae.
                    </p>
                </article>

                <article>
                    <h4>EMAIL NEWSLETTER</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <input type="email" placeholder="Enter Email..." />
                    <a href="#"> Subscribe</a>
                </article>

                <article>
                    <h4>SITE LINKS</h4>
                    <p>Help & Support</p>
                    <p>Privacy Policy</p>
                    <p>About Us</p>
                    <p>Contact</p>
                </article>

                <article>
                    <h4>JOIN OUR CLUB</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati, maiores!
                    </p>
                    <a href="#">Join Now</a>
                </article>
            </div>
            <div class="copyright">
                <p>Copyright &copy; 2022, All Rights Reserved</p>
            </div>
        </div>
    </footer>

    <script src="../js/script.js"></script>
        </React.Fragment>
  )
}
