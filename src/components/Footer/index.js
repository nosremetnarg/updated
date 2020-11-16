import React from 'react';
import githubLogo from "../../assets/Logos/github-logo-white.png"


function Footer() {
    return (
        <footer>
            <a className="footerLink" href="https://github.com/nosremetnarg">
                <img src={githubLogo} alt="githubprofile" style={{ width: "20%" }}/>
            </a>
            {/* <a className="footerLink" href="https://www.instagram.com/nosremetnarg/">
                <img src={instagramLogo} alt="githubprofile" style={{ width: "13%" }}/>
            </a>
            <a className="footerLink" href="https://www.twitter.com/nosremetnarg/">
                <img src={twitterLogo} alt="githubprofile" style={{ width: "20%" }}/>
            </a> */}
        </footer>
    )
}

export default Footer;