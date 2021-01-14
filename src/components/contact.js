import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
      return(
          <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
              <img 
              src="https://i.imgur.com/CdlKyhF.jpg"   width="190"
              alt="avatar"
              style={{height: '250px'}}
               />
              <h2>Futsum Nemariam</h2>
              <h4>Software Engineer</h4>
              <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>If you have any questions or comments, or if you would like to contact me for a quote, please use the form below and i will get back to you as soon as possible </p>

              </Cell>
              <Cell col={6}>            
              <h2>Contact Me</h2>
              <hr/>
               
            <div className="contact-list">
            <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (707) 571-9900
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                   futsumnemariam2@gmail.com
                  </ListItemContent>
                </ListItem>
               
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-facebook" aria-hidden="true"/>
                    &nbsp;&nbsp;&nbsp;Futsum Melake@yahoo.come
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-twitter" aria-hidden="true"/>
                    @Futsum
                  </ListItemContent>
                </ListItem>


              </List>
                </div>
              </Cell>
            </Grid>
          </div>
      )
    }
   }  

   export default Contact;