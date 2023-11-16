import React, { Component } from 'react';
import { Layout, Content, Grid } from 'react-mdl';

class About extends Component {
    render() {
        return (
            <div>
                <div style={{ height: '300px', position: 'relative' }}>
                    <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover' }}>

                        <div style={{ width: '100%', margin: '35px' }} class="card-body text-center">
                            <img src="https://i.imgur.com/CdlKyhF.jpg" alt="Cinque Terre" class="rounded-circle" width="200" height="200" position="fixed" />
                            <h5 class="card-title mt-2 mb-1" style={{ color: 'white' }}>Futsum Nemariam</h5> <span style={{ color: 'white' }} class="fs-2 mb-3 font-weight-bold">Software Engineer</span>

                            <div class="container mt-5 d-flex justify-content-center ">
                                <div class="maincard p-3">
                                    <div class="thecard">


                                    </div>
                                </div>
                            </div>

                        </div>
                        <Content />

                    </Layout>
                </div>
                <div style={{ marginLeft: '2em' }}>
                    <h2 style={{ fontSize: '2em', textAlign: 'center' }}>About Me.</h2>

                    <ul class="list-inline" style={{ fontSize: '2em', textAlign: 'center', color: 'blue' }}>
                        <li class="list-inline-item"><a href="https://www.facebook.com/futsum.melake"><i class="fa fa-facebook fa-2x facebook"></i></a></li>
                        <li class="list-inline-item"><a href="https://twitter.com/Futsum62355355"><i class="fa fa-twitter fa-2x twitter"></i></a></li>
                        <li class="list-inline-item"><a href="https://www.linkedin.com/in/futsumne2020/"><i class="fa fa-linkedin fa-2x linkedin"></i></a></li>
                        <li class="list-inline-item"><a href="https://github.com/Futsum1"><i class="fa fa-github fa-2x github"></i></a></li>
                    </ul>
                    <p style={{ fontSize: '1.5em', textAlign: 'center' }}> </p>
                    <hr />

                    <Grid className="demo-grid-1">
                        <p style={{ fontSize: '1.1em', textAlign: 'center', fontStyle: "italic" }} col={14}>My name is Futsum Nemariam.
                            <br />
                            I'm an Experienced Software Engineer, deeply immersed in the realms of cloud computing and DevOps principles. Known for my meticulous approach, I'm passionate about the intricacies of software and cloud engineering. I thrive on tackling coding challenges, unraveling problems, and immersing myself in creative projects. As an effective team player with strong communication skills, I believe in the power of collaboration to elevate our work. Let's connect and explore how we can shape the future through technology!
                            {/* I am a Respectful self-motivator positive about every aspect of life. I'd really describe myself as a person with a versatile skill-set, I’m recently a graduate of a software engineer who is eager to apply the knowledge and skills I’ve learned in a work environment I’d like to build a long term career that lets me focus on professional growth. I am passionate about  Full-Stack web development. */}
                        </p>

                    </Grid>


                    <Content />
                </div>
            </div>

        )
    }
}

export default About;