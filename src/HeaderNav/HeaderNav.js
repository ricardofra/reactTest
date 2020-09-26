import React, { Component } from 'react';

import "./HeaderNav.css";

import logo from '../assets/logo.svg';
const arrowIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAIGNIUk0AAHomAACAhAAA%2BgAAAIDo%0AAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAALEwAACxMBAJqcGAAA%0AAMlJREFUWMPt1zsOwjAQhGEfCcRLCdyKGpGCCuWqITwOMBQUa0Ukdrw7EkIb9/8nJYUnAYF7ggMO%0A/B/Q4MIEGgBAywI%2BeQC4MgDJv3CwBwrzuUBxPg9Q5HMAVT4NKPMpQJ2fBgzyU4BJfhwwyo8BZvnv%0AgORLniSgy/8CQH9Fw4%2B851yZQjxRc%2B7kmKg4l74QD%2Bw4q0KIO7ac2RITG84uEqLHmjO8YmLFWXZC%0A3LDkLDshunlEyfDqsGBPxyN3/J648/3sfzgOODD3vAHfNQFeezFWMAAAAABJRU5ErkJggg%3D%3D%0A';

class HeaderNav extends Component {
    render() {
        return (            
            <header className="header">
                <img src={logo} className="header-logo" alt="logo" />
                <ul className="header-nav">
                    <li>
                        <a
                            className="header-nav-link"
                            href="/"
                            target=""
                            rel="noopener noreferrer">
                                <img className="arrowIcon" src={arrowIcon} alt="arrow" />
                                home
                        </a>
                    </li>  
                    <li>
                        <a
                            className="header-nav-link"
                            href="https://github.com/ricardofra/NavExercise"
                            target="_blank"
                            rel="noopener noreferrer">
                                GitHub repository
                        </a>
                    </li>
                    <li>
                        <a
                            className="header-nav-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer">
                            Learn React
                        </a>
                    </li>  
                </ul>  
            </header>            
        );
    }
}

export default HeaderNav;
