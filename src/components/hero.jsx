"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Facebook,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/PAK048" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/muhammad-usama-ijaz-3367532a6",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/usama_ijaz19?igsh=dWJoNmIxb2V5OGM0",
    },
    { icon: Facebook, href: "https://www.facebook.com/share/18jQVmqvFF/" },
  ];
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/doc/resume.pdf"; // Replace with the actual path to your CV
    link.download = "Usama_Ijaz_MERN_Stack_Dev_Resume.pdf"; // Change the filename as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative flex  items-center justify-between px-4 py-8 sm:px-8 sm:py-16">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl text-center sm:text-left"
      >
        <h1 className="text-4xl font-bold text-white mb-4 sm:text-6xl">
          Usama Ijaz
        </h1>
        <h2 className="text-xl mb-6 sm:text-2xl text-gray-300">
          I&apos;m a{" "}
          <span className="text-[#4ADE80]">MERN Stack Developer</span>
        </h2>
        <p className="text-gray-300 mb-8  text-sm sm:text-base">
          Pakistani national with a Bachelor's in Software Engineering. Skilled
          in MERN Development . Proficient in English for global communication.
          Expertise Frontend & Backend Development.Having Experience of web
          hosting on Vercel.Strong in statistical analysis, adaptable to
          challenges, and collaborative in multidisciplinary teams. Committed to
          develop user friendly Web applications.{" "}
          <Link
            href="/about"
            className="text-gray-300 hover:text-white flex  items-center gap-2 group"
          >
            more
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => handleDownload()}
            whileTap={{ scale: 0.95 }}
            className="bg-[#4ADE80] text-black px-6 py-3 rounded-full font-medium hover:bg-[#22c55e] transition-colors"
          >
            Download Resume
          </motion.button>

          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#4ADE80] hover:text-[#4ADE80] transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mt-8 sm:mt-0"
      >
        <div className=" w-[200px] h-[200px] mb-[350px] sm:mb-[10px]  bg-inherit  sm:w-[350px]  sm:h-[350px] sm:mr-[200px]  relative">
          <Image
            src="/images/profile.png"
            alt="Profile"
            fill
            className="object-cover border-2 sm:border-4  mix-blend-darker  border-[#075056] rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
