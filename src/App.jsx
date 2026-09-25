import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshTransmissionMaterial,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { motion } from "framer-motion";
import "./App.css";

/* =========================================================
   3D HERO OBJECT
========================================================= */

function HeroObject() {
  const group = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y = time * 0.22;
      group.current.rotation.x = Math.sin(time * 0.45) * 0.12;
      group.current.position.y = Math.sin(time * 0.8) * 0.12;
    }
  });

  return (
    <group ref={group}>

      {/* Main crystal */}
      <mesh rotation={[0.25, 0.15, 0]}>
        <icosahedronGeometry args={[1.45, 1]} />

        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={1.1}
          roughness={0.12}
          transmission={0.92}
          ior={1.45}
          chromaticAberration={0.08}
          distortion={0.18}
          distortionScale={0.3}
          color="#ff4fa3"
        />
      </mesh>

      {/* Inner glowing sphere */}
      <mesh scale={0.72}>
        <sphereGeometry args={[1, 32, 32]} />

        <meshStandardMaterial
          color="#ff3f9f"
          emissive="#ff167f"
          emissiveIntensity={2.8}
          metalness={0.55}
          roughness={0.18}
        />
      </mesh>

      {/* Horizontal orbital ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.9, 0.025, 16, 120]} />

        <meshStandardMaterial
          color="#ff5bb0"
          emissive="#ff198b"
          emissiveIntensity={4}
        />
      </mesh>

      {/* Vertical orbital ring */}
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2.05, 0.018, 16, 120]} />

        <meshStandardMaterial
          color="#b84cff"
          emissive="#a12dff"
          emissiveIntensity={3}
        />
      </mesh>

      {/* Diagonal orbital ring */}
      <mesh rotation={[0.7, 0.35, 0.2]}>
        <torusGeometry args={[2.2, 0.012, 12, 100]} />

        <meshStandardMaterial
          color="#ff4ca8"
          emissive="#ff1590"
          emissiveIntensity={3}
        />
      </mesh>

    </group>
  );
}

/* =========================================================
   3D SCENE
========================================================= */

function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 6],
        fov: 45,
      }}
      dpr={[1, 2]}
    >

      <ambientLight intensity={0.35} />

      <pointLight
        position={[3, 3, 4]}
        intensity={18}
        color="#ff3f9f"
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={10}
        color="#8c32ff"
      />

      <pointLight
        position={[0, 2, -2]}
        intensity={7}
        color="#ffffff"
      />

      <Float
        speed={1.4}
        rotationIntensity={0.35}
        floatIntensity={0.55}
      >
        <HeroObject />
      </Float>

      <Environment preset="night" />

      <ContactShadows
        position={[0, -2.2, 0]}
        opacity={0.3}
        scale={8}
        blur={2}
      />

    </Canvas>
  );
}

/* =========================================================
   DATA
========================================================= */

const skills = [
  {
    number: "01",
    title: "Backend Engineering",
    description:
      "Python, Django REST Framework, REST APIs, authentication and backend architecture.",
  },
  {
    number: "02",
    title: "Frontend Engineering",
    description:
      "React, JavaScript, responsive interfaces, animations and modern web experiences.",
  },
  {
    number: "03",
    title: "AI Integration",
    description:
      "LLM APIs, AI assistants, prompt-driven workflows and intelligent application features.",
  },
  {
    number: "04",
    title: "Data & APIs",
    description:
      "PostgreSQL, database integration, API design and application data flow.",
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "Production deployment, environment configuration, testing and modern hosting workflows.",
  },
  {
    number: "06",
    title: "DSA",
    description:
      "Pattern-based problem solving, algorithms, data structures and coding interview preparation.",
  },
];

const projects = [
  {
    number: "01",
    category: "AI / FULL STACK",
    title: "AI Shopping Assistant",
    description:
      "Full-stack e-commerce application with an AI shopping assistant capable of understanding natural-language requests and interacting with the shopping cart.",
    tags: ["React", "Django", "PostgreSQL", "Gemini"],
    github: "https://github.com/Amrutha-AItech",
    demo: "https://ai-shopping-assistant-rosy.vercel.app/",
  },

  {
    number: "02",
    category: "SECURITY / AI",
    title: "AI Security Vulnerability Auditor",
    description:
      "AI-assisted security auditing system designed to analyze application vulnerabilities and surface potential security issues.",
    tags: ["Python", "AI", "Security", "APIs"],
    github: "https://github.com/Amrutha-AItech",
    demo: "#",
  },

  {
    number: "03",
    category: "LLM / SYSTEMS",
    title: "LLM Cost & Latency Router",
    description:
      "Intelligent routing system focused on balancing model selection, latency and API cost for LLM-powered applications.",
    tags: ["Python", "LLM", "APIs", "Optimization"],
    github: "https://github.com/Amrutha-AItech",
    demo: "#",
  },
];

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* =========================================================
   APP
========================================================= */


const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
function App() {

  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [chatError, setChatError] = useState("");

  const [isListening, setIsListening] = useState(false);

  const [chatResponse, setChatResponse] = useState(
    "Hi 👋 I'm Amrutha AI. Ask me about Amrutha's projects, skills, architecture or engineering work."
  );


  /* =======================================================
   VOICE ASSISTANCE
======================================================= */

const handleVoiceInput = () => {
  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    setChatError(
      "Voice input is not supported in this browser."
    );
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "en-IN";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    setIsListening(true);
    setChatError("");
  };

  recognition.onresult = (event) => {
    const transcript =
      event.results[0][0].transcript;

    setMessage(transcript);
  };

  recognition.onerror = (event) => {
    console.error("VOICE INPUT ERROR:", event.error);

    setChatError(
      "I couldn't hear that. Please try again."
    );

    setIsListening(false);
  };

  recognition.onend = () => {
    setIsListening(false);
  };

  recognition.start();
};
  

  /* =======================================================
     AI AGENT
  ======================================================= */

  const handleChat = async () => {

  if (!message.trim() || isLoading) return;

  const userMessage = message.trim();

  setMessage("");
  setChatError("");
  setIsLoading(true);

  try {

    const response = await fetch(
  `${API_BASE_URL}/chat`,
  {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      message: userMessage,
    }),
  }
);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data?.detail ||
        "Unable to get a response from Amrutha AI."
      );
    }

   const aiResponse =
  data?.response ||
  "I couldn't generate a response right now.";

setChatResponse(aiResponse);

// Clean text ONLY for speech
const speechText = aiResponse
  .replace(/[*#_`~]/g, "")
  .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
  .replace(/\n+/g, " ")
  .replace(/\s+/g, " ")
  .trim();

// 🔊 Voice response
if ("speechSynthesis" in window) {
  window.speechSynthesis.cancel();

  // Clean Markdown/formatting ONLY for voice output
  const speechText = aiResponse
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/#/g, "")
    .replace(/_/g, " ")
    .replace(/`/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const speakWithFemaleVoice = () => {
    const voices = window.speechSynthesis.getVoices();

    // Prefer the female voice we already tested successfully
    const femaleVoice =
      voices.find(
        (voice) =>
          voice.name ===
          "Microsoft Zira - English (United States)"
      ) ||
      voices.find(
        (voice) =>
          voice.name === "Google UK English Female"
      );

    const utterance =
      new SpeechSynthesisUtterance(speechText);

    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }

    utterance.lang = "en-US";
    utterance.rate = 0.95;
    utterance.pitch = 1.05;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  };

  // Chrome may load voices asynchronously
  const voices = window.speechSynthesis.getVoices();

  if (voices.length > 0) {
    speakWithFemaleVoice();
  } else {
    window.speechSynthesis.onvoiceschanged = () => {
      speakWithFemaleVoice();
      window.speechSynthesis.onvoiceschanged = null;
    };
  }
}
  } catch (error) {

    console.error(
      "AI CHAT ERROR:",
      error
    );

    setChatError(
      "Amrutha AI is temporarily unavailable. Please try again."
    );

  } finally {

    setIsLoading(false);

  }
};
  /* =======================================================
     SMOOTH SCROLL
  ======================================================= */

  const scrollTo = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  /* =======================================================
     APP
  ======================================================= */

  return (

    <div className="app">

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="background-effects">

        <div className="ambient-orb orb-one" />
        <div className="ambient-orb orb-two" />
        <div className="ambient-orb orb-three" />

        <div className="star-field" />

      </div>


      {/* =================================================
          NAVBAR
      ================================================= */}

      <nav className="navbar">

        <a
          href="#home"
          className="brand"
          onClick={() => scrollTo("home")}
        >
          AM<span>.</span>
        </a>


        <div className="nav-links">

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#agent">
            AI Agent
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        <button
          className="nav-connect"
          onClick={() => scrollTo("contact")}
        >

          <span className="nav-dot" />

          Let's Connect

          <span className="nav-arrow">
            →
          </span>

        </button>

      </nav>


      {/* =================================================
          HERO
      ================================================= */}

      <main id="home">

        <section className="hero-section">

          <div className="hero-grid" />

          <div className="hero-glow" />

          <div className="hero-particle particle-one" />
          <div className="hero-particle particle-two" />
          <div className="hero-particle particle-three" />
          <div className="hero-particle particle-four" />


          {/* LEFT */}

          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >

            <motion.div
              className="hero-eyebrow"
              variants={fadeUp}
            >

              <span className="eyebrow-line" />

              SOFTWARE ENGINEER
              <span>•</span>
              AI
              <span>•</span>
              BACKEND

            </motion.div>


            <motion.h1
              className="hero-title"
              variants={fadeUp}
            >

              Building

              <br />

              <span>
                intelligent
              </span>

              <br />

              software systems
              <b>.</b>

            </motion.h1>


            <motion.p
              className="hero-description"
              variants={fadeUp}
            >

              I'm Amrutha, a software engineer focused on
              AI-powered applications, backend engineering,
              scalable APIs and modern web experiences.

            </motion.p>


            {/* HERO BUTTONS */}

            <motion.div
              className="hero-actions"
              variants={fadeUp}
            >

              <button
                className="floating-button primary-button"
                onClick={() => scrollTo("projects")}
              >

                <span>
                  View Projects
                </span>

                <span className="button-icon">
                  ↗
                </span>

              </button>


              <button
                className="floating-button secondary-button"
                onClick={() => scrollTo("agent")}
              >

                <span className="sparkle">
                  ✦
                </span>

                <span>
                  Meet Amrutha AI
                </span>

                <span className="button-icon">
                  →
                </span>

              </button>

            </motion.div>


            {/* HERO STATS */}

            <motion.div
              className="hero-meta"
              variants={fadeUp}
            >

              <div className="hero-stat">

                <strong>
                  03
                </strong>

                <span>
                  SELECTED PROJECTS
                </span>

              </div>


              <div className="stat-divider" />


              <div className="hero-stat">

                <strong>
                  AI
                </strong>

                <span>
                  ENGINEERING FOCUS
                </span>

              </div>


              <div className="stat-divider" />


              <div className="hero-stat">

                <strong>
                  ∞
                </strong>

                <span>
                  LEARNING MODE
                </span>

              </div>

            </motion.div>

          </motion.div>


          {/* RIGHT 3D */}

          <motion.div
            className="hero-visual"
            initial={{
              opacity: 0,
              scale: 0.7,
              x: 80,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="ai-label">

              <span />

              AMRUTHA AI

            </div>


            <div className="ideas-card">

              <strong>
                +
              </strong>

              <span>
                IDEAS
                <br />
                TO
                <br />
                IMPACT
              </span>

            </div>


            <div className="hero-3d">

              <HeroScene />

            </div>


            <div className="build-text">

              <span />

              BUILD
              <br />
              LEARN
              <br />
              SHIP
              <br />
              REPEAT

            </div>


            <div className="engineer-card">

              <span />

              <div>
                ENGINEER
                <br />
                CREATE
                <br />
                INNOVATE
              </div>

            </div>

          </motion.div>


          {/* SCROLL */}

          <div className="scroll-explore">

            <div className="scroll-mouse">
              <span />
            </div>

            <span>
              SCROLL TO EXPLORE
            </span>

            <div className="scroll-line" />

          </div>


          {/* SOCIAL */}

          <div className="hero-socials">

            <a
              href="https://github.com/Amrutha-AItech"
              target="_blank"
              rel="noopener noreferrer"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              in
            </a>

            <a href="mailto:amruthabm018@gmail.com">
              @
            </a>

          </div>

        </section>


        {/* =================================================
            ABOUT
        ================================================= */}

        <motion.section
          id="about"
          className="section about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={stagger}
        >

          <motion.div
            className="section-number"
            variants={fadeUp}
          >
            01 / ABOUT
          </motion.div>


          <motion.div
            className="about-layout"
            variants={fadeUp}
          >

            <h2>

              Engineering

              <br />

              <span>
                with intention.
              </span>

            </h2>


            <div className="about-copy">

              <p>
                I build full-stack applications with a
                strong focus on backend engineering, APIs,
                AI integration and scalable software
                architecture.
              </p>

              <p>
                My work combines Python, Django REST
                Framework, React, PostgreSQL and modern AI
                APIs to create practical software
                experiences.
              </p>

              <p>
                I'm also strengthening my Data Structures &
                Algorithms and problem-solving skills for
                software engineering interviews.
              </p>

            </div>

          </motion.div>

        </motion.section>


        {/* =================================================
            SKILLS
        ================================================= */}

        <section
          id="skills"
          className="section"
        >

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
          >

            <motion.div
              className="section-number"
              variants={fadeUp}
            >
              02 / SKILLS
            </motion.div>


            <motion.div
              className="section-heading"
              variants={fadeUp}
            >

              <h2>

                Tools I use

                <br />

                <span>
                  to build.
                </span>

              </h2>


              <p>
                A practical engineering stack centered
                around backend systems, modern interfaces
                and AI integrations.
              </p>

            </motion.div>


            <div className="skills-grid">

              {skills.map((skill) => (

                <motion.article
                  className="skill-card"
                  key={skill.number}
                  variants={fadeUp}
                  whileHover={{
                    y: -10,
                    rotateX: 3,
                    rotateY: -3,
                  }}
                >

                  <div className="skill-top">

                    <span>
                      {skill.number}
                    </span>

                    <span className="skill-arrow">
                      ↗
                    </span>

                  </div>


                  <h3>
                    {skill.title}
                  </h3>


                  <p>
                    {skill.description}
                  </p>


                  <div className="card-line" />

                </motion.article>

              ))}

            </div>

          </motion.div>

        </section>


        {/* =================================================
            PROJECTS
        ================================================= */}

        <section
          id="projects"
          className="section projects-section"
        >

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={stagger}
          >

            <motion.div
              className="section-heading projects-heading"
              variants={fadeUp}
            >
              <div>
                <span className="mini-label">
                  SELECTED WORK
                </span>

                <h2>
                  Things I've
                  <br />
                  <span>built.</span>
                </h2>
              </div>

              <p>
                A collection of AI-powered applications,
                backend systems and engineering projects
                built to solve practical problems.
              </p>
            </motion.div>

            {/* ================= PROJECT CARDS ================= */}

            <div className="projects-grid">

              {/* PROJECT 01 */}
              <motion.article
                className="project-card featured-project"
                variants={fadeUp}
                whileHover={{
                  y: -12,
                  rotateX: 2,
                  rotateY: -2,
                }}
              >
                <div className="project-visual">

                  <div className="project-glow" />

                  <div className="project-number">
                    01
                  </div>

                  <div className="project-orb shopping-orb">
                    <div className="orb-core" />
                    <div className="orb-ring ring-one" />
                    <div className="orb-ring ring-two" />
                  </div>

                  <span className="project-category">
                    AI · FULL STACK
                  </span>

                </div>

                <div className="project-body">

                  <div className="project-title-row">
                    <h3>
                      AI Shopping
                      <br />
                      Assistant
                    </h3>

                    <span className="project-arrow">
                      ↗
                    </span>
                  </div>

                  <p>
                    A full-stack e-commerce platform with
                    an AI shopping assistant capable of
                    understanding natural-language requests
                    and interacting with the shopping cart.
                  </p>

                  <div className="project-tags">
                    <span>React</span>
                    <span>Django</span>
                    <span>PostgreSQL</span>
                    <span>Gemini</span>
                  </div>

                  <div className="project-actions">

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                      <span>↗</span>
                    </a>

                    <a
                      href="https://ai-shopping-assistant-rosy.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <span>↗</span>
                    </a>

                  </div>

                </div>
              </motion.article>


              {/* PROJECT 02 */}
              <motion.article
                className="project-card"
                variants={fadeUp}
                whileHover={{
                  y: -12,
                  rotateX: 2,
                  rotateY: -2,
                }}
              >
                <div className="project-visual">

                  <div className="project-glow purple-glow" />

                  <div className="project-number">
                    02
                  </div>

                  <div className="project-orb security-orb">
                    <div className="orb-core" />
                    <div className="orb-ring ring-one" />
                    <div className="orb-ring ring-two" />
                  </div>

                  <span className="project-category">
                    SECURITY · AI
                  </span>

                </div>

                <div className="project-body">

                  <div className="project-title-row">
                    <h3>
                      AI Security
                      <br />
                      Vulnerability Auditor
                    </h3>

                    <span className="project-arrow">
                      ↗
                    </span>
                  </div>

                  <p>
                    An AI-assisted security auditing system
                    designed to analyze applications,
                    identify potential vulnerabilities and
                    surface actionable security insights.
                  </p>

                  <div className="project-tags">
                    <span>Python</span>
                    <span>AI</span>
                    <span>Security</span>
                    <span>APIs</span>
                  </div>

                  <div className="project-actions">

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                      <span>↗</span>
                    </a>

                

                  </div>

                </div>
              </motion.article>


              {/* PROJECT 03 */}
              <motion.article
                className="project-card"
                variants={fadeUp}
                whileHover={{
                  y: -12,
                  rotateX: 2,
                  rotateY: -2,
                }}
              >
                <div className="project-visual">

                  <div className="project-glow cyan-glow" />

                  <div className="project-number">
                    03
                  </div>

                  <div className="project-orb router-orb">
                    <div className="orb-core" />
                    <div className="orb-ring ring-one" />
                    <div className="orb-ring ring-two" />
                  </div>

                  <span className="project-category">
                    LLM · SYSTEMS
                  </span>

                </div>

                <div className="project-body">

                  <div className="project-title-row">
                    <h3>
                      LLM Cost &
                      <br />
                      Latency Router
                    </h3>

                    <span className="project-arrow">
                      ↗
                    </span>
                  </div>

                  <p>
                    An intelligent routing system focused on
                    balancing model selection, response
                    latency and API cost for LLM-powered
                    applications.
                  </p>

                  <div className="project-tags">
                    <span>Python</span>
                    <span>LLM</span>
                    <span>APIs</span>
                    <span>Optimization</span>
                  </div>

                  <div className="project-actions">

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                      <span>↗</span>
                    </a>

                  </div>

                </div>
              </motion.article>

            </div>
          </motion.div>
        </section>


        {/* =====================================================
            AI AGENT
        ===================================================== */}

        <section
          id="agent"
          className="agent-section"
        >

          <div className="agent-bg-orb" />
          <div className="agent-grid" />

          <motion.div
            className="agent-container"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
          >

            <motion.div
              className="section-number"
              variants={fadeUp}
            >
              04 / AI AGENT
            </motion.div>


            {/* AGENT HEADING */}

            <motion.div
              className="agent-heading"
              variants={fadeUp}
            >

              <div>

                <span className="mini-label">
                  PORTFOLIO INTELLIGENCE
                </span>

                <h2>
                  Meet
                  <br />
                  <span>Amrutha AI.</span>
                </h2>

              </div>


              <div className="agent-live">

                <span className="live-dot" />

                AI ONLINE

              </div>

            </motion.div>


            {/* AGENT CARD */}

            <motion.div
              className="agent-card"
              variants={fadeUp}
            >

              {/* CARD HEADER */}

              <div className="agent-card-top">

                <div className="agent-avatar">

                  <div className="avatar-ring" />

                  <span>
                    AM
                  </span>

                </div>


                <div className="agent-identity">

                  <strong>
                    Amrutha AI
                  </strong>

                  <span>
                    Software engineering portfolio assistant
                  </span>

                </div>


                <div className="agent-status">

                  <span />

                  ONLINE

                </div>

              </div>


              {/* AGENT RESPONSE */}

              <div className="agent-response">

                <div className="agent-message-icon">
                  AM
                </div>

                <div className="agent-message-content">

                  <span className="message-label">
                    AMRUTHA AI
                  </span>

                 <div className="agent-markdown">
                   <ReactMarkdown>
                   {chatResponse}
                   </ReactMarkdown>
                 </div>
                </div>

              </div>


              {/* INPUT */}

              <div className="agent-input">

                 <input
    type="text"
    placeholder="Ask me about Amrutha's projects, skills or architecture..."
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleChat();
      }
    }}
  />

  {/* VOICE BUTTON */}
  <button
    type="button"
    className={`voice-button ${isListening ? "listening" : ""}`}
    onClick={handleVoiceInput}
    disabled={isLoading}
    aria-label={isListening ? "Stop listening" : "Start voice input"}
  >
    {isListening ? "●" : "🎙"}
  </button>

  {/* SEND BUTTON */}
  <button
    onClick={handleChat}
    disabled={isLoading}
    aria-label="Send message"
  >
    <span>
      {isLoading ? "…" : "↗"}
    </span>
  </button>
  </div>

              {/* SUGGESTIONS */}

              <div className="agent-suggestions">

                <button
                  onClick={() => {
                    setMessage(
                      "Tell me about your projects"
                    );

                    setTimeout(
                      handleChat,
                      0
                    );
                  }}
                >
                  <span>✦</span>
                  Projects
                </button>


                <button
                  onClick={() => {
                    setMessage(
                      "What technologies do you use?"
                    );

                    setTimeout(
                      handleChat,
                      0
                    );
                  }}
                >
                  <span>⌘</span>
                  Tech Stack
                </button>


                <button
                  onClick={() => {
                    setMessage(
                      "Tell me about your backend"
                    );

                    setTimeout(
                      handleChat,
                      0
                    );
                  }}
                >
                  <span>⚡</span>
                  Backend
                </button>

              </div>

            </motion.div>


            {/* AGENT CAPABILITIES */}

            <motion.div
              className="agent-capabilities"
              variants={fadeUp}
            >

              <div>
                <span>01</span>
                <strong>Projects</strong>
                <p>
                  Explore applications I've built.
                </p>
              </div>

              <div>
                <span>02</span>
                <strong>Architecture</strong>
                <p>
                  Understand how systems are designed.
                </p>
              </div>

              <div>
                <span>03</span>
                <strong>Engineering</strong>
                <p>
                  Learn about my technical stack.
                </p>
              </div>

            </motion.div>

          </motion.div>

        </section>


        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="contact-glow" />
          <div className="contact-grid" />

          <motion.div
            className="contact-content"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
          >

            <motion.span
              className="section-label"
              variants={fadeUp}
            >
              05 / CONTACT
            </motion.span>


            <motion.h2
              className="section-title"
              variants={fadeUp}
            >
              Let's build
              <br />
              <span className="accent">
                something meaningful.
              </span>
            </motion.h2>


            <motion.p
              variants={fadeUp}
            >
              Open to software engineering, backend
              engineering, full-stack and AI opportunities.
            </motion.p>


            <motion.div
              className="contact-buttons"
              variants={fadeUp}
            >

              <a
                href="mailto:amruthabm018@gmail.com"
                className="primary-button floating-button"
              >
                <span>Email Me</span>
                <span className="button-arrow">
                  ↗
                </span>
              </a>


              <a
                href="https://github.com/Amrutha-AItech"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button floating-button"
              >
                <span>GitHub</span>
                <span className="button-arrow">
                  ↗
                </span>
              </a>


              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button floating-button"
              >
                <span>LinkedIn</span>
                <span className="button-arrow">
                  ↗
                </span>
              </a>

            </motion.div>


            {/* CONTACT ORBIT */}

            <motion.div
              className="contact-orbit"
              variants={fadeUp}
            >

              <div className="contact-orbit-ring ring-a" />
              <div className="contact-orbit-ring ring-b" />

              <div className="contact-orbit-core">
                AM<span>.</span>
              </div>

            </motion.div>

          </motion.div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-left">

          <div className="footer-logo">
            AM<span>.</span>
          </div>

          <p>
            Amrutha BM
          </p>

        </div>


        <div className="footer-center">

          <p>
            Designed & built by{" "}
            <strong>
              Amrutha BM
            </strong>
          </p>

          <span>
            Software Engineer • AI • Backend
          </span>

        </div>


        <div className="footer-right">

          <a
            href="https://github.com/Amrutha-AItech"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="mailto:amruthabm018@gmail.com"
          >
            Email
          </a>

        </div>

      </footer>


      {/* =====================================================
          END OF APP
      ===================================================== */}

    </div>
  );
}

export default App;