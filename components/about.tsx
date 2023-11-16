"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        pursue my passion for programming and want to go deep into core
        concepts. I enrolled in Masters and learned{" "}
        <span className="font-medium">distributed systems</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium dark:text-sky-400">
          React, Next.js, Typescript, Tailwind, Zod, Zustand, Prisma and MongoDB
        </span>
        . I am also familiar with{" "}
        <span className="dark:text-sky-400">Figma, GraphQL and Docker</span>. I
        am always looking to learn new technologies. I am currently looking for
        a <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        watching movies, and listening to music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">blogging and content creation</span>.
      </p>
      <p>
        {" "}
        Click here to visit{" "}
        <a
          className="underline italic"
          href="https://yashdevsimple.hashnode.dev/"
          target="_blank"
        >
          My Blog
        </a>
        .
      </p>
    </motion.section>
  );
};

export default About;
