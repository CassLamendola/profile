import React from 'react';
import { Transition } from 'semantic-ui-react';
import goodNews from '../images/Projects/good-news-thumbnail.png';
import trivial from '../images/Projects/trivial.png';
import myNotes from '../images/Projects/my-notes.PNG';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project1: false,
            project2: false,
            project3: false,
            project4: false,
        }
    }

    componentDidMount() {
        this.props.setMounted(true);
        this.setState({project1: true})
        setTimeout(() => {
            this.setState({project2: true})
        }, 200)
        setTimeout(() => {
            this.setState({project3: true})
        }, 400)
        setTimeout(() => {
            this.setState({project4: true})
        }, 600)
    }

    render() { 


        return ( 
            <div className='projects'>
                <div className='project'>
                    <Transition.Group animation='scale'>
                        {(this.state.project1 && this.props.mounted) && <div>
                            <div className='project-wrapper'>
                                <div className='project-thumbnail-wrapper'>
                                    <img src={goodNews} className='project-thumbnail' alt='thumbnail of good-news app'/>
                                    <div className='highlight1-background project-highlight'>Good News</div>
                                </div>
                                <div className='project-description'>
                                    <p className='project-paragraph'>
                                        {`Good News is a click-bait free news aggregator that I created as part of 
                                        a team for my capstone project at Lambda School. I worked on this project with 
                                        one back-end developer and 3 data scientists. 
                                        My role on the project was to create the user interface. 
                                        I designed and developed the entire front end, 
                                        and I helped write tests for the back-end`}
                                    </p>
                                    <p className='project-paragraph'>
                                        {`good-news.io is currently not active. 
                                        However, you can check out my code by visiting the GitHub repo or watch my demo video.`}
                                    </p>
                                    <p className='project-paragraph'>
                                        {`Tech used: React, Node.js, Express, MongoDB, Jest`}
                                    </p>
                                    <div className='project-links'>
                                        <a href='https://github.com/Lambda-School-Labs/CS10-GoodNews' 
                                            target='_blank' rel="noopener noreferrer" className='project-link'>
                                            Repo
                                        </a>
                                        /
                                        <a href='https://www.youtube.com/watch?v=GBknCSbSTlY' 
                                            target='_blank' rel="noopener noreferrer" className='project-link'>
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </Transition.Group>
                </div>
                <div className='project'>
                    <Transition.Group animation='scale'>
                        {(this.state.project2 && this.props.mounted) && <div>
                            <div className='project-wrapper'>
                                <div className='project-thumbnail-wrapper'>
                                    <img src={trivial} className='project-thumbnail' alt='thumbnail of trivia app'/>
                                    <div className='highlight2-background project-highlight'>Trivial</div>
                                </div>
                                <div className='project-description'>
                                    <p className='project-paragraph'>
                                        {`Trivial is a trivia app that uses the open trivia database. 
                                        I created Trivial as a fun, quick, weekend project while I was in school. 
                                        It was designed to be viewed and played on a mobile device.`}
                                    </p>
                                    <p className='project-paragraph'>
                                        {`Tech used: React`}
                                    </p>
                                    <div className='project-links'>
                                        <a href='https://github.com/CassLamendola/trivial' 
                                            target='_blank' rel="noopener noreferrer" className='project-link'>
                                            Repo
                                        </a>
                                        /
                                        <a href='https://trivial-app.com/' target='_blank' rel="noopener noreferrer"
                                            className='project-link'>
                                            Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </Transition.Group>
                </div>
                <div className='project'>
                    <Transition.Group animation='scale'>
                        {(this.state.project3 && this.props.mounted) && <div>
                            <div className='project-wrapper'>
                                <div className='project-thumbnail-wrapper'>
                                    <img src={myNotes} className='project-thumbnail' alt='thumbnail of notes app'/>
                                    <div className='highlight3-background project-highlight'>My Notes</div>
                                </div>
                                <div className='project-description'>
                                    <p className='project-paragraph'>
                                        {`I created My Notes as a student at Lambda School. 
                                        With My Notes, you can create, edit, and delete your notes, 
                                        add images and markdown in your notes, and 
                                        search through notes by keyword.`}
                                    </p>
                                    <p className='project-paragraph'>
                                        {`As per the project requirements, I followed a provided mock-up.`}
                                    </p>
                                    <p className='project-paragraph'>
                                        Tech used: React, Redux, Node.js, Express, MongoDB
                                    </p>
                                    <div className='project-links'>
                                        <a href='https://github.com/CassLamendola/front-end-project-week' 
                                            target='_blank' rel="noopener noreferrer" className='project-link'>
                                            Repo
                                        </a>
                                        /
                                        <a href='https://my-notes.app' target='_blank' 
                                            rel="noopener noreferrer" className='project-link'>
                                            Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </Transition.Group>
                </div>
            </div>
        );
    }
}
 
export default Projects;