import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://i.imgur.com/CdlKyhF.jpg" class="rounded-circle" width="150" height="185"
                alt="unsplash"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '23m' }}>Futsum Nemariam</h2>
            <h4 style={{ color: 'grey' }}>Programmer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h6>Highly motivated and progress-focused software engineer.  I enjoy being challenged and engaging with coding to identify potential issues earlier in the development cycle and also attentive to the need for continuous process improvements. I am extremely interested in full-stack software engineering. I have always been motivated by creative projects, teamwork, and being able to learn new skills.</h6>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Adress.</h5>
            <p> Santa Rosa, California, 95403.</p>
            <h5>Phone.</h5>
            <p>(707) 571-9900</p>
            <h5>Email.</h5>
            <p>futsumnemariam2@gamil.com</p>
            <h5>Web.</h5>
            <p>https://myportoflio1.netlify.app/</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2021}
              endYear={2025}
              schoolName="Santa Rosa JC."
              schoolDescription="BA degree, in Computer Science (In progress) from SRJC."
            />

            <Education
              startYear={"Nov - 2022"}
              schoolName="Certified Cloud Practitioner."
              schoolDescription="AWS Re/Start Program."
            />

            <Education
              startYear={" Nov -2020"}
              schoolName="Certified Software Engineer Immersive."
              schoolDescription="General Assembly."
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>

            <Experience
              startYear={"08 - 2021"}
              endYear={"07 - 2020"}
              jobName="Front-End Developer, Bitwise Industries."
              jobDescription="• Developed user-friendly websites and apps using HTML, CSS, JavaScript, Node.js, jQuery, and React.js.
              • Experienced in both Waterfall and Agile methodologies throughout the Software Development Life Cycle
              (SDLC).
              • Applied Object-Oriented Programming concepts and implemented Object-Oriented JavaScript.
              • Prof iciently worked with various JavaScript MVC frameworks, including Node.js, React.js, and Express.js.
              • Skillfully applied popular React.js workflows, including Redux and Flux.
              • Utilized IDEs such as Visual Studio Code for application development.
              • Led the adoption of test-driven development, demonstrating proactive engagement and proficiency with
              Grunt/Gulp testing tools.
              • Demonstrated proficiency in working with databases, specifically MongoDB and SQL.
              • Proficient in version control tools like GIT and GitHub for source code version management.
              "
            />
            <Experience
              startYear={"07- 2020"}
              endYear={"07 - 2021"}
              jobName="AWS Cloud DevOps, Alpha Works."
              jobDescription="Configured and deployed AWS servers, increasing scalability by 50% and reducing response time by 40%.
            • Leveraged cloud computing technologies, resulting in a 50% reduction in infrastructure costs and
            improving resource utilization by 30%.
            • Developed a highly available and fault-tolerant cloud-based application with 99.99% uptime and less than
            1% downtime.
            • Designed a multi-region cloud architecture for improved availability and fault tolerance, ensuring
            uninterrupted service during region-specific outages.
            • Collaborated on AWS server configuration for a 50% scalability boost and 40% faster response time.
            • Implemented robust security policies and achieved 100% compliance with industry standards, successfully
            passing all security audits.
            ."
            />

            <Experience
              startYear={"01 - 2021"}
              endYear={"07 - 2020"}
              jobName="Software Engineer Intern, General Assembly."
              jobDescription="Contributed to real-world projects, collaborating on development, testing, maintenance, and debugging with senior developers.
              • Gained hands-on experience in the SDLC, including requirements gathering and GitHub management.
              • Collaborated on React.js components, forms, events, routers, and Redux, applying Agile methodologies
              for UI development.
              • Developed web applications, gaining exposure to HTML, CSS, JavaScript, and client-server technologies.
              • Implemented Security Protocols, enhancing data protection through encryption and authentication measures in web applications.."
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>

            <Skills
              skill="JavaScript"
              progress={80}
            />
            <Skills
              skill="HTML/CSS"
              progress={80}
            />
            <Skills
              skill="Node.Js"
              progress={50}
            />
            <Skills
              skill="React"
              progress={60}
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;