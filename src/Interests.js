import React from "react"
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDiscord , faGithub ,faFacebook,faLinkedin} from '@fortawesome/free-brands-svg-icons';
export default function Interests(){
    return(
        <div>
            <div className="inte">
                <h2>Interests</h2>
                <p className="par">I personally love creating art. Doing it since I was very little. I am a huge fan of animes ! yeshh A weeb ! 
                And I also read books, fanfics ! And the rest of the time I just mindlessly scroll through social media duh!
                </p>
            </div>
            <div className="footer">
            <FontAwesomeIcon className="icon" icon={faFacebook} size="2x" />
            <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x"/>
            <FontAwesomeIcon className="icon" icon={faDiscord} size="2x"/>
            <FontAwesomeIcon className="icon" icon={faGithub} size="2x"/>
            </div>
        </div>
        
    )
}