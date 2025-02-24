import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Usama Ijaz | Full Stack Developer",
  description:
    "Full Stack Developer specializing in the MERN stack, building scalable and user-friendly web applications. Strong English communication skills for global collaboration. Experienced in deploying web apps on Vercel. Adaptable, problem solver, and team player with strong analytical skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1F2937]`}>{children}</body>
    </html>
  );
}
