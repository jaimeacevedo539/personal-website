import React from "react";
import{motion} from 'framer-motion';

function AnimatedTitle({text}){
    return(
        <motion.h1
        initial={{opacity:0, y:-50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5}}
        >
            {text}
        </motion.h1>
    )
}

export default AnimatedTitle;