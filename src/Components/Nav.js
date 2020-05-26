import React from 'react';
import classnames from 'classnames';

const Nav = (props) => {
    const duration = 500;

    const handleClick = (section) => {
        if (props.selected === section) {
            return;
        }
        props.setMounted(false);
        props.setTransitioning(true)
        setTimeout(() => {
            props.setSelected(section);
            props.setTransitioning(false);
        }, duration);
    }

    return (
        <div className='nav'>
            <span
                className={classnames('nav-item', 'nav-home', props.selected === 'home' && 'active', props.transitioning && 'fade-out')}
                onClick={() => handleClick('home')}>
                    <div className='nav-background'></div>
                    <span className='nav-content'>Home</span>
            </span>
            <span
                className={classnames('nav-item', 'nav-about', props.selected === 'about' && 'active', props.transitioning && 'fade-out')}
                onClick={() => handleClick('about')}>
                    <div className='nav-background'></div>
                    <span className='nav-content'>About</span>
            </span>
            <span
                className={classnames('nav-item', 'nav-projects', props.selected === 'projects' && 'active', props.transitioning && 'fade-out')}
                onClick={() => handleClick('projects')}>
                    <div className='nav-background'></div>
                    <span className='nav-content'>Projects</span>
            </span>
            <span
                className={classnames('nav-item', 'nav-references', props.selected === 'references' && 'active', props.transitioning && 'fade-out')}
                onClick={() => handleClick('references')}>
                    <div className='nav-background'></div>
                    <span className='nav-content'>References</span>
            </span>
        </div>
    );
}

export default Nav;