import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from './ExperienceStyle.module.css'; // Import the CSS module

const experiences = [
  {
    date: 'June 2024 - Present',
    title: 'AI Researcher',
    company_name: 'RemitBee',
    points: [
      'Developed and maintained web applications using React and Node.js.',
      'Led a team of developers in agile sprints.',
    ],
    icon: 'https://media.licdn.com/dms/image/D560BAQHXF0aj61L95g/company-logo_200_200/0/1719943358140/remitbee_logo?e=1730332800&v=beta&t=S1t6t6j7qtd3wrqFxjd6FPsLJ8Jbvk0KAJ6wgH9fJEA',
    iconBg: '#ff5722',
  },
  {
    date: 'Jan 2024 - June 2024',
    title: 'Data Engineer',
    company_name: 'Countable',
    points: [
      'Worked on backend services and APIs using Python and Django.',
      'Implemented new features based on client requirements.',
    ],
    icon: 'https://media.licdn.com/dms/image/D560BAQE4t8hUWeRnnA/company-logo_200_200/0/1697180219839/countable_io_logo?e=1730332800&v=beta&t=BFLGFVsUjAs0o3tsp3UGwmGCWrTx4OMgpgl0Kc9LMAc',
    iconBg: '#3f51b5',
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentClassName={styles.verticalTimelineElement}
      contentArrowClassName={styles.verticalTimelineElementArrow}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
      }}
      icon={
        <div className={styles.iconWrapper}>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className={styles.icon}
          />
        </div>
      }
    >
      <div>
        <h3 className={styles.title}>{experience.title}</h3>
        <p className={styles.companyName}>
          {experience.company_name}
        </p>
      </div>

      <ul className={styles.pointsList}>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={styles.point}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section id="Experience" className={styles.experienceContainer}>
      <div className={styles.title}>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </div>

      <div className={styles.verticalTimelineWrapper}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
