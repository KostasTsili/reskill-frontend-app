/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faLinkedin,faYoutube,faInstagram} from "@fortawesome/free-brands-svg-icons";

export default function FaIcons(){

    const iconStyles = `mx-1 w-6 h-6`;


    return (
        <div>
        <FontAwesomeIcon className={iconStyles} icon={faFacebook} />
        <FontAwesomeIcon className={iconStyles} icon={faLinkedin} />
        <FontAwesomeIcon className={iconStyles} icon={faYoutube} />
        <FontAwesomeIcon className={iconStyles} icon={faInstagram} />
        </div>
    )
}