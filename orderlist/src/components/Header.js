import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div >
                {/* <div className="navbar-fixed"></div> */}
                <nav className='teal darken-1 '>
                    <div className="container black-text">
                        <div className="nav-wrapper">
                            <a href="/" className="brand-logo"><i class="large material-icons">arrow_back</i>{this.props.title}</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="collapsible.html">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
