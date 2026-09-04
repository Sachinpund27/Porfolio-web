import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  "React.js", "JavaScript", "React Native", "HTML5", "CSS3",
  "REST APIs", "SQL", "MySQL", "AWS", "Git", "GitHub",
  "Figma", "Jira", "Datadog"
];

const experiences = [
  {
    date: ["SEP 2021", "APR 2022"],
    company: "ASP OL Media Pvt. Ltd.",
    role: "Software Engineer · Pune",
    bullets: [
      "Built responsive HTML/CSS templates for digital marketing campaigns.",
      "Translated UI/UX designs into pixel-perfect web templates.",
      "Created reusable and scalable frontend templates."
    ]
  },
  {
    date: ["JUN 2023", "APR 2025"],
    company: "Liquiloans",
    role: "Technical Support Executive · Mumbai",
    bullets: [
      "Handled production support, monitoring and incident resolution within SLAs.",
      "Worked with Jira, Freshdesk and Datadog for incident tracking and troubleshooting.",
      "Wrote SQL queries and assisted with AWS scripting and automation."
    ]
  },
  {
    date: ["APR 2025", "PRESENT"],
    company: "Liquiloans",
    role: "Associate Software Developer · Mumbai",
    current: true,
    bullets: [
      "Develop scalable React.js applications using reusable components and REST APIs.",
      "Build responsive interfaces with JavaScript, React.js and React Native.",
      "Collaborate with backend and QA teams to troubleshoot defects and improve reliability."
    ]
  }
];

function Header() {
  return (
    <header>
      <a className="brand" href="#home" aria-label="Sachin Pund home">
        SACHIN<span>.</span>PUND
      </a>
      <nav>
        <a href="#build">What I build</a>
        <a href="#stack">Stack</a>
        <a href="#journey">Journey</a>
        <a href="#dna">About me</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="status">
        <i className="dot" />
        Available for opportunities
      </div>
    </header>
  );
}

function Hero() {
  const windowRef = useRef(null);
  const browserRef = useRef(null);

  useEffect(() => {
    const target = windowRef.current;
    const browser = browserRef.current;
    if (!target || !browser) return;

    const move = (event) => {
      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * -18;
      const rotateX = ((y / rect.height) - 0.5) * 10;
      browser.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };

    const leave = () => {
      browser.style.transform = "rotateY(-9deg) rotateX(4deg)";
    };

    target.addEventListener("pointermove", move);
    target.addEventListener("pointerleave", leave);

    return () => {
      target.removeEventListener("pointermove", move);
      target.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div>
        <div className="eyebrow">
          Web UI Developer <span>/ React.js</span>
        </div>
        <h1>
          I build<br />
          <em>interfaces.</em>
        </h1>
        <p className="lead">
          I'm Sachin Pund, a Web UI Developer focused on React.js and JavaScript.
          I create responsive, reusable interfaces and work across the full
          journey from UI implementation to production troubleshooting.
        </p>
        <div className="buttons">
          <a className="btn main" href="#dna">Explore my profile ↓</a>
          <a className="btn" href="mailto:sachinpund441@gmail.com">Contact me ↗</a>
        </div>
      </div>

      <div className="window-wrap" ref={windowRef}>
        <div className="code">
          <b>const</b> UI = <b>React</b><br />
          return (<br />
          &nbsp;&nbsp;&lt;Interface /&gt;<br />
          )
        </div>

        <div className="browser" ref={browserRef}>
          <div className="bar">
            <i /><i /><i />
            <div className="url">localhost / sachin-ui</div>
          </div>
          <div className="ui">
            <div className="ui-top">
              <span>SACHIN / UI SYSTEM</span>
              <span>01—04</span>
            </div>
            <div className="ui-title">
              DESIGN.<br />
              <span>CODE.</span><br />
              SHIP.
            </div>
            <div className="ui-line" />
            <div className="ui-grid">
              <div className="ui-card">
                <b>React.js</b>
                <small>COMPONENTS</small>
              </div>
              <div className="ui-card">
                <b>REST API</b>
                <small>INTEGRATION</small>
              </div>
            </div>
          </div>
        </div>

        <div className="floating">
          REACT.JS<br />
          <span>PRIMARY STACK</span>
        </div>
      </div>
    </section>
  );
}

function Build() {
  const cards = [
    ["01", "React Interfaces", "Scalable web applications built with reusable React.js components and modern frontend practices."],
    ["02", "Responsive UI", "Interfaces that adapt cleanly across desktop and mobile experiences using HTML5 and CSS3."],
    ["03", "API-driven UI", "Frontend experiences connected to REST APIs, with practical production debugging and troubleshooting experience."]
  ];

  return (
    <section id="build">
      <div className="head">
        <div>
          <div className="num">01 / WHAT I BUILD</div>
          <h2>UI is not<br />just pixels.</h2>
        </div>
        <p>
          I care about the details behind a good interface — reusable components,
          responsive behaviour, API integration, maintainability and reliability.
        </p>
      </div>
      <div className="build">
        {cards.map(([number, title, text]) => (
          <article className="build-card" key={title}>
            <div className="n">{number}</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="stack-section">
      <div className="stack">
        <div className="stack-inner">
          <div className="head">
            <div>
              <div className="num">02 / MY STACK</div>
              <h2>Built around<br />React.</h2>
            </div>
            <p>The technologies and tools in my current development toolkit.</p>
          </div>
          <div className="techs">
            {skills.map((skill) => <span className="tech" key={skill}>{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey">
      <div className="head">
        <div>
          <div className="num">03 / EXPERIENCE</div>
          <h2>How I got<br />here.</h2>
        </div>
        <p>
          My career moved through UI engineering, production support and back
          into software development — giving me both frontend and production perspective.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((experience) => (
          <article className="role" key={`${experience.company}-${experience.role}`}>
            <div className="when">
              {experience.date[0]}<br />—<br />{experience.date[1]}
            </div>
            <div className={`role-main ${experience.current ? "current" : ""}`}>
              <h3>{experience.company}</h3>
              <h4>{experience.role}</h4>
              <ul>
                {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DeveloperDNA() {
  const nodes = [
    ["react", "React.js"], ["js", "JavaScript"], ["ui", "UI"],
    ["api", "REST API"], ["html", "HTML5"], ["css", "CSS3"],
    ["mysql", "MySQL"], ["aws", "AWS"]
  ];

  return (
    <section id="dna" className="dna-section">
      <div className="head">
        <div>
          <div className="num">04 / DEVELOPER DNA</div>
          <h2>How I<br />think.</h2>
        </div>
        <p>
          A frontend mindset shaped by building interfaces, debugging production
          issues and continuously improving the way software is delivered.
        </p>
      </div>

      <div className="dna-layout">
        <div className="dna-orbit" aria-label="Interactive developer technology constellation">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="dna-core">SP</div>
          {nodes.map(([className, label]) => (
            <div className={`dna-node ${className}`} key={label}>{label}</div>
          ))}
        </div>

        <div className="principles">
          <article>
            <span>01</span>
            <h3>BUILD</h3>
            <p>Reusable components, responsive interfaces and practical API-driven experiences.</p>
          </article>
          <article>
            <span>02</span>
            <h3>DEBUG</h3>
            <p>Production troubleshooting experience with monitoring, SQL and incident workflows.</p>
          </article>
          <article>
            <span>03</span>
            <h3>IMPROVE</h3>
            <p>Focus on maintainability, development efficiency, performance and reliability.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="cta">
        <div>
          <div className="num contact-num">05 / CONTACT</div>
          <h2>Let's build<br />something.</h2>
        </div>
        <div>
          <p>
            Looking for frontend and Web UI development opportunities where
            thoughtful interfaces and clean engineering matter.
          </p>
          <a className="email" href="mailto:sachinpund441@gmail.com">
            sachinpund441@gmail.com ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Build />
        <Stack />
        <Journey />
        <DeveloperDNA />
        <Contact />
      </main>
      <footer>
        <span>© 2026 Sachin Pund</span>
        <span>WEB UI DEVELOPER / REACT.JS</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);