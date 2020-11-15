// import styled from "styled-components"
import home1 from "../images/home1.png"
import {About, Description, Image, Hide} from "../styles"

import {motion} from "framer-motion"
import { titleAnim, fade } from "../animation"
import Wave from "./Wave"
import styled from "styled-components"

const AboutSection = () => {


    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim} >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade} >Contact us for any photography or videography ideas that you have. We have professionals with amazing skills</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
            <img src={home1} alt="home1"/>
            </Image>
            <Wave />
        </About>
    )
}

// Styled Component


export default AboutSection