'use client';
import { experiencesData } from '@/lib/data';
import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

const Experience = () => {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();

  return (
    <section id="experience" className="scroll-mt-28 mb:28 sm:mb-40" ref={ref}>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === 'light' ? '#ccfbf1' : 'rgb(207 250 254 / 0.1)',
                boxShadow: 'none',
                border: '1px solid rgba(0,0,0,0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
                color: theme === 'light' ? 'black' : '#f0f9ff',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255,255,255,0.5)',
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: theme === 'light' ? 'white' : '#1e293b',
                fontSize: '1.5rem',
                color: theme === 'light' ? '#042f2e' : '#e0f2fe',
              }}
              visible={true}
            >
              <h3 className="font-semibold text-lg capitalize">
                {experience.title}
              </h3>
              <p className="font-normal italic !mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-sky-400/75">
                {experience.description}
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-sky-400/75">
                {experience.cgpa}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
