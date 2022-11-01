import React from 'react'

export default function Nav() {
  return (
    <div>
        <React.Fragment>
        <div class="container">
            <div class="logo">
                <i class="fas fa-newspaper fa-3x"></i>
                <h1>Daily<span>South African</span></h1>
            </div>
            <div class="social">
                <a href="https://web.facebook.com/" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
                <a href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
                <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube fa-2x"></i></a>
            </div> 

            <div class="options">
                <a href="./index.html" class="current">Home</a>
                <a href="./about.html">About</a>
            </div>
        </div>
        </React.Fragment>
    </div>
  )
}
