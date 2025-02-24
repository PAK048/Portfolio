"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
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
  return (
    <footer id="footer" className=" py-2 px-4   mt-[10px] bg-[#075056]  ">
      <div className="max-w-5xl bg-[#075056]  mx-auto text-center space-y-[10px]">
        <div className="flex justify-center space-x-6 text-white text-sm font-medium">
          <motion.a
            href={""}
            whileHover={{ scale: 1.1 }}
            className="w-5 h-5  sm:w-10 sm:h-10   rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#4ADE80] hover:text-[#4ADE80] transition-colors"
          >
            <Mail />
          </motion.a>
          <span className="sm:mt-[10px] text-gray-300 ">
            <Link href="mailto:usamaijaz2119@gmail.com">
              usamaijaz2119@gmail.com
            </Link>
          </span>
        </div>
        {/* Social Icons */}
        <div className="flex flex justify-center space-x-6 ">
          <span className="sm:mt-[10px] text-gray-300 ">Contact:</span>
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              className="w-5 h-5  sm:w-10 sm:h-10   rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#4ADE80] hover:text-[#4ADE80] transition-colors"
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        <p className="text-xs text-gray-300">
          © 2025 SEUN Dev&apos;s, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
