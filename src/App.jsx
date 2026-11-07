import { useState } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [emailStatus, setEmailStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setEmailStatus("");

    const form = e.currentTarget;

    const formData = {
      name: form.elements.namedItem("name").value,
      email: form.elements.namedItem("email").value,
      message: form.elements.namedItem("message").value,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setEmailStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setEmailStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#0B1220] text-white" : "bg-[#F5F9FF] text-[#1423B]"
      }`}
    >
      {/* Navigation */}
      <nav className="relative flex items-center justify-between px-6 py-6 md:px-8 md:py-7">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          PORTFOLIO<span className="text-[#4BB7FF]">.</span>
        </h1>

        {/* Desktop Navigation */}
        <div className="ml-auto mr-6 hidden items-center gap-6 text-sm md:flex">
          <a href="#about" className="transition hover:text-[#4BB7FF]">
            About
          </a>
          <a href="#projects" className="transition hover:text-[#4BB7FF]">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-[#4BB7FF]">
            Contact
          </a>
        </div>

        {/* Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border border-blue-400 px-3 py-2 transition hover:bg-blue-500/20"
            aria-label="Toggle dark and light mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-blue-400 p-2 transition hover:bg-blue-500/20 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div
            className={`absolute left-0 right-0 top-full z-50 flex flex-col gap-5 border-b border-blue-400/20 px-6 py-6 shadow-xl md:hidden ${
              darkMode ? "bg-[#0B1220]" : "bg-[#F5F9FF]"
            }`}
          >
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="relative isolate flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Soft blue background glow */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[450px] w-[450px] -translate-x-1/2
          -translate-y-1/2 rounded-full blur-[120px] transition-colors duration-500 ${
            darkMode ? "bg-blue-500/20" : "bg-sky-300/40"
          }`}
        />
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-[#61c8ff]">
          FRONTEND DEVELOPER
        </p>

        <h2 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
          Building digital
          <br />
          <span className="inline-block text-[#4BB7FF] transition-all duration-300 hover:scale-105 hover:text-[#61C8FF] hover:drop-shadow-[0_0_20px_rgba(75,183,255,0.6)]">
            experiences.
          </span>
        </h2>

        <p
          className={`mb-8 max-w-xl text-lg ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Creative development meets thoughtful design. I build responsive,
          interactive web applications with modern frontend technologies.
        </p>

        <a
          href="#projects"
          className="rounded-lg bg-[#168CE8] px-8 py-3 font-semibold transition hover:bg-[#4BB7FF]"
        >
          View My Projects
        </a>
      </main>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold tracking-[0.3] text-[#61C8FF]">
            My Work
          </p>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Featured <span className="text-[#4BB7FF]">Projects.</span>
          </h2>
          <p
            className={`mb-12 max-w-2xl text-lg ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A collection of projects where I've combined created design, modern
            technologies, and interactive user experiences.
          </p>

          {/* Lakeshore Lens Co. Project Card */}

          <div
            className={`mb-10 overflow-hidden rounded-2xl border
    transition-all duration-300
    md:hover:-translate-y-2
    ${
      darkMode
        ? "border-slate-700 bg-[#14243B] shadow-[0_0_55px_8px_rgba(75,183,255,0.55)] md:shadow-none md:hover:border-[#4BB7FF] md:hover:shadow-[0_0_75px_rgba(75,183,255,0.45)]"
       : "border-blue-200 bg-[#E8F1FA] shadow-[0_0_45px_5px_rgba(22,140,232,0.35)] md:shadow-[0_8px_30px_rgba(22,140,232,0.10)] md:hover:border-[#168CE8] md:hover:shadow-[0_0_45px_rgba(22,140,232,0.3)]"
    }`}
          >
            <div className="grid md:grid-cols-2">
              {/* Project Image */}
              <div className="relative min-h-[300px] overflow-hidden">
                <img
                  src="/LakeshoreLens.png"
                  alt="Lakeshore Lens Co. website screenshot"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>

              {/* Project Details */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <p className="mb-3 text-sm font-semibold text-[#61C8FF]">
                  FEATURED PROJECT
                </p>

                <h3 className="mb-4 text-3xl font-bold">Lakeshore Lens Co.</h3>

                <p
                  className={`mb-6 leading-relaxed ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  A responsive camera lens rental website featuring searchable
                  listings, dynamic filtering and sorting, individual lens
                  detail pages, and an interactive photography gallery.
                </p>

                {/* Technologies */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {["React", "JavaScript", "CSS", "API Integration"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className={`rounded-full border px-3 py-1 text-xs ${
                          darkMode
                            ? "border-blue-400/30 text-[#61C8FF]"
                            : "border-blue-300 text-[#0875CF]"
                        }`}
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>

                {/* Project Links - we'll add your URLs next */}

                {/* Project Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://lakeshore-lens-react.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-[#168CE8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4BB7FF]"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href="https://github.com/Jantioho26/Lakeshore-lens-react"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-lg border px-5 py-3 text-sm font-semibold transition ${
                      darkMode
                        ? "border-slate-600 text-white hover:border-[#4BB7FF]"
                        : "border-slate-300 text-[#14243B] hover:border-[#168CE8]"
                    }`}
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skinstric AI Project Card */}
          <div
            className={`overflow-hidden rounded-2xl border
    transition-all duration-300 hover:-translate-y-2
    ${
 darkMode
  ? "border-slate-700 bg-[#14243B] shadow-[0_0_55px_8px_rgba(75,183,255,0.55)] md:shadow-none md:hover:border-[#4BB7FF] md:hover:shadow-[0_0_75px_rgba(75,183,255,0.45)]"
  : "border-blue-200 bg-[#E8F1FA] shadow-[0_0_45px_5px_rgba(22,140,232,0.35)] md:shadow-[0_8px_30px_rgba(22,140,232,0.10)] md:hover:border-[#168CE8] md:hover:shadow-[0_0_45px_rgba(22,140,232,0.3)]"

    }`}
          >
            <div className="grid md:grid-cols-2">
              {/* Project Image */}
              <div className="relative min-h-[300px] overflow-hidden md:order-2">
                <img
                  src="/skinstric.png"
                  alt="Skinstric AI website screenshot"
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>

              {/* Project Details */}

              <div className="flex flex-col justify-center p-8 md:order-1 md:p-10">
                <p className="mb-3 text-sm font-semibold text-[#61C8FF]">
                  FEATURED PROJECT
                </p>

                <h3 className="mb-4 text-3xl font-bold">Skinstric AI</h3>

                <p
                  className={`mb-6 leading-relaxed ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  An interactive AI-powered skin analysis experience featuring
                  image uploads, API integration, dynamic demographic results,
                  and a responsive interface with custom animations.
                </p>

                {/* Technologies */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {[
                    "React",
                    "JavaScript",
                    "Tailwind CSS",
                    "API Integration",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-3 py-1 text-xs ${
                        darkMode
                          ? "border-blue-400/30 text-[#61C8FF]"
                          : "border-blue-300 text-[#0875CF]"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}

                {/* Project Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://skinstric-wandag.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-[#168CE8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4BB7FF]"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href="https://github.com/Jantioho26/Skinstric-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-lg border px-5 py-3 text-sm font-semibold transition ${
                      darkMode
                        ? "border-slate-600 text-white hover:border-[#4BB7FF]"
                        : "border-slate-300 text-[#14243B] hover:border-[#168CE8]"
                    }`}
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Summarist Clone Project Card */}
          <div
            className={`mt-10 overflow-hidden rounded-2xl border
    transition-all duration-300 hover:-translate-y-2
    ${

darkMode
  ? "border-slate-700 bg-[#14243B] shadow-[0_0_55px_8px_rgba(75,183,255,0.55)] md:shadow-none md:hover:border-[#4BB7FF] md:hover:shadow-[0_0_75px_rgba(75,183,255,0.45)]"
  : "border-blue-200 bg-[#E8F1FA] shadow-[0_0_45px_5px_rgba(22,140,232,0.35)] md:shadow-[0_8px_30px_rgba(22,140,232,0.10)] md:hover:border-[#168CE8] md:hover:shadow-[0_0_45px_rgba(22,140,232,0.3)]"

    }`}
          >
            <div className="grid md:grid-cols-2">
              {/* Project Image */}
              <div className="relative min-h-[300px] overflow-hidden">
                <img
                  src="/summarist.png"
                  alt="Summarist Clone website screenshot"
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>

              {/* Project Details */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <p className="mb-3 text-sm font-semibold text-[#61C8FF]">
                  FEATURED PROJECT
                </p>

                <h3 className="mb-4 text-3xl font-bold">Summarist Clone</h3>

                <p
                  className={`mb-6 leading-relaxed ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  A responsive book summary application featuring user
                  authentication, book discovery, and an interactive reading
                  experience. Built with React and Firebase to create a modern,
                  user-friendly interface.
                </p>

                {/* Technologies */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {["React", "JavaScript", "Firebase", "CSS"].map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-3 py-1 text-xs ${
                        darkMode
                          ? "border-blue-400/30 text-[#61C8FF]"
                          : "border-blue-300 text-[#0875CF]"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links - we'll add your URLs next */}

                {/* Project Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://summarist-clone-nu.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-[#168CE8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4BB7FF]"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href="https://github.com/Jantioho26/summarist-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-lg border px-5 py-3 text-sm font-semibold transition ${
                      darkMode
                        ? "border-slate-600 text-white hover:border-[#4BB7FF]"
                        : "border-slate-300 text-[#14243B] hover:border-[#168CE8]"
                    }`}
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Netflix Clone Project Card */}
          <div
            className={`mt-10 overflow-hidden rounded-2xl border
    transition-all duration-300 hover:-translate-y-2
    ${

darkMode
  ? "border-slate-700 bg-[#14243B] shadow-[0_0_55px_8px_rgba(75,183,255,0.55)] md:shadow-none md:hover:border-[#4BB7FF] md:hover:shadow-[0_0_75px_rgba(75,183,255,0.45)]"
 : "border-blue-200 bg-[#E8F1FA] shadow-[0_0_45px_5px_rgba(22,140,232,0.35)] md:shadow-[0_8px_30px_rgba(22,140,232,0.10)] md:hover:border-[#168CE8] md:hover:shadow-[0_0_45px_rgba(22,140,232,0.3)]"
    }`}
          >
            <div className="grid md:grid-cols-2">
              {/* Project Image */}
              <div className="relative min-h-[300px] overflow-hidden md:order-2">
                <img
                  src="/netflix.png"
                  alt="Netflix Clone website screenshot"
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>

              {/* Project Details */}
              <div className="flex flex-col justify-center p-8 md:order-1 md:p-10">
                <p className="mb-3 text-sm font-semibold text-[#61C8FF]">
                  FEATURED PROJECT
                </p>

                <h3 className="mb-4 text-3xl font-bold">Netflix Clone</h3>

                <p
                  className={`mb-6 leading-relaxed ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  A responsive streaming platform interface inspired by Netflix,
                  featuring movie browsing, interactive trailers, and a modern,
                  user-friendly design. Built with React to recreate a familiar
                  streaming experience.
                </p>

                {/* Technologies */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {["React", "JavaScript", "CSS", "API Integration"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className={`rounded-full border px-3 py-1 text-xs ${
                          darkMode
                            ? "border-blue-400/30 text-[#61C8FF]"
                            : "border-blue-300 text-[#0875CF]"
                        }`}
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://temporary-prompt-oxygen-bbgih0t.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-[#168CE8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4BB7FF]"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href="https://github.com/Jantioho26/Neftlix-Clone.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-lg border px-5 py-3 text-sm font-semibold transition ${
                      darkMode
                        ? "border-slate-600 text-white hover:border-[#4BB7FF]"
                        : "border-slate-300 text-[#14243B] hover:border-[#168CE8]"
                    }`}
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* NFT Marketplace Internship Project */}
          <div
            className={`mt-10 overflow-hidden rounded-2xl border
    transition-all duration-300 hover:-translate-y-2
    ${

darkMode
  ? "border-slate-700 bg-[#14243B] shadow-[0_0_55px_8px_rgba(75,183,255,0.55)] md:shadow-none md:hover:border-[#4BB7FF] md:hover:shadow-[0_0_75px_rgba(75,183,255,0.45)]"
 : "border-blue-200 bg-[#E8F1FA] shadow-[0_0_45px_5px_rgba(22,140,232,0.35)] md:shadow-[0_8px_30px_rgba(22,140,232,0.10)] md:hover:border-[#168CE8] md:hover:shadow-[0_0_45px_rgba(22,140,232,0.3)]"

    }`}
          >
            <div className="grid md:grid-cols-2">
              {/* Project Image */}
              <div className="relative min-h-[300px] overflow-hidden">
                <img
                  src="/nft-marketplace.png"
                  alt="NFT Marketplace internship project screenshot"
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>

              {/* Project Details */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <p className="mb-3 text-sm font-semibold tracking-wider text-[#61C8FF]">
                  INTERNSHIP PROJECT
                </p>

                <h3 className="mb-4 text-3xl font-bold">NFT Marketplace</h3>

                <p
                  className={`mb-6 leading-relaxed ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  A collaborative NFT marketplace project developed during a
                  frontend development internship. Contributed reusable React
                  components, dynamic NFT collections, API integration, and
                  interactive carousel features while collaborating with a
                  development team using GitHub and pull requests.
                </p>

                {/* Technologies */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {[
                    "React",
                    "JavaScript",
                    "API Integration",
                    "GitHub",
                    "Team Collaboration",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-3 py-1 text-xs ${
                        darkMode
                          ? "border-blue-400/30 text-[#61C8FF]"
                          : "border-blue-300 text-[#0875CF]"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://joy-nft-marketplace.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-[#168CE8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4BB7FF]"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href="https://github.com/Jantioho26/joy-internship"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-lg border px-5 py-3 text-sm font-semibold transition ${
                      darkMode
                        ? "border-slate-600 text-white hover:border-[#4BB7FF]"
                        : "border-slate-300 text-[#14243B] hover:border-[#168CE8]"
                    }`}
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#61C8FF]">
            GET TO KNOW ME
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            About <span className="text-[#4BB7FF]">Me.</span>
          </h2>

          <p
            className={`mx-auto max-w-2xl text-lg leading-relaxed ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I'm a frontend developer who enjoys creating responsive,
            user-friendly websites and interactive applications. I work with
            React, JavaScript, and modern styling tools to bring creative ideas
            to life.
            <br />
            <br />
            With a professional background in property management and
            operations, I bring strong communication, organization, and
            problem-solving skills to my development work. I'm excited to
            continue growing as a developer and contributing to meaningful
            projects.
          </p>
        </div>

        {/* Skills Section */}
        <section id="skills" className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#61C8FF]">
              WHAT I WORK WITH
            </p>

            <h2 className="mb-10 text-4xl font-bold md:text-5xl">
              My <span className="text-[#4BB7FF]">Skills.</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "Git",
                "GitHub",
                "Firebase",
                "API Integration",
                "Next.js",
                "Redux",
                "Node.js",
                "Express", 
                "Vite",
                "Vercel",
              ].map((skill) => (
                <span
                  key={skill}
                  className={`rounded-xl border px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "border-slate-700 bg-[#14243B] hover:border-[#4BB7FF] hover:shadow-[0_0_25px_rgba(75,183,255,0.3)]"
                      : "border-slate-200 bg-white hover:border-[#168CE8] hover:shadow-[0_0_20px_rgba(22,140,232,0.2)]"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* Animated Divider */}
      <div
        aria-hidden="true"
        className="flex items-center justify-center gap-4 px-8 py-4"
      >
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#4BB7FF] md:w-40" />

        <div className="relative flex h-12 w-12 items-center justify-center">
          <div className="absolute h-10 w-10 rounded-full bg-[#4BB7FF]/20 blur-lg motion-safe:animate-pulse" />

          <div className="h-5 w-5 rotate-45 border-2 border-[#4BB7FF] shadow-[0_0_18px_rgba(75,183,255,0.5)] motion-safe:animate-pulse" />
        </div>

        <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#4BB7FF] md:w-40" />
      </div>

      {/* Contact Section */}
      <section id="contact" className="px-6 pb-24 pt-12 md:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#61C8FF]">
            LET'S CONNECT
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Get In <span className="text-[#4BB7FF]">Touch.</span>
          </h2>

          <p
            className={`mx-auto mb-10 max-w-xl text-lg leading-relaxed ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I'm always interested in new opportunities, creative projects, and
            connecting with others in the development community.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Email Button */}
           <button
  type="button"
  onClick={() => setContactOpen(true)}
             
              className="rounded-lg bg-[#168CE8] px-7 py-3 font-semibold text-white
      transition-all duration-300
      hover:-translate-y-1
      hover:bg-[#4BB7FF]
      hover:shadow-[0_0_30px_rgba(75,183,255,0.5)]"
            >
              Email Me ↗
            </button>

            {/* GitHub Button */}
            <a
              href="https://github.com/Jantioho26"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-lg border px-7 py-3 font-semibold
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-[0_0_30px_rgba(75,183,255,0.4)]
      ${
        darkMode
          ? "border-slate-600 hover:border-[#4BB7FF]"
          : "border-slate-300 hover:border-[#168CE8]"
      }`}
            >
              GitHub ↗
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/joy-antioho-306844437/"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-lg border px-7 py-3 font-semibold
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-[0_0_30px_rgba(75,183,255,0.4)]
      ${
        darkMode
          ? "border-slate-600 hover:border-[#4BB7FF]"
          : "border-slate-300 hover:border-[#168CE8]"
      }`}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <button
        type="button"
        onClick={() => setContactOpen(true)}
        aria-label="Open contact form"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16
    items-center justify-center rounded-full
    bg-[#168CE8] text-white
    shadow-[0_0_25px_rgba(75,183,255,0.4)]
    transition-all duration-300
    hover:scale-110 hover:bg-[#4BB7FF]
    hover:shadow-[0_0_40px_rgba(75,183,255,0.7)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </svg>
      </button>

      {/* Contact Popup */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center
      justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setContactOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            className="relative w-full max-w-lg rounded-2xl
        border border-[#4BB7FF]/30 bg-[#14243B]
        p-6 text-white
        shadow-[0_0_60px_rgba(75,183,255,0.2)]
        motion-safe:animate-[fadeIn_0.3s_ease-out]
        sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setContactOpen(false)}
              aria-label="Close contact form"
              className="absolute right-5 top-5 text-slate-400
          transition hover:text-[#4BB7FF]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Heading */}
            <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#61C8FF]">
              LET'S CONNECT
            </p>

            <h2
              id="contact-title"
              className="mb-3 text-3xl font-bold sm:text-4xl"
            >
              Let's have a <span className="text-[#4BB7FF]">chat!</span>
            </h2>

            <p className="mb-8 text-slate-400">
              I'm currently open to new opportunities.
            </p>

            {/* Contact Form */}

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full border-b border-slate-500
              bg-transparent px-1 py-3 text-white
              outline-none transition
              placeholder:text-slate-500
              focus:border-[#4BB7FF]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="Your email address"
                  className="w-full border-b border-slate-500
              bg-transparent px-1 py-3 text-white
              outline-none transition
              placeholder:text-slate-500
              focus:border-[#4BB7FF]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Your message..."
                  className="w-full resize-none border-b border-slate-500
              bg-transparent px-1 py-3 text-white
              outline-none transition
              placeholder:text-slate-500
              focus:border-[#4BB7FF]"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-lg bg-[#168CE8]
            px-6 py-4 font-semibold text-white
            transition-all duration-300
            hover:-translate-y-1 hover:bg-[#4BB7FF]
            hover:shadow-[0_0_30px_rgba(75,183,255,0.5)]"
              >
                {sending ? "Sending..." : "Send Message ↗"}
              </button>

              {/* Email Status Message */}
              {emailStatus === "success" && (
                <p role="status" className="text-center text-sm text-green-400">
                  Message sent successfully! Thank you for reaching out.
                </p>
              )}

              {emailStatus === "error" && (
                <p role="alert" className="text-center text-sm text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
