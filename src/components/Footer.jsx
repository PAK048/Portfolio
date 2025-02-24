"use client";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Github,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
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
            {" "}
            usamaijaz2119@gmail.com
          </span>
        </div>
        {/* Social Icons */}
        <div className="flex flex justify-center space-x-6 ">
          <span className="sm:mt-[10px]  ">Contact:</span>
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
