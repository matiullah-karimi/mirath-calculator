import React from 'react'
import './Language.css';

const Language = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');

    return (<div className="nav-wrapper">
        <div className="sl-nav">
            <ul>
                <li>
                    <img src="/global.svg" alt="language" width="20"/>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                    <div className="triangle"></div>
                    <ul>
                        <li>
                            <a className={lang === 'fa' ? 'active' : ''} href="/?lang=fa">
                                دری
                            </a>
                        </li>
                        <li>
                            <a className={lang === 'ps' ? 'active' : ''} href="/?lang=ps">
                                پشتو
                            </a>
                        </li>
                        <li>
                            <a className={lang === 'ar' ? 'active' : ''} href="/?lang=ar">
                                عربی
                            </a>
                        </li>
                        <li>
                            <a className={lang === 'en' ? 'active' : ''} href="/?lang=en">
                                English
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>)
}

export default Language;
