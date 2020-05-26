import React  from 'react';
import { Transition } from 'semantic-ui-react';
import classnames from 'classnames';
// import portrait from '../images/portrait1.png';
// import cartoon from '../images/cartoon.jpg';
import github from '../images/github-logo.svg';
import linkedin from '../images/linkedin.svg';
import email from '../images/mail.svg';
import twitter from '../images/twitter.svg';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight1: false,
            highlight2: false,
            highlight3: false,
            highlight4: false,
            highlight5: false,
        }
    }

    componentDidMount() {
        this.props.setMounted(true);
        setTimeout(() => {
            this.setState({highlight1: true})
        }, 400);
        setTimeout(() => {
            this.setState({highlight2: true})
        }, 600);
        setTimeout(() => {
            this.setState({highlight3: true})
        }, 800);
        setTimeout(() => {
            this.setState({highlight4: true})
        }, 1000);
        setTimeout(() => {
            this.setState({highlight5: true})
        }, 1000);
    }

    render() {
        const duration = 800;

        return (
            <Transition.Group animation='fly left' duration={duration}>
                {this.props.mounted && <div>
                    <div className='about-me'>
                        {/* <div className='portrait-wrapper'>
                            <img src={cartoon} alt='portrait of Cassandra Lamendola' className='portrait'/>
                            <div className='circle circle1'></div>
                            <div className='circle circle2'></div>
                            <div className='circle circle3'></div>
                        </div> */}
                        <p className='about-section'>
                            {"Hi. I'm "}
                            <span className='about-highlight'>
                                <span className={classnames('highlight1-background', 'highlight-background', this.state.highlight1 && 'active')}>
                                </span>{' Cassandra,'}
                            </span>{'a software developer with a background in education.'}
                        </p>
                        <p className='about-section'>
                            {"I'm passionate about creating"}
                            <span className='about-highlight'>
                                <span className={classnames('highlight2-background', 'highlight-background', this.state.highlight2 && 'active')}>
                                </span>{' beautiful'}
                            </span> and
                            <span className='about-highlight'>
                                <span className={classnames('highlight3-background', 'highlight-background', this.state.highlight3 && 'active')}>
                                </span>{' intuitive'}
                            </span>{' web applications.'}
                        </p>
                        <p className='about-section'>
                            {"I've been building software professionally since November"}
                            <span className='about-highlight'>
                                <span className={classnames('highlight4-background', 'highlight-background', this.state.highlight4 && 'active')}>
                                </span>{' 2018.'}
                            </span>
                        </p>
                        <p className='about-section'>
                            {'Want to work together? '}
                            <span className='about-highlight'>
                                <span className={classnames('highlight5-background', 'highlight-background', this.state.highlight5 && 'active')}>
                                </span>{'contact me'}
                            </span>
                            {' at cass.lamendola@gmail.com'}
                        </p>
                        <div className='contact-section'>
                            <a className='social-link' target='_blank' href='https://github.com/casslamendola' rel="noopener noreferrer">
                                <img src={github} alt='' className='social-icon'/>
                            </a>
                            <a className='social-link' target='_blank' href='https://www.linkedin.com/in/cass-lamendola/' rel="noopener noreferrer">
                                <img src={linkedin} alt='' className='social-icon'/>
                            </a>
                            <a className='social-link' target='_blank' href='mailto:cass.lamendola@gmail.com' rel="noopener noreferrer">
                                <img src={email} alt='' className='social-icon'/>
                            </a>
                            <a className='social-link' target='_blank' href='https://twitter.com/CassLamendola' rel="noopener noreferrer">
                                <img src={twitter} alt='' className='social-icon'/>
                            </a>
                        </div>
                    </div>
                </div>}
            </Transition.Group>
        );
    }
}

export default About;