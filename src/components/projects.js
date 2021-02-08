import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/hiEFZSz.png) center / cover'}} ></CardTitle>
            <CardText>
            <h5 style={{textAlign: "center"}}>Connect-Four</h5>
            <hr />
            </CardText>
            <CardActions border>
            <a href="https://github.com/Futsum1/Connect-Four" rel="noopener noreferrer" target="_blank"><Button colored>GitHub</Button> </a>
            <a href="https://github.com/Futsum1/Connect-Four"><Button colored>Heroku</Button> </a>
            <a href="https://repl.it/@Futsum" rel="noopener noreferrer" target="_blank"><Button colored>Repl.it</Button> </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/Nw7RJKK.png) center / cover'}} ></CardTitle>
            <CardText>
            <h5 style={{textAlign: "center"}}>Restaurant</h5>
            <hr />
            </CardText>
            <CardActions border>
            <a href="https://github.com/Futsum1/Restaurant-"><Button colored>GitHub</Button> </a>
            <a href="https://boiling-ridge-39295.herokuapp.com/"><Button colored>Heroku</Button> </a>
            <a href="https://repl.it/@Futsum"><Button colored>Repl.it</Button> </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/vKXLFuY.png) center / cover'}}></CardTitle>
            <CardText>
            <h5 style={{textAlign: "center"}}>Car-Sell</h5>
            <hr />
            </CardText>
            <CardActions border>
            <a href="https://github.com/Futsum1/Car-Sell"><Button colored>GitHub</Button> </a>
            <a href="https://carrent1.herokuapp.com/"><Button colored>Heroku</Button> </a>
            <a href="https://repl.it/@Futsum"><Button colored>Repl.it</Button> </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/8vR6efO.png) center / cover'}} ></CardTitle>
            <CardText>
            <h5 style={{textAlign: "center"}}>Pet-Finder</h5>
            <hr />
            </CardText>
            <CardActions border>
            
            <a href="https://github.com/Futsum1/find-a-pet"><Button colored>GitHub</Button> </a>
            <a href="https://jfk-findapet.herokuapp.com/"><Button colored>Heroku</Button> </a>
            <a href="https://repl.it/@Futsum" rel="noopener noreferrer" target="_blank"><Button colored>Repl.it</Button> </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Portfolio</Tab>
          {/* <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab> */}
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}


   export default Projects;