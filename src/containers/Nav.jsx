import {NavLink} from 'react-router-dom';
import {House, Settings} from 'lucide-react';
import {motion, AnimatePresence} from 'motion/react';
import {ChevronLeft, ChevronRight, PanelLeft, Plus, User} from 'lucide-react';

import {Logo} from '../assets/icons';
import {useStore} from '../store';

export default function Nav() {
    const sidebar = useStore(state => state.sidebar);
    const setSidebar = useStore(state => state.setSidebar);

    return (
        <nav className="flex items-start justify-between p-[25px]">
            <div className="flex gap-x-10">
                <div className="flex items-center gap-x-[10px]">
                    <Logo className="fill-white w-[40px] h-[40px]" />
                    <p className="text-white font-medium">Leg AI</p>
                </div>
                <AnimatePresence>
                    {!sidebar &&
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 1, ease: [0.2, 0.5, 0.2, 1.01]}}
                            className="absolute left-[200px]"
                        >
                            <div className="flex bg-background/[0.7] border-[1px] border-secondary rounded-[13px] p-[5px]">
                                <div>
                                    <button className="py-[10px] px-[15px] rounded-[13px] duration-500 hover:bg-secondary" onClick={() => setSidebar(true)}>
                                        <PanelLeft className="stroke-[#657085]" />
                                    </button>
                                    <button className="py-[10px] px-[15px] rounded-[13px] duration-500 hover:bg-secondary">
                                        <Plus className="stroke-[#657085]" />
                                    </button>
                                </div>
                                <div>
                                    <button className="py-[10px] px-[15px] rounded-[13px] duration-500 hover:bg-secondary">
                                        <ChevronLeft className="stroke-[#657085]" />
                                    </button>
                                    <button className="py-[10px] px-[15px] rounded-[13px] duration-500 hover:bg-secondary">
                                        <ChevronRight className="stroke-[#657085]" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
            <div className="flex gap-x-[10px]">
                <div className="bg-background rounded-full p-[5px]">
                    <NavLink to='/' className="block text-[#657085] text-[15px] py-[10px] px-[15px] rounded-full duration-500 hover:bg-[#303745]">
                        <House />
                    </NavLink>
                </div>
                <div className="flex bg-background rounded-full p-[5px]">
                    <NavLink to='/' className="block text-[#657085] text-[15px] py-[10px] px-[15px] rounded-full duration-500 hover:bg-[#303745]">Инфоблок</NavLink>
                    <NavLink to='/' className="block text-[#657085] text-[15px] py-[10px] px-[15px] rounded-full duration-500 hover:bg-[#303745]">LegAI Pro</NavLink>
                    <NavLink to='/' className="block text-[#657085] text-[15px] py-[10px] px-[15px] rounded-full duration-500 hover:bg-[#303745]">Помощь</NavLink>
                    <NavLink to='/' className="block text-[#657085] text-[15px] py-[10px] px-[15px] rounded-full duration-500 hover:bg-[#303745]">
                        <Settings />
                    </NavLink>
                </div>
            </div>
            <div className="bg-background rounded-full p-3">
                <User className="stroke-white fill-white" />
            </div>
        </nav>
    )
}