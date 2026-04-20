import React from "react";
import { FaAws } from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
} from "react-icons/si";

const sectionWrap = "mx-auto max-w-6xl px-6 md:px-10";

const profile = {
  name: "Sai Kishore Moturu",
  role: "Software Engineer & Full-Stack Developer",
  intro:
    "Computer Science graduate focused on building robust backend systems, full-stack web apps, and real-time AI-powered solutions.",
  location: "India",
  email: "kishoremoturu999@gmail.com",
  phone: "+91-8374446799",
  github: "https://github.com/kishoremoturu",
  linkedin: "https://www.linkedin.com/in/kishoremoturu/",
};

const skills = [
  { name: "Python", icon: SiPython },
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React.js", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Flask", icon: SiFlask },
  { name: "FastAPI", icon: SiFastapi },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "SQLite", icon: SiSqlite },
  { name: "AWS", icon: FaAws },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

const experience = [
  {
    company: "DeepSight AI Labs",
    role: "Software Engineer Intern",
    period: "May 2025 - Feb 2026",
    location: "Gurgaon",
    points: [
      "Designed a real-time video processing system handling 15+ concurrent surveillance streams.",
      "Built computer vision pipelines using YOLOv5, DeepSORT, InsightFace, Python, and FastAPI.",
      "Worked with Git-based collaboration and cloud deployment workflows.",
      "Gained exposure to Python, LLMs, Generative AI, MySQL, and scalable backend delivery.",
    ],
  },
];

const projects = [
  {
    title: "Crypto Trading Bot",
    period: "Feb 2025 - Apr 2025",
    stack: ["Python", "Pandas", "NumPy", "TextBlob", "NewsAPI"],
    description:
      "Built an automated crypto trading bot for BTC/USDT decisions using market indicators and real-time news sentiment.",
  },
  {
    title: "URL Shortener System",
    period: "Oct 2024 - Nov 2024",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    description:
      "Developed a full-stack URL shortener with redirect handling, click tracking, and analytics dashboards.",
  },
  {
    title: "Influencer Engagement & Sponsorship Platform",
    period: "Jun 2024 - Aug 2024",
    stack: ["Flask", "Jinja2", "Bootstrap", "SQLite"],
    description:
      "Created a platform that connects sponsors and influencers for campaign collaboration and product promotions.",
  },
];

const education = {
  college: "Vignan's Institute of Information Technology",
  degree: "Bachelor of Technology in Computer Science",
  period: "2021 - 2025",
  grade: "CGPA: 8.17",
  coursework: ["Data Structures", "Algorithms", "OOPS", "DBMS", "Operating Systems", "Machine Learning"],
};

const certifications = [
  "Diploma level in Data Science and Programming from IIT Madras",
  "The Complete MERN Stack Development Course on Udemy",
  "Introduction to Cloud Computing on AWS | Udemy",
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function runDataChecks() {
  assert(profile.name, "Profile name is required.");
  assert(Array.isArray(projects) && projects.length > 0, "At least one project is required.");
  assert(Array.isArray(experience) && experience.length > 0, "At least one experience item is required.");
  assert(Array.isArray(skills) && skills.length > 0, "At least one skill is required.");
  projects.forEach((project, index) => {
    assert(project.title, `Project ${index + 1} is missing a title.`);
    assert(project.description, `Project ${project.title} is missing a description.`);
  });
}

runDataChecks();

function IconBase({ children, className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </IconBase>
  );
}

function PhoneIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8l-1.3 1.3a16 16 0 0 0 6.4 6.4l1.3-1.3a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.7 2Z" />
    </IconBase>
  );
}

function GithubIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M9 19c-4 1.5-4-2-6-2" />
      <path d="M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.8A5.3 5.3 0 0 0 19 5a4.9 4.9 0 0 0-.1-3.7S17.7 1 15 2.8a13.4 13.4 0 0 0-6 0C6.3 1 5.1 1.3 5.1 1.3A4.9 4.9 0 0 0 5 5a5.3 5.3 0 0 0-1.3 3.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.6V22" />
    </IconBase>
  );
}

function LinkedinIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </IconBase>
  );
}

function ArrowDownIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </IconBase>
  );
}

function ExternalIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </IconBase>
  );
}

function SectionTitle({ index, title, subtitle }) {
  return (
    <div className="mb-10 flex flex-col gap-3 border-b border-slate-800 pb-5 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-teal-400">{index}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
      </div>
      {subtitle ? <p className="max-w-2xl text-sm leading-7 text-slate-400">{subtitle}</p> : null}
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="transition hover:text-white">
      {children}
    </a>
  );
}

function SocialButton({ href, icon: Icon, label }) {
  const isPlaceholder = !href || href === "#";
  const className =
    "inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-teal-400 hover:text-white";

  if (isPlaceholder) {
    return (
      <div className={className}>
        <Icon className="h-4 w-4" />
        {label}
      </div>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

function SkillPill({ label, icon: Icon }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-300">
      <Icon className="h-4 w-4 text-teal-400" />
      {label}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-teal-400/60">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
        </div>
        <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">{project.period}</span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ item }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-teal-400" />
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm text-teal-400">{item.company}</p>
            <h3 className="mt-1 text-xl font-semibold text-white">{item.role}</h3>
            <p className="mt-1 text-sm text-slate-500">{item.location}</p>
          </div>
          <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">{item.period}</span>
        </div>

        <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-400">
          {item.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-400" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SaiKishorePortfolio() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-200">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#0b1120]/90 backdrop-blur">
        <div className={`${sectionWrap} flex items-center justify-between py-5`}>
          <a href="#home" className="text-sm font-semibold tracking-[0.22em] text-white">
            SKM
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="border-b border-slate-800">
          <div className={`${sectionWrap} grid min-h-[calc(100vh-72px)] items-center gap-14 py-16 md:grid-cols-[1.2fr_0.8fr]`}>
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-teal-400">Portfolio</p>
              <h1 className="mt-5 text-5xl font-bold tracking-tight text-white md:text-7xl">{profile.name}</h1>
              <p className="mt-4 text-lg text-slate-400 md:text-xl">{profile.role}</p>
              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">{profile.intro}</p>

              <div className="mt-10 flex flex-wrap gap-3">
                <SocialButton href={profile.github} icon={GithubIcon} label="GitHub" />
                <SocialButton href={profile.linkedin} icon={LinkedinIcon} label="LinkedIn" />
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:opacity-90"
                >
                  <MailIcon className="h-4 w-4" /> Contact Me
                </a>
              </div>

              <a href="#about" className="mt-16 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
                Scroll to explore <ArrowDownIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="flex h-80 w-80 items-center justify-center rounded-full border border-slate-700 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.24),_rgba(15,23,42,1)_70%)] text-center shadow-[0_0_80px_rgba(45,212,191,0.14)]">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-teal-300">Software</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Engineer</p>
                  <p className="mt-4 px-10 text-sm leading-7 text-slate-400">Full-stack development, backend systems, APIs, and AI-integrated applications.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className={sectionWrap}>
            <SectionTitle index="01" title="About Me" />
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-base leading-8 text-slate-400">
                  I enjoy building practical software products that combine solid engineering foundations with useful user experiences. My background includes full-stack development, REST APIs, real-time computer vision systems, and deployment-ready backend workflows.
                </p>
                <p className="mt-6 text-base leading-8 text-slate-400">
                  I'm especially interested in roles where I can work on scalable systems, web platforms, AI-assisted products, and performance-focused engineering problems.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  { label: "Email", value: profile.email, icon: MailIcon, href: `mailto:${profile.email}` },
                  { label: "Phone", value: profile.phone, icon: PhoneIcon, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
                  { label: "GitHub", value: profile.github === "#" ? "Add GitHub URL" : profile.github, icon: GithubIcon, href: profile.github },
                  { label: "LinkedIn", value: profile.linkedin === "#" ? "Add LinkedIn URL" : profile.linkedin, icon: LinkedinIcon, href: profile.linkedin },
                ].map(({ label, value, icon: Icon, href }) => {
                  const content = (
                    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full border border-slate-700 p-2 text-teal-400">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{label}</p>
                          <p className="mt-1 text-sm text-slate-300">{value}</p>
                        </div>
                      </div>
                      <ExternalIcon className="h-4 w-4 text-slate-500" />
                    </div>
                  );
                  return href && href !== "#" ? (
                    <a key={label} href={href} target="_blank" rel="noreferrer">
                      {content}
                    </a>
                  ) : (
                    <div key={label}>{content}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="border-y border-slate-800 py-24">
          <div className={sectionWrap}>
            <SectionTitle index="02" title="Experience" />
            <div className="relative ml-1 border-l border-slate-800">
              {experience.map((item) => (
                <div key={`${item.company}-${item.role}`} className="mb-8 last:mb-0">
                  <ExperienceCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-24">
          <div className={sectionWrap}>
            <SectionTitle index="03" title="Projects" />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-slate-800 py-24">
          <div className={sectionWrap}>
            <SectionTitle index="04" title="Skills" />
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillPill key={skill.name} label={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className={sectionWrap}>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <SectionTitle index="05" title="Education" />
                <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                  <h3 className="text-xl font-semibold text-white">{education.college}</h3>
                  <p className="mt-2 text-slate-300">{education.degree}</p>
                  <p className="mt-2 text-sm text-slate-500">{education.period} • {education.grade}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <span key={course} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <SectionTitle index="06" title="Certifications" />
                <div className="space-y-4">
                  {certifications.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm leading-7 text-slate-400">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-800 py-24">
          <div className={sectionWrap}>
            <SectionTitle index="07" title="Get In Touch" />
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/60 p-8 md:p-10">
              <h3 className="text-2xl font-semibold text-white">Let's build something meaningful.</h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
                I'm looking for opportunities in software engineering, backend development, full-stack web apps, and AI-powered systems.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-2.5 text-sm font-medium text-slate-950"
                >
                  <MailIcon className="h-4 w-4" /> {profile.email}
                </a>
                <a
                  href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-300"
                >
                  <PhoneIcon className="h-4 w-4" /> {profile.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
