import {AnimatePresence, motion} from 'motion/react';
import {ChevronLeft, ChevronRight, PanelLeft, Plus} from 'lucide-react';

import {useStore} from '../store';

export default function Sidebar() {
    const sidebar = useStore(state => state.sidebar);
    const setSidebar = useStore(state => state.setSidebar);

    return (
        <AnimatePresence initial={false}>
            {sidebar &&
                <motion.div
                    key="nav"
                    initial={{left: -400}}
                    animate={{left: 25}}
                    exit={{left: -400}}
                    transition={{duration: 1, ease: [0.2, 0.5, 0.2, 1.01]}}
                    className="absolute"
                >
                    <div className="flex flex-col bg-background/[0.7] border-[1px] border-secondary rounded-[24px] p-[10px] max-h-[80vh] max-w-[290px] overflow-hidden">
                        <div className="flex justify-between border-[1px] border-secondary rounded-[13px] p-[5px]">
                            <div>
                                <button className="py-[10px] px-[15px] rounded-[13px] duration-500 hover:bg-secondary" onClick={() => setSidebar(false)}>
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
                        <input
                            type="text"
                            className="bg-transparent outline-none border-[1px] border-secondary rounded-[13px] font-light w-full px-5 py-4 mt-5 text-white placeholder:text-[#657085]"
                            placeholder="Поиск в чатах..."
                        />
                        <div className="flex flex-col gap-y-[20px] mt-[10px] overflow-auto scrollbar-hidden">
                            <div>
                                <p className="text-[#657085] text-[13px] mb-[10px]">Сегодня</p>
                                <div className="py-[15px] px-[5px] rounded-[13px] text-white duration-200 truncate hover:bg-secondary hover:px-[15px]">Новый чат</div>
                            </div>
                            <div>
                                <p className="text-[#657085] text-[13px] mb-[10px]">Вчера</p>
                                <div className="py-[15px] px-[5px] rounded-[13px] text-white duration-200 truncate hover:bg-secondary hover:px-[15px]">Статья АК 47</div>
                                <div className="py-[15px] px-[5px] rounded-[13px] text-white duration-200 truncate hover:bg-secondary hover:px-[15px]">Как можно оправдать убийство</div>
                            </div>
                            <div>
                                <p className="text-[#657085] text-[13px] mb-[10px]">Позавчера</p>
                                <div className="py-[15px] px-[5px] rounded-[13px] text-white duration-200 truncate hover:bg-secondary hover:px-[15px]">Статья АК 47</div>
                                <div className="py-[15px] px-[5px] rounded-[13px] text-white duration-200 truncate hover:bg-secondary hover:px-[15px]">Как можно оправдать убийство</div>
                            </div>
                            <div>
                                <p className="text-[#657085] text-[13px] mb-[10px]">3 апр</p>
                                <div className="py-[15px] px-[5px] rounded-[13px] text-white duration-200 truncate hover:bg-secondary hover:px-[15px]">Статья АК 47</div>
                                <div className="py-[15px] px-[5px] rounded-[13px] text-white duration-200 truncate hover:bg-secondary hover:px-[15px]">Как можно оправдать убийство</div>
                            </div>
                            <div>
                                <p className="text-[#657085] text-[13px] mb-[10px]">3 апр</p>
                                <div className="py-[15px] px-[5px] rounded-[13px] text-white duration-200 truncate hover:bg-secondary hover:px-[15px]">Статья АК 47</div>
                                <div className="py-[15px] px-[5px] rounded-[13px] text-white duration-200 truncate hover:bg-secondary hover:px-[15px]">Как можно оправдать убийство</div>
                            </div>
                            <div>
                                <p className="text-[#657085] text-[13px] mb-[10px]">3 апр</p>
                                <div className="py-[15px] px-[5px] rounded-[13px] text-white duration-200 truncate hover:bg-secondary hover:px-[15px]">Статья АК 47</div>
                                <div className="py-[15px] px-[5px] rounded-[13px] text-white duration-200 truncate hover:bg-secondary hover:px-[15px]">Как можно оправдать убийство</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}