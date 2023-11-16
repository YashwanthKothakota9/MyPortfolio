"use client";

import { projectsData } from "@/lib/data";
import { use, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  deploy,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <Link
      href={deploy}
      target="_blank"
      className="block mb-3 sm:mb-8 last:mb-0 group"
    >
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className=" "
      >
        <section className=" bg-teal-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[21rem] rounded-lg  hover:bg-teal-200 transition sm:group-even:pl-8 dark:bg-cyan-100/10 dark:hover:bg-cyan-100/20">
          <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] sm:group-even:pr-0">
            <h3 className="text-2xl font-semibold dark:text-sky-400">
              {title}
            </h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-sky-100/70">
              {description}
            </p>
            <ul className="flex flex-row flex-wrap mt-4 gap-1 sm:my-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-2 py-1 text-[0.7rem] text-xs uppercase tracking-wider text-white rounded-xl dark:text-sky-100/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={imageUrl}
            alt="Project I Worked On"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.05] transition group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:-rotate-2"
          />
        </section>
      </motion.div>
    </Link>
  );
};

export default Project;
