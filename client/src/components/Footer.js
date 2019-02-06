import React, { Component } from 'react';
// import "./Footer.css";
import { FaEnvelopeO, FaLinkedinSquare, FaGithub } from "react-icons/lib/fa";
// import { IoHeart } from "react-icons/lib/io";

class Footer extends Component {
    render() {
        return (
            <div id="entirefooter">
                <div id="footer">
                    <a href="mailto:tagra.bharti@gmail.com" className="icon" title={"E-mail me"}><FaEnvelopeO /></a>&nbsp;
                <a href="https://www.linkedin.com/in/bharti-tagra-b9018438 " target="_blank" rel="noopener noreferrer" className="icon" title={"Find me on LinkedIn"}><FaLinkedinSquare /></a>&nbsp;
                <a href="https://github.com/Btagra" target="_blank" rel="noopener noreferrer" className="icon" title={"Find me on GitHub"}><FaGithub /></a>
                </div>
                {/* <div id="copyright">
                    <p className="heart">Made with<span className="heart">&nbsp;<IoHeart /></span> and React</p>
                    <p className="copyright">©2019 Bharti</p>
                </div> */}
            </div>
        );
    };
};

export default Footer;