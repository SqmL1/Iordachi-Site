import { useEffect, useState } from "react";
import { Mail, UserRound, SquareTerminal,  ExternalLink } from "lucide-react";

type DocumentId = "bio" | "resume" | "projects";

const documents: { id: DocumentId; label: string; code: string; description: string }[] = [

  {

    id: "bio",

    label: "Personnel File",

    code: "DOC.01",

    description: "Profile, education, leadership, and technical skills.",

  },

  {

    id: "resume",

    label: "Work History",

    code: "DOC.02",

    description: "DevSecOps at Ameriprise Financial and software engineering internships at Ameriprise, Solventum, and Vervint.",

  },

  {

    id: "projects",

    label: "Mission Archive",

    code: "DOC.03",

    description: "Stock sentiment analysis, a distributed scraping platform, and a first-place hackathon application.",

  },

];

function Arrow({ down = false }: { down?: boolean }) {

  return (

    <svg className={down ? "arrow down" : "arrow"} viewBox="0 0 24 24" aria-hidden="true">

      <path d="M5 12h14M14 6l6 6-6 6" />

    </svg>

  );

}

const experience = [
  {
    date: "AUG — PRESENT",
    role: "DevSecOps Engineer (Part-Time)",
    company: "Ameriprise Financial",
    summary:
      "Built Jira access compliance automation that reconciles permissions against Active Directory and ServiceNow. Automated detection, notifications, scheduled removals, reporting, and audit logging with Jenkins and Ansible; supported Kubernetes, Helm, and AWS Lambda workflows.",
  },
  {
    date: "JUL — AUG 2026",
    role: "Software Engineer Intern",
    company: "Ameriprise Financial",
    summary:
      "Migrated a legacy Java/Selenium framework to Playwright, Gherkin, and Cucumber. Built reusable components and behavior-driven integration tests, then automated test-data provisioning and suite selection across 5 enterprise applications, increasing automated test coverage by 85%.",
  },
  {
    date: "MAY — SEP 2025",
    role: "Software Engineer Intern",
    company: "Solventum (formerly 3M)",
    summary:
      "Developed a full-stack scientific analysis application with Dash, Pandas, NumPy, and Plotly. Built visualization and mathematical modeling tools, centralized research data, and integrated FastAPI services with AWS SDKs, EC2, S3, and DynamoDB.",
  },
  {
    date: "MAY — AUG 2024",
    role: "Software Engineering / Automation Intern",
    company: "Vervint",
    summary:
      "Deployed PowerShell tools for inventory, asset lifecycle workflows, and ticket tracking, reducing manual operations by 80%. Cut deployment time by 80%, improved team productivity by 40%, and reduced incident time-to-fix by 60% through debugging and root-cause analysis.",
  },
];

const skills = [
  { label: "LANGUAGES", value: "Java · Python · C++ · TypeScript · SQL · PowerShell · BASH" },
  { label: "FRAMEWORKS & LIBRARIES", value: "React · FastAPI · Flask · Dash · Pandas · NumPy · SciPy · Playwright" },
  { label: "CLOUD & DEVOPS", value: "AWS · Lambda · EC2 · S3 · Kubernetes · Helm · Docker · Jenkins · Ansible · CI/CD" },
  { label: "TECHNOLOGIES & TOOLS", value: "Linux · Git · GitHub · Figma · Jira · PostgreSQL · DynamoDB · Redis" },
];

const projects = [
  {
    title: "GRISK — Stock Analysis & Paper Trading Bot",
    stack: "Python · PRAW · NLTK · Pandas · Dash",
    result: "SENTIMENT + TRADING",
    summary:
      "Automated a pipeline to ingest stock mentions and trends from WallStreetBets in real time. Built an NLTK sentiment engine with a custom WSB lexicon and a responsive Dash dashboard for live market data, interactive charts, and simulated portfolio performance.",
  },
  {
    title: "Self-Hosted ML Web Scraping Platform",
    stack: "Python · FastAPI · Celery · Redis · PostgreSQL · Docker · Raspberry Pi",
    result: "10K+ DOCS / DAY",
    summary:
      "Containerized a Raspberry Pi backend with Celery, Redis, and APScheduler for distributed scraping jobs. Built secure, rate-limited REST services and PostgreSQL/MinIO storage, with Prometheus/Grafana monitoring, chaos testing, retries, and backoff. Processed 10k+ documents/day with p95 latency below 120ms.",
  },
  {
    title: "Solventum Hackathon — Winning Web App",
    stack: "React · TypeScript · Plotly.js · ag-Grid · FastAPI · S3 · DynamoDB",
    result: "1ST PLACE · 2025",
    summary:
      "Built a full-stack application during a 72-hour hackathon in June 2025. Developed the React/TypeScript frontend, integrated interactive charts and enterprise data tables, and architected a FastAPI backend with S3 file storage and DynamoDB.",
  },
];

function BioContent() {
  return (
    <div className="document-detail">
      <div className="paper-heading">
        <span>PERSONNEL FILE / 01</span>
        <span>MINNEAPOLIS</span>
      </div>
      <h2>Samuil<br />Iordachi</h2>
      <p className="role">SOFTWARE / DEVSECOPS ENGINEER</p>

<div className="contact-links">
  <a href="mailto:Samuiliordachi@gmail.com">
    <Mail size={17} />
    <span>Email</span>
    <ExternalLink size={12} className="external-icon" />
  </a>

  <a
    href="https://www.linkedin.com/in/YOUR-PROFILE/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <UserRound size={17} />
    <span>LinkedIn</span>
    <ExternalLink size={12} className="external-icon" />
  </a>

  <a
    href="https://github.com/YOUR-USERNAME"
    target="_blank"
    rel="noopener noreferrer"
  >
    <SquareTerminal size={17} />
    <span>GitHub</span>
    <ExternalLink size={12} className="external-icon" />
  </a>
</div>

      <div className="paper-rule" />
      <p className="lead">
        I build backend services, cloud infrastructure, and automation that make complex workflows easier to run.
      </p>
      <div className="bio-grid">
        <div><small>BASE</small><b>Minneapolis, Minnesota</b></div>
        <div><small>EXPERIENCE</small><b>3 INTERNSHIPS + DEVSECOPS</b></div>
        <div><small>GRADUATION</small><b>MAY 2027</b></div>
        <div><small>FOCUS</small><b>BACKEND / CLOUD / AUTOMATION</b></div>
      </div>
      <p className="paper-copy">
        My experience spans enterprise compliance and testing at Ameriprise Financial,
        scientific software at Solventum, and engineering automation at Vervint.
        I enjoy connecting software and infrastructure through APIs, delivery pipelines,
        distributed job processing, and observability.
      </p>
      <div className="paper-rule" />
      <div className="paper-heading"><span>EDUCATION</span><span>3.60 GPA</span></div>
      <p className="paper-copy">
        <strong>University of Minnesota, Twin Cities</strong><br />
        B.S. Computer Science · Expected May 2027<br />
        U.S. Citizen
      </p>
      <div className="paper-heading"><span>LEADERSHIP</span><span>JAN 2025 — PRESENT</span></div>
      <p className="paper-copy">
        <strong>Vice President · Google Developer Student Club, Anoka-Ramsey</strong><br />
        Led a team of 4 to build a course scheduling and graduation planning app
        for Minnesota State students, reducing manual planning time by 70%.
      </p>
      <div className="paper-rule" />
      <div className="paper-heading"><span>TECHNICAL SKILLS</span><span>TOOLKIT</span></div>
      {skills.map((group) => (
        <p className="paper-copy" key={group.label}>
          <strong>{group.label}</strong><br />{group.value}
        </p>
      ))}
    </div>
  );
}

function ResumeContent() {
  return (
    <div className="document-detail resume-detail">
      <div className="paper-heading">
        <span>WORK HISTORY / 02</span>
        <span>2024—NOW</span>
      </div>
      <h2>Experience<br />Log</h2>
      <div className="history">
        {experience.map((entry) => (
          <div key={`${entry.company}-${entry.role}`}>
            <time>{entry.date}</time>
            <section>
              <b>{entry.role}</b>
              <span>{entry.company}</span>
              <p>{entry.summary}</p>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsContent() {
  return (
    <div className="document-detail projects-detail">
      <div className="paper-heading">
        <span>MISSION ARCHIVE / 03</span>
        <span>SELECTED</span>
      </div>
      <h2>Selected<br />Projects</h2>
      <div className="mission-list">
        {projects.map((project, index) => (
          <div key={project.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <section>
              <b>{project.title}</b>
              <p>{project.stack}</p>
              <p className="paper-copy">{project.summary}</p>
            </section>
            <em>{project.result}</em>
          </div>
        ))}
      </div>
      <p className="paper-copy">Want to discuss a project? Get in touch by email.</p>
    </div>
  );
}

function PaperDocument({

  id,

  index,

  selected,

  onSelect,

}: {

  id: DocumentId;

  index: number;

  selected: DocumentId | null;

  onSelect: (id: DocumentId) => void;

}) {

  const item = documents[index];

  const isSelected = selected === id;

  return (

    <button

      className={`paper paper-${index + 1}${isSelected ? " selected" : ""}${selected && !isSelected ? " dismissed" : ""}`}

      onClick={() => onSelect(id)}

      aria-label={`${isSelected ? "Close" : "Open"} ${item.label}`}

      aria-expanded={isSelected}

    >

      <div className="paper-holes"><i /><i /><i /></div>

      {!isSelected ? (

        <div className="document-preview">

          <div className="doc-code">{item.code}</div>

          <div className="redacted-line" />

          <h2>{item.label}</h2>

          <p>{id === "bio" ? "S. Iordachi" : id === "resume" ? "2024—NOW" : "03 PROJECTS"}</p>

          <div className="preview-lines"><i /><i /><i /><i /></div>

          <span>OPEN FILE <Arrow /></span>

        </div>

      ) : id === "bio" ? (

        <BioContent />

      ) : id === "resume" ? (

        <ResumeContent />

      ) : (

        <ProjectsContent />

      )}

      <div className="paper-corner" />

    </button>

  );

}

export default function App() {

  const [selected, setSelected] = useState<DocumentId | null>(null);

  const activeDocument = documents.find((item) => item.id === selected);

  useEffect(() => {

    const closeOnEscape = (event: KeyboardEvent) => {

      if (event.key === "Escape") setSelected(null);

    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);

  }, []);

  const toggleDocument = (id: DocumentId) => {

    setSelected((current) => current === id ? null : id);

  };

  return (

    <main className="game-screen">
      <style>{`
        .paper.selected > .document-detail {
          max-height: max(180px, calc(100svh - 280px));
          overflow-y: auto;
          overscroll-behavior: contain;
          scrollbar-width: thin;
          text-wrap: pretty;
        }
        .paper.selected .history > div,
        .paper.selected .mission-list > div {
          min-width: 0;
        }
        .paper.selected .history section,
        .paper.selected .mission-list section {
          min-width: 0;
          overflow-wrap: anywhere;
        }
        .paper.selected .mission-list > div {
          flex-wrap: wrap;
          grid-template-columns: auto minmax(0, 1fr);
        }
        .paper.selected .mission-list em {
          grid-column: 2;
          white-space: normal;
        }
        .paper.selected .mission-list .paper-copy {
          margin-top: 0.6rem;
          line-height: 1.5;
        }
      `}</style>

      <div className="stars stars-left" />

      <div className="stars stars-right" />

      <div className="spark spark-one" />

      <div className="spark spark-two" />

      <header className="hud-header">

        <a className="identity" href="#" onClick={() => setSelected(null)}>

          <span>SI</span>

          <div><b>Samuil Iordachi</b><small>SOFTWARE / DEVSECOPS ENGINEER</small></div>

        </a>

        <nav aria-label="Portfolio sections">

          {documents.map((item) => (

            <button

              key={item.id}

              className={selected === item.id ? "active" : ""}

              onClick={() => setSelected(item.id)}

            >

              {item.id}

            </button>

          ))}

        </nav>

        <a className="download-top" href={`${import.meta.env.BASE_URL}resume.pdf`} download="Samuil_Iordachi_Resume.pdf">

          DOWNLOAD CV <Arrow down />

        </a>

      </header>

      <div className="progress-track"><i className={selected ? "engaged" : ""} /><span /></div>

      <section className="interface">

        <aside className="file-nav">

          <p>FILE SELECT</p>

          <div className="list-control up"><span /></div>

          {documents.map((item) => (

            <button

              key={item.id}

              className={selected === item.id ? "active" : ""}

              onClick={() => toggleDocument(item.id)}

            >

              <span>{item.code}</span>

              <b>{item.label}</b>

              <i />

            </button>

          ))}

          <div className="list-control down"><span /></div>

        </aside>

        <section className={`document-stage${selected ? " has-selection" : ""}`}>

          <div className="orbit orbit-one" />

          <div className="orbit orbit-two" />

          <p className="stage-label">{selected ? "FILE OPEN" : "CHOOSE A FILE"}</p>

          <div className="papers">

            {documents.map((item, index) => (

              <PaperDocument

                key={item.id}

                id={item.id}

                index={index}

                selected={selected}

                onSelect={toggleDocument}

              />

            ))}

          </div>

          {selected && (

            <button className="close-file" onClick={() => setSelected(null)}>

              CLOSE FILE <span>ESC</span>

            </button>

          )}

        </section>

        <aside className="info-panel">

          <span className="panel-index">{activeDocument?.code ?? "SYS.00"}</span>

          <h1>{activeDocument?.label ?? "Portfolio Files"}</h1>

          <div className="info-box">

            <p>

              {activeDocument?.description ??

                "Minneapolis-based software and DevSecOps engineer. B.S. Computer Science at the University of Minnesota, expected May 2027. Select a file to explore my work."}

            </p>

            <div className="status-row"><span>STATUS</span><b>{selected ? "OPEN" : "STANDBY"}</b></div>

          </div>

          {selected === "resume" ? (

            <a className="action-button" href={`${import.meta.env.BASE_URL}resume.pdf`} download="Samuil_Iordachi_Resume.pdf">

              DOWNLOAD PDF <Arrow down />

            </a>

          ) : (

            <button className="action-button" onClick={() => setSelected(selected ? null : "bio")}>

              {selected ? "CLOSE FILE" : "BEGIN"} <Arrow />

            </button>

          )}

          <div className="system-readout"><i /><span>PORTFOLIO OS v2.5</span><b>ONLINE</b></div>

        </aside>

      </section>

      <footer className="hud-footer">

        <span>USE POINTER TO SELECT</span>

        <span>03 FILES FOUND</span>

        <a href="mailto:Samuiliordachi@gmail.com">Samuiliordachi@gmail.com</a>

      </footer>

    </main>

  );

}
