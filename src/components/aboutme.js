import React, {Component} from 'react';
import { Layout, Content, Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
      return(
  <div>
  <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        

        <Content />

    </Layout>
    </div>
<div style={{ marginLeft: '2em'}}>
<h4 style={{  fontSize: '2em', textAlign: 'center'}}>Hello I.m a Full-Stack Software Engineer.</h4>
<h5 style={{  fontSize: '1em', textAlign: 'center'}}> I have to say something about myself. Sometimes it is hard to introduce yourself because you know yourself so well that you do not know where to start with. Let me give a try to see what kind of image you have about me through my self-description. I hope that my impression about myself and your impression about me are not so different. Here it goes.</h5>
<hr />            

<Grid className="demo-grid-1">
        <Cell col={4}>"I am a Respectful self-motivator positive about every aspect of life. I'd really describe myself as a person with a versatile skill-set, I’m recently a graduate of a software engineer who is eager to apply the knowledge and skills I’ve learned in a work environment I’d like to build a long term career that lets me focus on professional growth. I am passionate about  Full-Stack web development.
"</Cell>
        <Cell col={4}>"Full-Stack Software Developer from General Assembly proficient in software technologies, such as front end / back end Experience using multiple frameworks including React to code a variety of web applications for different projects.
My passion for full-stack useful and appealing software is what drives me to pursue a career at your company, and my eye for design and user-driven approach to development makes me an ideal candidate. If you think I’d be a good fit for your team, then please reach out to set up an interview at your earliest convenience.
"</Cell>
        <Cell col={4}>"Full-Stack Software Developer from General Assembly proficient in software technologies, such as front end / back end Experience using multiple frameworks including React to code a variety of web applications for different projects.
My passion for full-stack useful and appealing software is what drives me to pursue a career at your company, and my eye for design and user-driven approach to development makes me an ideal candidate. If you think I’d be a good fit for your team, then please reach out to set up an interview at your earliest convenience.
  </Cell>
</Grid>


{/* <Layout > */}
{/* <div style={{width: '100%', margin: 'auto'}}>
<h5 >Futsum Nemariam</h5> <span class="fs-2 mb-3 font-weight-bold">Software Engineer</span>
<p class="mb-3 mt-3">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"</p>
</div>   */}
    <Content />
{/* </Layout> */}
</div>
</div>

      )
    }
   }  

   export default About;