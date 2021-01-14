import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
      return(
        <div>
          <Grid>
            <Cell col={4}>
              <div style={{textAlign: 'center'}}> 
               <img 
               src="https://i.imgur.com/CdlKyhF.jpg" class="rounded-circle"  width="150" height="185" 
                alt="unsplash"
                style={{height: '200px'}} 
                />
              </div>
             
             <h2 style={{paddingTop: '23m'}}>Futsum Nemariam</h2>
             <h4 style={{color: 'grey'}}>Programmer</h4>
             <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
             <h6>Highly motivated and progress-focused software engineer.  I enjoy being challenged and engaging with coding to identify potential issues earlier in the development cycle and also attentive to the need for continuous process improvements. I am extremely interested in full-stack software engineering. I have always been motivated by creative projects, teamwork, and being able to learn new skills.</h6>
             <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
             <h5>Adress.</h5>
             <p> Santa Rosa, California, 95403.</p>
             <h5>Phone.</h5>
             <p>(707) 571-9900</p>
             <h5>Email.</h5>
             <p>futsumnemariam2@gamil.com</p>
             <h5>Web.</h5>
             <p>Website.com</p>
             <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            </Cell>
            <Cell className="resume-right-col" col={8}>
             <h2>Education</h2>
             <Education
                  startYear={2020}
                  endYear={2020}
                  schoolName="GENERAL ASSEMBLY."
                  schoolDescription="Bootcamp Graduate Software Engineer Immersive ."
              />  
 
            <Education
              startYear={20018}
              endYear={2020}
              schoolName="Santa Rosa Junior Collage."
              schoolDescription="Computer Technology."
             />
            
            <Education
              startYear={2006}
              endYear={2010}
              schoolName="KEIH BAHRI."
              schoolDescription="High School Graduate General Science."
             />

             <hr style={{borderTop: '3px solid #e22947'}} />

             <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="GENERAL ASSEMBLY."
              jobDescription="Software Engineer Immersive | 
              Three-month, 500-hour full-time and full-stack program conducted in a remote setting, providing experience with the latest front- and back-end programming languages, tools, and methodologies.
              Developed a portfolio of individual and collaborative in-class projects, including:"
              />
            <Experience
            startYear={2018}
            endYear={2020}
            jobName="Inclusion Service."
            jobDescription="Responded appropriately to the physical emotional and developmental needs of patients.
            Obtained information about clients' medical history, drug history, complaints, and allergies, assistant."
            />

             <Experience
              startYear={2017}
              endYear={2018}
              jobName="Memorial Hospital."
              jobDescription="Maintaining Implemented new technologies at medical centers enhances the overall safety of staff, patients, and visitors."
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              
              <Skills
                skill="JavaScript"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={70}
                  />
                  <Skills
                    skill="Node.Js"
                    progress={45}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />

          </Cell>    
          </Grid>
        </div>
      )
    }
   }  

   export default Resume;