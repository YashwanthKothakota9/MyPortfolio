import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

import stackOverflowImg from '@/public/stackoverflow-clone.png';
import priceListerImg from '@/public/price-lister.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Post Graduation - Computer Science',
    location: 'BITS Pilani, Hyderabad Campus, India',
    description:
      'I graduated after 2 years of studying. My most favorite subjects are Data Structures and Algorithms, Blockchain, Operating Systems and  Database Management systems.',
    icon: React.createElement(LuGraduationCap),
    date: '2021 - 2023',
    cgpa: '9.16/10',
  },
  {
    title: 'Internship - Software Developer',
    location: 'Western Digital, Bangalore, India',
    description:
      "I worked as a Software Developer Intern for 6 months. I worked on a project called 'Plot and Report Generation Tool For Logs' which is used to generate plots and reports from the 100s of GBs of log files.This application is developed using Python for cpu intensive part using parallel execution with ReactJs in frontend which lists the task which are running and notify the users through email once parsing is completed. This reduced the QA team's time from 18 days to 30 minutes to parse and produce plots,reports out of 500GB of files data.",
    icon: React.createElement(CgWorkAlt),
    date: '2023 Jan - 2023 June',
    cgpa: '',
  },
] as const;

export const projectsData = [
  {
    title: 'StackOverflow Clone',
    description:
      'A public web app for asking questions and getting answers. It is a clone of StackOverflow with additional features like AI access with purchase of credits through stripe.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind Css',
      'Zod',
      'Prisma',
      'MongoDB',
      'Zustand',
    ],
    imageUrl: stackOverflowImg,
    deploy: 'https://stack-overflow-clone-alpha-pink.vercel.app/',
  },
  {
    title: 'Price Lister',
    description:
      'A cron job web scraper for your favorite amazon products to notify you through email when the price is low for your favorite product',
    tags: [
      'React',
      'Next.js',
      'Tailwind Css',
      'MongoDB',
      'Brightdata',
      'Cheerio',
      'Nodemailer',
      'Cronjob',
    ],
    imageUrl: priceListerImg,
    deploy: 'https://price-lister.vercel.app/',
  },
] as const;

export const skillsData = [
  'Python',
  'JavaScript',
  'TypeScript',
  'Tailwind Css',
  'React JS',
  'Next Js',
  'Git',
  'GitHub',
  'Prisma',
  'MongoDB',
  'Pandas',
  'Docker',
] as const;
