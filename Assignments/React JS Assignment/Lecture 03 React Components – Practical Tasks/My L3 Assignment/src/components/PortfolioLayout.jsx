import React from 'react';

function PortfolioLayout() {
  return (
    <div>
      <section id="hero" style={{ padding: '50px 20px', backgroundColor: '#333', color: '#fff' }}>
        <h1>Hi, I'm a Frontend Engineer</h1>
        <p>Building flawless user experiences with performance in mind.</p>
      </section>
      <section id="about" style={{ padding: '20px' }}>
        <h2>About Me</h2>
        <p>Passionate developer specializing in component-driven designs.</p>
      </section>
      <section id="skills" style={{ padding: '20px', backgroundColor: '#eee' }}>
        <h2>My Skills</h2>
        <p>React, JavaScript, HTML/CSS, Git, TailwindCSS</p>
      </section>
      <section id="contact" style={{ padding: '20px' }}>
        <h2>Get In Touch</h2>
        <p>Email me at: engineer@portfolio.dev</p>
      </section>
    </div>
  );
}
export default PortfolioLayout;