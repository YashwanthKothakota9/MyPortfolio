"use client";
import Image from "next/image";
import ProfileImg from "@/public/Yash.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={ProfileImg}
              alt="Yashwanth Profile Picture"
              width={192}
              height={192}
              quality={100}
              priority={true}
              className={`${
                theme === "light" ? "border-white" : "border-[#7dd3fc]"
              } h-24 w-24 rounded-full object-cover border-[0.3rem]  shadow-xl transition-all`}
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Yashwanth.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">6 months</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-teal-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-teal-950 active:scale-105 transition dark:bg-sky-500 dark:hover:bg-sky-600"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="bg-white group  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-[1.05] hover:scale-[1.05] hover:text-teal-950  active:scale-105 transition cursor-pointer border border-black/10 dark:bg-slate-50/10 dark:hover:text-sky-300"
          href="/Resume.pdf"
          download={true}
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white  p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-teal-950  active:scale-105 transition cursor-pointer border border-black/10 dark:bg-slate-50/10 dark:text-sky-400 dark:hover:text-sky-300"
          href="https://www.linkedin.com/in/yashwanthkothakota/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white  p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border border-black/10 dark:bg-slate-50/10 dark:text-sky-400 dark:hover:text-sky-300"
          href="https://github.com/YashwanthKothakota9"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
