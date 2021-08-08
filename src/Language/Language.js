import React from 'react'
import './Language.css';

const Language = () => {
    return (<div className="nav-wrapper">
        <div className="sl-nav">
            Sprache:
            <ul>
                <li><b>Deutsch</b> <i className="fa fa-angle-down" aria-hidden="true"></i>
                    <div className="triangle"></div>
                    <ul>
                        <li><i className="sl-flag flag-de"><div id="germany"></div></i> <span className="active">Deutsch</span></li>
                        <li><i className="sl-flag flag-usa"><div id="germany"></div></i> <span>Englisch</span></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>)
}

export default Language;
