import {motion} from 'motion/react';
import {clsx} from 'clsx';

export default function Button({children, className}) {
    return (
        <motion.button
            className={clsx(className, "font-light py-[20px] px-[20px] rounded-[24px] bg-secondary text-white text-[18px] mt-[20px]")}
            whileHover={{backgroundColor: "#657085"}}
            whileTap={{paddingTop: "15px", paddingBottom: "15px", backgroundColor: "#292E3C"}}
        >
            {children}
        </motion.button>
    )
}