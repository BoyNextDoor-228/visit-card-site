import React from 'react'
import touch from '../images/touch.png'
import musicants from '../images/musicants.png'
import { tVariants } from '../tVariants'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {

    return (
        <div className="row w-100 h-75 m-0  row">
                    <div className="col-5 h-100">
                    <div className="text-center ">
                ​    <picture>
                       <motion.img 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1, rotate: 360 }} 
                            transition={{ delay: 0.5 }} 
                            src={musicants} 
                            className="img-fluid img-thumbnail mt-5" 
                            alt="img1"/>
                    </picture>
                </div>
                    </div>
                    <div className="col-7 h-100 justify-content-center">
                        <div className="namediv w-100 h-20 mt-5 pt-4 d-block">
                            <motion.span 
                                initial={'namesInitial'} 
                                animate={'namesAnimate'} 
                                transition={{ delay: 0.5 }} 
                                variants={tVariants}
                                className="fw-lighter namesClass">
                                    ПАВЕЛ И АНДРЕЙ
                            </motion.span>
                        </div>
                        <div className="d-block mt-4 shortdesc w-75">
                            <motion.p 
                            className="text-light fs-5"
                            initial={'frstTextInitial'} 
                            animate={'frstTextAnimate'} 
                            transition={{ delay: 0.5 }} 
                            variants={tVariants}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </motion.p>
                            <motion.p 
                                className="text-light fst-italic fw-light"
                                initial={'scndTextInitial'} 
                                animate={'scndTextAnimate'} 
                                transition={{ delay: 0.5 }} 
                                variants={tVariants}
                                >
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </motion.p>
                        </div>
                        <motion.div 
                            initial={{ opacity: 0, y: +20 }}    
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 2 }}>
                                <Link 
                                    to="/contacts"
                                    className="touch-btn mt-4">
                                        <img 
                                            src={touch}
                                            height="20px" 
                                            width="15px" 
                                            alt="img1"/>&nbsp;
                                        СВЯЗЬ
                                </Link>
                        </motion.div>
                    </div>
                </div>
    )
}

export default Home