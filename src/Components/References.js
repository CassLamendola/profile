import React, { Component } from 'react';
import { Transition } from 'semantic-ui-react';

class References extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ref1: false,
            ref2: false,
            ref3: false,
            ref4: false,
            ref5: false,
            ref6: false,
        }
    }

    componentDidMount() {
        this.props.setMounted(true);
        this.setState({ ref1: true })
        setTimeout(() => {
            this.setState({ ref2: true })
        }, 400)
        setTimeout(() => {
            this.setState({ ref3: true })
        }, 800)
        setTimeout(() => {
            this.setState({ ref4: true })
        }, 1200)
        setTimeout(() => {
            this.setState({ ref5: true })
        }, 1600)
        setTimeout(() => {
            this.setState({ ref6: true })
        }, 2000)
    }

    render() {
        const duration = 800;

        return (
            <div className='references'>
                <div className='reference ref1'>
                    <Transition.Group animation='fly right' duration={duration}>
                        {(this.state.ref1 && this.props.mounted) && <div>
                            <div className='ref-content'>
                                <p>{`Cass was primarily self-taught, though you would never know. 
                                    From wowing in the interview with knowledge of web security 
                                    through to picking up Typescript at rapid speed, 
                                    Cass is one of the best growth stories at LiveTiles. 
                                    Spinning up from her first professional role to being invaluable 
                                    in delivering new tiles and canvas capabilities in a short 
                                    order testify to her immense abilities.`}
                                </p>
                                <p className='ref-by'>
                                    <span className='about-highlight'>
                                        {` `}
                                        <span className='highlight1-background highlight-background active'></span>
                                            {`[Erik Ralston, Chief Architect]`}
                                        {` `}
                                    </span>
                                </p>
                            </div>
                        </div>}
                    </Transition.Group>
                </div>
                <div className='reference ref2'>
                    <Transition.Group animation='fly left' duration={duration}>
                        {(this.state.ref2 && this.props.mounted) && <div>
                            <div className='ref-content'>
                                <p>{`Cass is awesome. As a product designer, I knew I could always 
                                    count on Cass to infuse fresh insights and ideas to the designs I 
                                    presented to her for development and help catch things I missed. 
                                    Skilled in being able to take a step back from the code and see the 
                                    big picture of the product, she is one of the most well-rounded 
                                    up-and-coming developers I know. She was in tune with what was 
                                    best for the user, and the product as a whole, which is rare 
                                    to find in a developer.`}
                                </p>
                                <p className='ref-by'>
                                    <span className='about-highlight'>
                                        {` `}
                                        <span className='highlight2-background highlight-background active'></span>
                                            {`[Liz Cole, Product Designer]`}
                                        {` `}
                                    </span>
                                </p>
                                <span className='ref-by'></span>
                            </div>
                        </div>}
                    </Transition.Group>
                </div>
                <div className='reference ref3'>
                    <Transition.Group animation='fly right' duration={duration}>
                        {(this.state.ref3 && this.props.mounted) && <div>
                            <div className='ref-content'>
                                <p>{`It was an absolute pleasure working with Cassandra. 
                                    She was able to dig into our sprawling code base and 
                                    quickly make contributions to the front end. 
                                    She also took the time to mentor our intern, and is 
                                    all-around a positive and pleasant teammate. 
                                    She also particularly shone in our design sprints, 
                                    able to think about the end user and propose some wonderful feature ideas.`}
                                </p>
                                <p>{`It was a delight to work with Cassandra and I would wholeheartedly 
                                    recommend her to any organization looking for a front-end developer.`}
                                </p>
                                <p className='ref-by'>
                                    <span className='about-highlight'>
                                        {` `}
                                        <span className='highlight3-background highlight-background active'></span>
                                            {`[Miyuki Gimera, Senior Software Engineer]`}
                                        {` `}
                                    </span>
                                </p>
                            </div>
                        </div>}
                    </Transition.Group>
                </div>
                <div className='reference ref4'>
                    <Transition.Group animation='fly left' duration={duration}>
                        {(this.state.ref4 && this.props.mounted) && <div>
                            <div className='ref-content'>
                                <p>{`Cass is sharp and creative, multi-talented, a good problem solver, 
                                    and a quick learner. She has proven many front-end skills including 
                                    React, TypeScript, and CSS by delivering several successful features 
                                    at LiveTiles, both solo and working within teams. She is also crafty 
                                    and did some great interior design work in the office.`}
                                </p>
                                <p className='ref-by'>
                                    <span className='about-highlight'>
                                        {` `}
                                        <span className='highlight4-background highlight-background active'></span>
                                            {`[Trey Miller, Senior Software Engineer]`}
                                        {` `}
                                    </span>
                                </p>
                            </div>
                        </div>}
                    </Transition.Group>
                </div>
                <div className='reference ref5'>
                    <Transition.Group animation='fly right' duration={duration}>
                        {(this.state.ref5 && this.props.mounted) && <div>
                            <div className='ref-content'>
                                <p>{`When I needed to assign features to developers, 
                                    Cass was always ready to take on the challenge. 
                                    She exceeded expectations when she took on features, 
                                    able to take hard problems with tough requirements and produce 
                                    great additions to our products. I always appreciated 
                                    that Cass was ready to take on more. Whether she was the 
                                    sole developer on a feature, or part of a team, she produced 
                                    high-grade content and was a pleasure to work with. 
                                    I'm excited to see where Cass's next adventure takes her.`}
                                </p>
                                <p className='ref-by'>
                                    <span className='about-highlight'>
                                        {` `}
                                        <span className='highlight1-background highlight-background active'></span>
                                            {`[Joel Rieck, Product Manager]`}
                                        {` `}
                                    </span>
                                </p>
                            </div>
                        </div>}
                    </Transition.Group>
                </div>
                <div className='reference ref6'>
                    <Transition.Group animation='fly left' duration={duration}>
                        {(this.state.ref6 && this.props.mounted) && <div>
                            <div className='ref-content'>
                                <p>{`Cass was a good front-end developer who made invaluable 
                                    contributions to create new features, product enhancements, 
                                    and more. She was great to work with and a great addition 
                                    to the team.`}
                                </p>
                                <p className='ref-by'>
                                    <span className='about-highlight'>
                                        {` `}
                                        <span className='highlight2-background highlight-background active'></span>
                                            {`[Art McBain, Software Engineer]`}
                                        {` `}
                                    </span>
                                </p>
                            </div>
                        </div>}
                    </Transition.Group>
                </div>
            </div >
        );
    }
}

export default References;