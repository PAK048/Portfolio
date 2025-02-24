"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import axios from "axios";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Loader } from "lucide-react";
// import Link from "next/link";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects");
        console.log(response);
        const data = response.data;
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      <Navbar />
      <section className="px-8 py-16 bg-[#1F2937]">
        <div className="sm:max-w-6xl max-w-[270] shadow-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] rounded-lg p-2   mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-4xl font-mono text-white">
              <span className="text-gray-400">#</span>All projects
            </h2>
          </div>
          {loading && (
            <div className="inset-0 flex items-center justify-center mb-[20px]">
              <Loader className="animate-spin text-gray-500" size={32} />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.4 }}
                className={`bg-zinc-900 rounded-lg overflow-hidden`}
              >
                <div className="p-2 border border-white/10 rounded-lg h-full flex flex-col">
                  {/* Project Logo */}
                  <div className="mb-4">
                    <img
                      src={project.imagesUrl?.[0] || "/placeholder.svg"}
                      alt={`${project?.title} logo`}
                      onLoad={() => setLoading(false)}
                      className="h-[250] w-[250] object-cover sm:h-[350] sm:w-[400]"
                    />
                  </div>

                  {/* Tech Stack */}
                  <div className="text-sm flex text-gray-400 font-mono mb-2">
                    {project?.techStack.join(" ")}
                  </div>

                  {/* Project Title */}
                  <h3 className={`text-xl font-semibold mb-2 `}>
                    {project?.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-300 mb-4 flex-grow">
                    {project?.description}
                  </p>

                  {/* Buttons */}
                  <button className="px-4 sm:ml-[100px] ml-[70px] py-1 max-w-[100px] justify-center border border-white/20 rounded hover:bg-white/10 transition-colors text-sm text-white">
                    <Link href={`${project?.liveUrl}`}>
                      <span className="flex items-center justify-center">
                        Live <span className="mx-[10px]">⇆</span>
                      </span>
                    </Link>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
