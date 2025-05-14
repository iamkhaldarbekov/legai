import {useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';

import {
    Plus,
    Attach,
    Lamp,
    Send
} from '../assets/icons';

export default function Home() {
    const [isOn, setIsOn] = useState(false);
    const [attach, setAttach] = useState(false);
    const [chat, setChat] = useState(false);
    const [loading, setLoading] = useState(false);
    const [thinking, setThinking] = useState(true);

    function activate() {
        setLoading(true);
        setTimeout(() => setThinking(false), 2000);
    }

    return (
        <main className="mb-10">
            <AnimatePresence>
                {loading ?
                    <motion.div
                        className="flex flex-col gap-y-[60px]"
                        initial={{y: 50, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.5}}
                    >
                        <div className="font-Montserrat bg-secondary rounded-full text-[18px] font-medium text-white py-[15px] px-[25px] w-fit ml-auto">
                            О чем гласит статья АК 47
                        </div>
                        <AnimatePresence>
                            {!thinking ?
                                <motion.div
                                    className="max-w-[80%] mb-[200px]"
                                    initial={{y: 50, opacity: 0}}
                                    animate={{y: 0, opacity: 1}}
                                    transition={{duration: 0.5}}
                                >
                                    <p className="font-Montserrat text-[20px] text-white font-semibold">Вот определение статьи АК 47</p>
                                    <hr className="border-secondary my-[15px]" />
                                    <div>
                                        <p className="font-Montserrat text-[18px] font-medium text-white">Статья 47 Кодекса об административной ответственности Республики Узбекистан касается невыполнения обязанностей по воспитанию и обучению детей. Она предусматривает:</p>
                                        <br />
                                        <p className="font-Montserrat text-[18px] font-medium text-white">1. Невыполнение родителями или их заменяющими лицами обязанностей по воспитанию и обучению несовершеннолетних детей, включая случаи, повлекшие совершение несовершеннолетним административного правонарушения, влечет наложение штрафа от одной до пяти базовых расчетных величин.</p>
                                        <br />
                                        <p className="font-Montserrat text-[18px] font-medium text-white">2. Те же правонарушения, совершенные повторно в течение года после применения административного взыскания, влекут наложение штрафа от пяти до десяти базовых расчетных величин.</p>
                                        <br />
                                        <p className="font-Montserrat text-[18px] font-medium text-white">3. Незаконное вовлечение своего ребенка в религиозное образование родителями или их заменяющими лицами влечет наложение штрафа в размере от пяти до десяти базовых расчетных величин.</p>
                                        <br />
                                        <p className="font-Montserrat text-[18px] font-medium text-white">4. Совершение правонарушения, предусмотренного частью третьей настоящей статьи, повторно в течение года после применения административного взыскания влечет наложение штрафа в размере от десяти до пятнадцати базовых расчетных величин или административный арест до пятнадцати суток.</p>
                                        <br />
                                        <p className="font-Montserrat text-[18px] font-medium text-white">5. Воспрепятствование родителями или их заменяющими лицами получению детьми обязательного общего среднего, среднего специального, профессионального образования влечет наложение штрафа от десяти до пятнадцати базовых расчетных величин.</p>
                                        <br />
                                        <p className="font-Montserrat text-[18px] font-medium text-white">6. Совершение правонарушения, предусмотренного частью пятой настоящей статьи, повторно в течение года после применения административного взыскания влечет наложение штрафа от пятнадцати до двадцати пяти базовых расчетных величин или административный арест до пятнадцати суток.</p>
                                        <br />
                                        <p className="font-Montserrat text-[18px] font-medium text-white">Если у вас есть дополнительные вопросы или требуется уточнение по данной статье, пожалуйста, дайте знать.</p>
                                    </div>
                                </motion.div>
                                :
                                <motion.p
                                    key="thinking"
                                    className="text-[#7E8BA5]"
                                    exit={{opacity: 0}}
                                >
                                    Думает...
                                </motion.p>
                            }
                        </AnimatePresence>
                    </motion.div>
                    :
                    <motion.div
                        key="welcome"
                        className="centered text-center font-light text-white"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}
                    >
                        <h1 className="text-[40px]">Legal <span className="font-bold text-transparent bg-gradient-to-bl from-[#294FAF] via-[#6DCBFA] to-[#294FAF] bg-clip-text">AI</span> приветствует вас.</h1>
                        <p className="text-[20px] text-transparent bg-gradient-to-b from-[#294FAF] to-[#6DCBFA] bg-clip-text">Задайте мне вопрос</p>
                    </motion.div>
                }
            </AnimatePresence>
            <motion.div
                className="fixed left-[50%] translate-x-[-50%] bg-background/[0.7] backdrop-blur-[40px] rounded-[32px] border-[1px] border-secondary shadow-[0px_4px_100px_rgba(0,0,0,0.45)] px-[10px] pb-[10px] pt-[20px]"
                initial={false}
                animate={loading ? {width: "1240px", bottom: "25px"} : {width: "925px", bottom: "100px"}}
                transition={{duration: 0.5}}
            >
                <input type="text" className="bg-transparent outline-none text-white font-light w-full px-[10px] placeholder:text-[#657085]" placeholder="Начните писать" />
                <div className="flex items-center justify-between mt-[17px]">
                    <div className="flex gap-x-[10px]">
                        <button
                            className="p-[15px] rounded-full bg-secondary flex items-center gap-x-2 overflow-hidden"
                            onMouseEnter={() => setChat(true)}
                            onMouseLeave={() => setChat(false)}
                        >
                            <Plus className={chat ? "fill-white" : "fill-[#657085]"} />
                            <AnimatePresence>
                                {chat &&
                                    <motion.p
                                        className="text-white text-[13px] text-nowrap"
                                        initial={{opacity: 0, width: 0}}
                                        animate={{opacity: 1, width: "auto"}}
                                        exit={{opacity: 0, width: 0}}
                                    >
                                        Новый чат
                                    </motion.p>
                                }
                            </AnimatePresence>
                        </button>
                        <button
                            className="p-[15px] rounded-full bg-secondary flex items-center gap-x-2 overflow-hidden"
                            onMouseEnter={() => setAttach(true)}
                            onMouseLeave={() => setAttach(false)}
                        >
                            <Attach className={attach ? "fill-white" : "fill-[#657085]"} />
                            <AnimatePresence>
                                {attach &&
                                    <motion.p
                                        className="text-white text-[13px]"
                                        initial={{opacity: 0, width: 0}}
                                        animate={{opacity: 1, width: "auto"}}
                                        exit={{opacity: 0, width: 0}}
                                    >
                                        Прикрепить
                                    </motion.p>
                                }
                            </AnimatePresence>
                        </button>
                    </div>
                    <div className="flex gap-x-[10px]">
                        <motion.button
                            layout
                            className="py-[17px] px-[25px] rounded-full bg-secondary flex items-center gap-x-2 overflow-hidden"
                            onClick={() => setIsOn(!isOn)}
                            style={isOn ? {border: "1px solid #BACAE8"} : {border: "none"}}
                        >
                            <Lamp className={isOn ? 'fill-[#BACAE8]': 'fill-[#657085]'} />
                            <AnimatePresence>
                                {isOn &&
                                    <motion.p
                                        className="text-[13px] text-[#BACAE8]"
                                        initial={{opacity: 0, width: 0}}
                                        animate={{opacity: 1, width: "auto"}}
                                        exit={{opacity: 0, width: 0}}
                                    >
                                        Пояснение
                                    </motion.p>
                                }
                            </AnimatePresence>
                        </motion.button>
                        <button className="py-[17px] px-[25px] rounded-full bg-secondary" onClick={() => activate()}>
                            <Send className="fill-[#657085]" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </main>
    )
}