import React from 'react'
import pablo from '../images/pablo.jpg'
import rodrigo from '../images/rodrigo.jpg'
import { motion } from 'framer-motion'
import { tVariants } from '../tVariants'

const Contacts = () => {

    return (
        <div className="row text-light text-center">
            <div className="col-6 ">
            ​    <picture>
                    <motion.img 
                        initial={ 'PabloImgVariantsInit' } 
                        animate={ 'PabloImgVariantsVisible' } 
                        variants={tVariants} 
                        transition={{ delay: 0.5 }} 
                        src={pablo} 
                        className="img-fluid img-thumbnail mt-1 "
                        style={tVariants.imgParams} 
                        alt="Пабло Тихий"/>
                </picture>
                <ul className="mt-2">
                    <motion.span
                        initial={ 'NameTagVariantsInit' } 
                        animate={ 'NameTagVariantsVisible' } 
                        variants={tVariants} 
                        transition={{ delay: 0.5 }} 
                        className="fs-3">
                            Павел Тихонов
                    </motion.span><br/>
                    <span>КОНТАКТНЫЕ ДАННЫЕ:</span>
                    <motion.li 
                        className="fw-light mt-3"
                        initial={ 'ContactsVariantsInit' } 
                        animate={ 'ContactsVariantsVisible' } 
                        variants={tVariants} 
                        transition={{ delay: 0.5 }}> 
                            VK: vk.com/id144269082
                    </motion.li>
                    <motion.li 
                        className="fw-light"
                        initial={ 'ContactsVariantsInit' } 
                        animate={ 'ContactsVariantsVisible' } 
                        variants={tVariants} 
                        transition={{ delay: 0.7 }}> 
                            INSTAGRAM: instagram.com/pavelitel_mangustinov
                    </motion.li>
                    <motion.li 
                        className="fw-light"
                        initial={ 'ContactsVariantsInit' } 
                        animate={ 'ContactsVariantsVisible' } 
                        variants={tVariants} 
                        transition={{ delay: 0.9 }}> 
                            E-MAIL: pablo@gmail.com
                    </motion.li>
                </ul>
            </div>
            <div className="col-6 ">
            ​    <picture>
                    <motion.img
                        initial={ 'RodrigoImgVariantsInit' } 
                        animate={ 'RodrigoImgVariantsVisible' } 
                        variants={tVariants} 
                        transition={{ delay: 0.5 }}
                        src={rodrigo} 
                        className="img-fluid img-thumbnail mt-1"
                        style={tVariants.imgParams} 
                        alt="Копчёный Родриго"/>
                </picture>
                <ul className="mt-2">
                <motion.span
                    initial={ 'NameTagVariantsInit' } 
                    animate={ 'NameTagVariantsVisible' } 
                    variants={tVariants} 
                    transition={{ delay: 0.5 }}  
                    className="fs-3 ">
                        Андрей Ластин
                </motion.span><br/>
                    <span>КОНТАКТНЫЕ ДАННЫЕ:</span>
                    <motion.li 
                        className="fw-light mt-3"
                        initial={ 'ContactsVariantsInit' } 
                        animate={ 'ContactsVariantsVisible' } 
                        variants={tVariants} 
                        transition={{ delay: 0.5 }}> 
                            VK: vk.com/sitmoo
                    </motion.li>
                    <motion.li 
                        className="fw-light"
                        initial={ 'ContactsVariantsInit' } 
                        animate={ 'ContactsVariantsVisible' } 
                        variants={tVariants} 
                        transition={{ delay: 0.7 }}> 
                            INSTAGRAM: instagram.com/sitmoo
                    </motion.li>
                    <motion.li 
                        className="fw-light"
                        initial={ 'ContactsVariantsInit' } 
                        animate={ 'ContactsVariantsVisible' } 
                        variants={tVariants} 
                        transition={{ delay: 0.9 }}> 
                            E-MAIL: alastin.ru@gmail.com
                    </motion.li>
                </ul>
            </div>
        </div>
    )
}

export default Contacts