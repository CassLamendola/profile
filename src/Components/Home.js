import React from 'react';
import { Transition } from 'semantic-ui-react';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setMounted(true);
    }

    render() { 
        const duration = 800;

        return (
            <div className='home'>
                <Transition.Group animation='fly right' duration={duration}>
                    {this.props.mounted && <div className='name first-name'>Cassandra</div>}
                </Transition.Group>
                <Transition.Group animation='fly left' duration={duration}>
                    {this.props.mounted && <div className='name-group'>
                        <div className='name last-name'>Lamendola</div>
                        <div className='title'>[SOFTWARE ENGINEER]</div>
                    </div>}
                </Transition.Group>
            </div>
        );
    }
}
 
export default Home;