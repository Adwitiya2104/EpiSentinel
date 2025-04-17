import React from 'react'
import { Navbar } from '../objects/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='about-body black-body'>
        <h2 className='text-5xl'>About EpiSentinel</h2>
        <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
          An AI-powered epidemic early warning system that analyzes social data and search trends in real-time to detect and predict disease outbreaks for timely intervention.
        </p>
      </div>
    </div>
  )
}

export default About;