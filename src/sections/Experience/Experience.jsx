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
      'Developed & Deployed machine learning models to extract insights for business decision making, including fraud detection, and currency rate forecasting to increase efficiency.',
      'Constructed a Retrieval-Augmented Generation pipeline, integrating generative AI technologies to design an interactive agentic chatbot.',
      'Utilized Docker to create and manage containers for deploying ML and AI services on the company cloud.'
    ],
    icon: 'https://media.licdn.com/dms/image/D560BAQHXF0aj61L95g/company-logo_200_200/0/1719943358140/remitbee_logo?e=1730332800&v=beta&t=S1t6t6j7qtd3wrqFxjd6FPsLJ8Jbvk0KAJ6wgH9fJEA',
    iconBg: '#fff',
  },
  {
    date: 'Jan 2024 - June 2024',
    title: 'Data Engineer',
    company_name: 'Countable',
    points: [
      ' Built pipelines to aggregate, and transform Alberta government bill data onto the company database using Python, and generative AI integrating it with a Flask back-end to provide a scalable, secure API service.',
      'Utilized Python, BeautifulSoup4, Selenium, and Generative AI to implement a web scraping methods to automate data extraction and processing with high accuracy and quality, and deployed the solution on the company platform.'
    ],
    icon: 'https://media.licdn.com/dms/image/D560BAQE4t8hUWeRnnA/company-logo_200_200/0/1697180219839/countable_io_logo?e=1730332800&v=beta&t=BFLGFVsUjAs0o3tsp3UGwmGCWrTx4OMgpgl0Kc9LMAc',
    iconBg: '#fff',
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{'background-color': 'var(--background-color)',
                     'box-shadow': '0 4px 8px var(--background-color)'

      }}
    
      contentArrowStyle={{ 
        'border-right': '7px solid var(--background-color)',
      }}
      
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
      <h1 style={{ textAlign: "center", paddingBottom: "50px", paddingTop: "20px"}}>Work Expereince</h1>
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
