import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
      return(
          <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}> 
               <div style={{width: '100%', margin: '35px'}} class="card-body text-center"> 
               <img src="https://i.imgur.com/CdlKyhF.jpg" alt="" class="rounded-circle"  width="150" height="185" />
                    <h4 class="card-title mt-2 mb-1" style={{color: 'white'}}>Futsum Nemariam</h4> 
                    <span class="fs-2 mb-3 font-weight-bold" style={{color: 'white', fontSize: 'px'}}>Software Engineer</span>
                    <h5 class="mb-3 mt-3" style={{color: 'white', fontSize: '25px'}}>"By doing what you love, You inspire and awaken the hearts of others!"</h5>
                </div>
                
                <div className="banner-text">
                 <h1> Full-Stack Web Developer </h1>
                
                <hr/>
                <p> HTML/CSS | Boostrap | JavaScript | React | Node.Js | Express | MongoDb/Mongoose </p>
               
               {/* LinkedIn */}
               <div className="social-links">

                <a href="https://www.linkedin.com/in/futsumne2020/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a> 

                {/* Github */}

                <a href="https://github.com/Futsum1" rel="noopener noreferrer" target="_blank">
                   <i className="fa fa-github-square" aria-hidden="true" />
                </a> 

                {/* Repl.it */}
                 
                <a href="https://repl.it/@Futsum" rel="noopener noreferrer" target="_blank">
                 <i className="fa fa-code" aria-hidden="true" />
                </a>

                {/* Facebook */}
                 
                <a href="https://www.facebook.com/futsum.melake" rel="noopener noreferrer" target="_blank">
                 <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>

                {/* Youtube */}
                
                <a href="https://twitter.com/Futsum62355355" rel="noopener noreferrer" target="_blank">
                 <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
               </div>
               </div>
            </Cell>
          </Grid>
          </div>
      )
    }
   }  

   export default Landing;