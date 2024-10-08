import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { ServiceCard } from "./ServiceCard";
import { FaJava } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Dedicated and versatile Full-Stack Multiplatform Software Developer with
        robust skills in systems development and support, honed through both
        academic and professional experiences. My passion for technology drives
        me to continuously learn and apply new skills, allowing me to develop
        innovative and efficient software solutions. I thrive in collaborative
        environments and excel in problem-solving and analytical thinking.
        <br />
        I have solid knowledge in a variety of programming languages, including:
        <br />
            <FaJava stroke="6" /> Java: Used to develop robust and secure applications,
        especially in enterprise environments. <br />
        
            - JavaScript/TypeScript: Essential for web development, both in
            frontend with frameworks like React, and in backend with Node.js.
            - C#: Ideal for desktop applications and web services, with
            certified experience by Microsoft.
            - C++: Used in the development of high-performance software and
            operating systems.
            - HTML/CSS: Essential for creating attractive and responsive user
            interfaces.
            - SQL (MySQL, PostgreSQL): Management of relational databases,
            ensuring integrity and efficiency in data storage.
            - NoSQL (MongoDB): Flexibility to handle unstructured data and
            scalability in modern applications.
        <br />
        Additionally, I have experience in various technologies and frameworks:
        <br />
        <ul>
          <li>
            - Node.js: Development of efficient and scalable backend
            applications.
          </li>
          <li>- React: Creation of dynamic and modern user interfaces.</li>
          <li>
            - ASP.NET: Development of robust web applications with the .NET
            framework.
          </li>
          <li>- Flutter: Development of cross-platform mobile applications.</li>
          <li>
            - Scrum: Agile methodology for project management and software
            development.
          </li>
        </ul>
        <br />
        My commitment to continuous learning and my ability to quickly adapt to
        new technologies enable me to face and overcome software development
        challenges. Connect with me to explore how we can collaborate and create
        impactful software solutions together.
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
