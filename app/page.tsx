import Nav from "./components/Nav";
import Section from "./components/Section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0c0f] text-zinc-100">
      <Nav />

      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(139,92,246,0.08),transparent)]" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-cyan-400 font-mono text-sm md:text-base mb-4 tracking-widest uppercase">
            Frontend Developer
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            M. Basit Ali <span className="gradient-text">Afzal</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-2">
            React.js · Next.js · TypeScript
          </p>
          <p className="text-zinc-500 mb-10">Lahore, Pakistan</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:Basitafzal538@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-6 py-3 text-cyan-400 font-medium hover:bg-cyan-500/30 transition-colors border border-cyan-500/30"
            >
              <span>Get in touch</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-basit-ali-afzal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-800/80 px-6 py-3 text-zinc-300 font-medium hover:bg-zinc-700/80 hover:text-white transition-colors border border-zinc-700"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/923121728527"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-6 py-3 text-emerald-400 font-medium hover:bg-emerald-500/30 transition-colors border border-emerald-500/30"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp me
            </a>
          </div>
        </div>
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-cyan-400 transition-colors"
          aria-label="Scroll to about"
        >
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </section>

      <Section id="about" title="About">
        <p className="text-zinc-400 leading-relaxed max-w-3xl text-lg">
          Frontend Developer with <strong className="text-zinc-300">3+</strong>{" "}
          years of experience building responsive and high-performance web
          applications using React.js, Next.js, and modern
          JavaScript/TypeScript. Skilled in creating reusable UI components,
          optimizing performance, and integrating REST APIs. Strong focus on
          clean code, user experience, and scalable architecture. I enjoy
          building fast, accessible UIs and am open to frontend and full-stack
          opportunities.
        </p>
      </Section>

      <Section id="skills" title="Technical Skills">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Frontend",
              items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript"],
            },
            {
              title: "UI & Styling",
              items: [
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Material UI",
                "Bootstrap",
              ],
            },
            {
              title: "State & Data",
              items: ["Redux", "Context API", "REST API", "Axios", "Fetch"],
            },
            {
              title: "Tools",
              items: ["Git", "GitHub", "VS Code", "npm", "Webpack"],
            },
            {
              title: "Focus Areas",
              items: [
                "Responsive Design",
                "SEO",
                "Core Web Vitals",
                "Performance",
              ],
            },
          ].map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-cyan-400 font-semibold mb-3">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-zinc-800/80 px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-8">
          <div className="relative pl-6 border-l-2 border-cyan-500/50">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500" />
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="text-xl font-semibold text-white">
                AmentoTech Pvt. Limited – Frontend Developer (React/Next.js)
              </h3>
              <span className="text-sm text-cyan-400 font-mono">
                July 2023 – Present
              </span>
            </div>
            <p className="text-zinc-500 text-sm mb-4">Lahore, Pakistan</p>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex gap-2">
                <span className="text-cyan-500 mt-1.5">•</span>
                Led frontend architecture and development of a Next.js-based
                SaaS platform.
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-500 mt-1.5">•</span>
                Designed reusable React/Next.js components improving velocity
                and maintainability.
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-500 mt-1.5">•</span>
                Optimized performance (~35% faster page speeds) and Core Web
                Vitals.
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-500 mt-1.5">•</span>
                Integrated REST APIs with Redux; collaborated with backend and
                design teams.
              </li>
            </ul>
          </div>

          <div className="relative pl-6 border-l-2 border-zinc-700">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-600" />
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="text-xl font-semibold text-white">
                Innobrains Solutions – Frontend Developer
              </h3>
              <span className="text-sm text-zinc-500 font-mono">
                Sept 2022 – June 2023
              </span>
            </div>
            <p className="text-zinc-500 text-sm mb-4">Jhang, Pakistan</p>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex gap-2">
                <span className="text-cyan-500 mt-1.5">•</span>
                Converted complex UI/UX designs into responsive, pixel-perfect
                pages with React.js.
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-500 mt-1.5">•</span>
                Built interactive components and REST API integrations for
                multiple client projects.
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-500 mt-1.5">•</span>
                Improved cross-browser compatibility and fixed critical bugs for
                stable delivery.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Project Highlights">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Affiliate Marketing Platform",
              stack:
                "Next.js, React, Python, REST & GraphQL APIs, Tailwind, ShadCN, Redux",
              points: [
                "Led frontend V2 in Next.js; migrated from React + Ruby on Rails.",
                "Affiliate registration & management for Shopify stores (Instagram & TikTok).",
                "Reusable UI, auth, dashboards, analytics; REST & GraphQL API integration & performance for large user bases.",
              ],
              accent: true,
            },
            {
              name: "Mental Health Services Platform",
              stack: "Next.js, Typeform, Tailwind, JavaScript, REST APIs",
              points: [
                "Frontend with Next.js; Typeform for client interactions.",
                "Responsive booking and feedback interfaces.",
                "Auth, dynamic forms, UX workflows and performance optimization.",
              ],
              accent: false,
            },
            {
              name: "Freelance Talent Marketplace",
              stack: "React.js, REST APIs, JavaScript, Tailwind, Redux",
              points: [
                "React platform for hiring talent (fixed salary or milestone-based).",
                "Project posting, milestone tracking, talent onboarding.",
                "Responsive UI, state management, dashboards for companies and talent.",
              ],
              accent: false,
            },
          ].map((project) => (
            <article
              key={project.name}
              className={`rounded-xl border p-6 flex flex-col ${
                project.accent
                  ? "border-cyan-500/40 bg-cyan-500/5"
                  : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
              }`}
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-xs text-cyan-400/90 font-mono mb-4">
                {project.stack}
              </p>
              <ul className="space-y-2 text-sm text-zinc-400 flex-1">
                {project.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-cyan-500 shrink-0">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 max-w-2xl">
          <h3 className="text-xl font-semibold text-white mb-1">
            Bachelor of Computer Science
          </h3>
          <p className="text-cyan-400 font-medium">
            Punjab University College of Information Technology (PUCIT/FCIT),
            University of the Punjab
          </p>
          <p className="text-zinc-500 text-sm mt-2">Graduated: 2021</p>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-white mb-3">Languages</h3>
          <ul className="flex flex-wrap gap-3">
            <li className="rounded-lg bg-zinc-800/80 px-4 py-2 text-zinc-300">
              English – Professional
            </li>
            <li className="rounded-lg bg-zinc-800/80 px-4 py-2 text-zinc-300">
              Urdu – Native
            </li>
          </ul>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 max-w-2xl">
          <p className="text-zinc-400 mb-6">
            Open to new opportunities and collaborations. Reach out via email, WhatsApp, or LinkedIn.
          </p>
          <ul className="space-y-4">
            <li>
              <a
                href="mailto:Basitafzal538@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2"
              >
                <span className="text-zinc-500">Email:</span>{" "}
                Basitafzal538@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+923121728527"
                className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2"
              >
                <span className="text-zinc-500">Phone:</span> +92 312 1728527
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/muhammad-basit-ali-afzal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2"
              >
                <span className="text-zinc-500">LinkedIn:</span>{" "}
                linkedin.com/in/muhammad-basit-ali-afzal
              </a>
            </li>
          </ul>
          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap gap-4">
            <a
              href="mailto:Basitafzal538@gmail.com?subject=Portfolio%20contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-zinc-950 font-semibold hover:bg-cyan-400 transition-colors glow"
            >
              Email me
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="https://wa.me/923121728527"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-white font-semibold hover:bg-emerald-400 transition-colors border border-emerald-400/30"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp me
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm">
        <p>
          © {new Date().getFullYear()} M. Basit Ali Afzal. Built with Next.js &
          Tailwind.
        </p>
      </footer>
    </div>
  );
}
