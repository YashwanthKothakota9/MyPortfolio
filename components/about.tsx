'use client';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

const About = () => {
  const { ref } = useSectionInView('About');

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
        After my undergraduation in{' '}
        <span className="font-medium">Computer Science</span>, I decided to
        pursue my passion for programming and want to go deep into core
        concepts. I enrolled in Masters and learned{' '}
        <span className="font-medium">
          Blockchain & basics of Distributed systems
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My interest
        towards Blockchain help me to learn core concepts of it and also how
        cryptocurrencies work, DApps, Web3 etc. I am currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        I also enjoy{' '}
        <span className="font-medium">learning new things very fast</span>. I am
        currently learning about{' '}
        <span className="font-medium">blogging and content creation</span>.
      </p>
      <p>
        {' '}
        Click here to visit{' '}
        <a
          className="underline italic"
          href="https://yashdevsimple.hashnode.dev/"
          target="_blank"
        >
          My First Blog
        </a>
        .
      </p>
    </motion.section>
  );
};

export default About;
