import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const experience = [
  {
    date: "SEP 2021 — APR 2022",
    company: "ASP OL Media Pvt. Ltd.",
    role: "Software Engineer · Pune",
    points: [
      "Built responsive HTML/CSS templates for digital marketing campaigns.",
      "Translated UI/UX designs into pixel-perfect web templates.",
      "Created reusable and scalable frontend templates."
    ]
  },
  {
    date: "JUN 2023 — APR 2025",
    company: "Liquiloans",
    role: "Technical Support Executive · Mumbai",
    points: [
      "Handled production support, monitoring and incident resolution within SLAs.",
      "Worked with Jira, Freshdesk and Datadog for incident tracking and troubleshooting.",
      "Wrote SQL queries and assisted with AWS scripting and automation."
    ]
  },
  {
    date: "APR 2025 — PRESENT",
    company: "Liquiloans",
    role: "Associate Software Developer · Mumbai",
    current: true,
    points: [
      "Develop scalable React.js applications using reusable components and REST APIs.",
      "Build responsive interfaces with JavaScript, React.js and React Native.",
      "Collaborate with backend and QA teams to troubleshoot defects and improve reliability."
    ]
  }
];

const skills = [
  "React.js","JavaScript","React Native","HTML5","CSS3","REST APIs",
  "SQL","MySQL","AWS","Git","GitHub","Figma","Jira","Datadog"
];

function Header(){
  return <header className="site-header">
    <a className="brand" href="#home">SACHIN<span>.</span>PUND</a>
    <nav>
      <a href="#build">What I build</a>
      <a href="#stack">Stack</a>
      <a href="#journey">Journey</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact</a>
    </nav>
    <div className="status"><i/> Available for opportunities</div>
  </header>
}

function BrowserMockup(){
  const ref = useRef(null);
  useEffect(()=>{
    const el = ref.current;
    const browser = el.querySelector(".browser");
    const move = e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX-r.left)/r.width-.5;
      const y = (e.clientY-r.top)/r.height-.5;
      browser.style.transform = `rotateY(${-x*18}deg) rotateX(${y*10}deg)`;
    };
    const leave = () => browser.style.transform = "rotateY(-9deg) rotateX(4deg)";
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return ()=>{el.removeEventListener("pointermove",move);el.removeEventListener("pointerleave",leave)};
  },[]);
  return <div className="window-wrap" ref={ref}>
    <div className="code"><b>const</b> UI = <b>React</b><br/>return (<br/>&nbsp;&nbsp;&lt;Interface /&gt;<br/>)</div>
    <div className="browser">
      <div className="bar"><i/><i/><i/><div className="url">localhost / sachin-ui</div></div>
      <div className="ui">
        <div className="ui-top"><span>SACHIN / UI SYSTEM</span><span>01—04</span></div>
        <div className="ui-title">DESIGN.<br/><span>CODE.</span><br/>SHIP.</div>
        <div className="ui-line"/>
        <div className="ui-grid">
          <div className="ui-card"><b>React.js</b><small>COMPONENTS</small></div>
          <div className="ui-card"><b>REST API</b><small>INTEGRATION</small></div>
        </div>
      </div>
    </div>
    <div className="floating">REACT.JS<br/><span>PRIMARY STACK</span></div>
  </div>
}

function App(){
  return <div className="page">
    <Header/>
    <main>
      <section className="hero" id="home">
        <div>
          <div className="eyebrow">Web UI Developer <span>/ React.js</span></div>
          <h1>I build<br/><em>interfaces.</em></h1>
          <p className="lead">I'm Sachin Pund, a Web UI Developer focused on React.js and JavaScript. I create responsive, reusable interfaces and work across the journey from UI implementation to production troubleshooting.</p>
          <div className="buttons">
            <a className="btn main" href="#work">See my work ↓</a>
            <a className="btn" href="mailto:sachinpund441@gmail.com">Contact me ↗</a>
          </div>
        </div>
        <BrowserMockup/>
      </section>

      <section id="build">
        <div className="head">
          <div><div className="num">01 / WHAT I BUILD</div><h2>UI is not<br/>just pixels.</h2></div>
          <p>I care about reusable components, responsive behaviour, API integration, maintainability and reliability.</p>
        </div>
        <div className="build">
          {[
            ["01","React Interfaces","Scalable web applications built with reusable React.js components and modern frontend practices."],
            ["02","Responsive UI","Interfaces that adapt cleanly across desktop and mobile experiences using HTML5 and CSS3."],
            ["03","API-driven UI","Frontend experiences connected to REST APIs, backed by practical production debugging experience."]
          ].map(([n,t,p])=><article className="build-card" key={n}><div className="n">{n}</div><h3>{t}</h3><p>{p}</p></article>)}
        </div>
      </section>

      <section className="dark-section" id="stack">
        <div className="head">
          <div><div className="num">02 / MY STACK</div><h2>Built around<br/>React.</h2></div>
          <p>The technologies and tools in my current development toolkit.</p>
        </div>
        <div className="techs">{skills.map(s=><span className="tech" key={s}>{s}</span>)}</div>
      </section>

      <section id="journey">
        <div className="head">
          <div><div className="num">03 / EXPERIENCE</div><h2>How I got<br/>here.</h2></div>
          <p>UI engineering, production support and software development — giving me both frontend and production perspective.</p>
        </div>
        <div className="timeline">
          {experience.map((job,i)=><article className="role" key={job.company+job.date}>
            <div className="when">{job.date.split(" — ")[0]}<br/>—<br/>{job.date.split(" — ")[1]}</div>
            <div className={"role-main "+(job.current?"current":"")}>
              <h3>{job.company}</h3><h4>{job.role}</h4>
              <ul>{job.points.map(p=><li key={p}>{p}</li>)}</ul>
            </div>
          </article>)}
        </div>
      </section>

      <section id="work">
        <div className="head">
          <div><div className="num">04 / SELECTED WORK</div><h2>Show the<br/>interface.</h2></div>
          <p>Replace these three placeholders with your real React/UI projects and screenshots. No project details are invented from your CV.</p>
        </div>
        <div className="work">
          {["Project One","Project Two","Project Three"].map((p,i)=><article className={"work-card w"+i} key={p}>
            <div className="tag">UI CASE STUDY / 0{i+1}</div>
            <div className="fake-ui"><span>{i===0?"COMPONENTS":i===1?"API DATA":"USER FLOW"}</span><span>REACT UI</span><span>RESPONSIVE</span></div>
            <h3>{p}</h3><p>Add a real project, screenshot, your contribution and technology used.</p>
          </article>)}
        </div>
      </section>

      <section id="contact">
        <div className="cta">
          <div><div className="num">05 / CONTACT</div><h2>Let's build<br/>something.</h2></div>
          <div><p>Looking for frontend and Web UI development opportunities where thoughtful interfaces and clean engineering matter.</p><a className="email" href="mailto:sachinpund441@gmail.com">sachinpund441@gmail.com ↗</a></div>
        </div>
      </section>
    </main>
    <footer><span>© 2026 Sachin Pund</span><span>WEB UI DEVELOPER / REACT.JS</span></footer>
  </div>
}

createRoot(document.getElementById("root")).render(<App/>);
