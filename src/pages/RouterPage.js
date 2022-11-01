import React from 'react'
import {BrowserRouter as Route} from 'react-router-dom'
import Home from './Home'
import About from './About'

export default function RouterPage() {
  return (
    <div>
        <Route path="/" component={<Home />} />
        <Route path="/about" component={<About />} />
    </div>
  )
}
