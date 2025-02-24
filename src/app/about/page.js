"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-8"
      >
        <div className="max-w-4xl mx-auto p-6 bg-[#1F2937] text-white rounded-lg shadow-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.2)]">
          <h1 className="text-3xl font-bold text-center border-b pb-2 mb-4">
            USAMA IJAZ
          </h1>
          <p className="text-center text-lg font-semibold">
            Full Stack (MERN) Developer
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300 mt-4">
            <span>Pattoki, Pakistan</span>
            <span>|</span>
            <span>+923040444419</span>
            <span>|</span>
            <span>usamaijaz2119@gmail.com</span>
            <span>|</span>
            <a
              href="https://github.com/PAK048"
              className="text-gray-300 hover:underline"
            >
              GitHub
            </a>
            <span>|</span>
            <a
              href="https://linkedin.com/in/muhammad-usama-ijaz-3367532a6"
              className="text-gray-300 hover:underline"
            >
              LinkedIn
            </a>
          </div>

          <section className="mt-6">
            <h2 className="text-xl font-semibold border-b pb-1">EDUCATION</h2>
            <p className="mt-2 font-medium">
              University of Agriculture Faisalabad
            </p>
            <p className="text-gray-400">
              Bachelor of Software Engineering (2022 - 2026) | 6th Semester |
              CGPA: 3.14/4.0
            </p>
            <p className="mt-2 font-medium">
              Aspire Group of Colleges, Pattoki
            </p>
            <p className="text-gray-400">
              FSc Pre-Engineering (2020 - 2022) | Division 1st | Marks: 917/1100
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold border-b pb-1">SKILLS</h2>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>
                Programming Languages: Python, C++, HTML, CSS, JavaScript, SQL,
                MySQL
              </li>
              <li>
                Web & Software Development: MERN Stack, Next.js, Redux Toolkit,
                Visual Programming
              </li>
              <li>
                Cybersecurity: SIEM tools, Vulnerability Assessment, Network
                Packet Analysis
              </li>
              <li>Database Management: MongoDB, MySQL, SQL</li>
              <li>
                Soft Skills: English Communication, Problem-Solving,
                Adaptability
              </li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold border-b pb-1">
              WORK EXPERIENCE
            </h2>
            <p className="mt-2 font-medium">
              Cyber Security Analyst | Prodigy InfoTech (Jun 2024 - Aug 2024)
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>
                Conducted cipher encryption & decryption for data security.
              </li>
              <li>
                Developed image encryption & decryption algorithms to prevent
                unauthorized access.
              </li>
              <li>
                Created a password strength checker to enhance authentication
                security.
              </li>
              <li>
                Designed a network packet analyser for monitoring cybersecurity
                threats.
              </li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold border-b pb-1">PROJECTS</h2>
            <div className="mt-2">
              <p className="font-medium">
                AI Chatbot for E-Commerce Consultation
              </p>
              <p className="text-gray-400">
                Built an AI-powered chatbot Web App to assist e-commerce store
                owners.
              </p>
              <p className="text-gray-400">
                Technologies: Next.js, OpenAI API, Socket.IO, Tailwind CSS
              </p>
            </div>
            <div className="mt-4">
              <p className="font-medium">Real-Time Chat Web Application</p>
              <p className="text-gray-400">
                Developed a real-time messaging app using Socket.IO and
                React.js.
              </p>
              <p className="text-gray-400">
                Technologies: React.js, Node.js, Express.js, Socket.IO
              </p>
            </div>
            <div className="mt-4">
              <p className="font-medium">Myntra E-Commerce App Clone</p>
              <p className="text-gray-400">
                Created a full-featured e-commerce platform clone with user
                authentication.
              </p>
              <p className="text-gray-400">
                Technologies: React.js, Redux Toolkit, Node.js, Express.js,
                MongoDB
              </p>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold border-b pb-1">
              CERTIFICATIONS & TRAININGS
            </h2>
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>Google Cybersecurity Professional Certificate – Coursera</li>
              <li>Introduction to Next.js – Coursera</li>
              <li>Certified Ethical Hacking</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold border-b pb-1">LANGUAGES</h2>
            <p className="text-gray-300">English, Urdu, Punjabi</p>
          </section>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
