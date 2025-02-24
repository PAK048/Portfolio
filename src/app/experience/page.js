"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="p-8"
    >
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <h3 className="text-2xl font-semibold mb-2">Prodigy InfoTech</h3>
      <p className="text-xl mb-2">
        Cyber Security Analyst | Jun 2024 - Aug 2024
      </p>
      <p className="text-lg">
        During my internship, I gained hands-on experience in various aspects of
        cybersecurity, including:
      </p>
      <ul className="list-disc list-inside text-lg ml-4">
        <li>Cipher Encryption & Decryption</li>
        <li>Image Encryption & Decryption</li>
        <li>Password Strength Checker</li>
        <li>Network Packet Analyzer</li>
      </ul>
      <p className="text-lg mt-4">
        This experience has equipped me with practical skills and insights into
        cybersecurity challenges, which I am excited to apply in my role as a
        Cyber Security Analyst.
      </p>
    </motion.section>
  );
}
