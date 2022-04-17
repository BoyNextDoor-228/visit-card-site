import React from 'react'
import pablo from '../images/pablo.jpg'
import rodrigo from '../images/rodrigo.jpg'
import { motion } from 'framer-motion'
import { tVariants } from '../tVariants'

const Bio = () =>{
    return (
        <div className="row text-light">
            <div className="col-6 text-center">
            ​    <picture>
                    <motion.img src={pablo} 
                                initial={ 'PabloImgVariantsInit' } 
                                animate={ 'PabloImgVariantsVisible' } 
                                variants={ tVariants } 
                                transition={{ delay: 0.5 }}
                                className="img-fluid img-thumbnail mt-1 h-50 w-50" 
                                alt="Пабло Тихий"/>
                </picture>
                <ul className="mt-2">
                    <motion.span className="fs-3"
                                initial={ 'NameTagVariantsInit' } 
                                animate={ 'NameTagVariantsVisible' } 
                                variants={tVariants} 
                                transition={{ delay: 0.5 }} >
                                    Павел Тихонов
                    </motion.span><br/>
                    <span>AKA: Пабло Тихий, Паштет, ПАВЕЛитель Мангустинов</span>
                    <motion.li className="fw-light mt-3"
                               initial={ 'ContactsVariantsInit' } 
                               animate={ 'ContactsVariantsVisible' } 
                               variants={tVariants} 
                               transition={{ delay: 0.9 }}>
                                   Играл на гитаре. Выиграл...
                    </motion.li>
                    <motion.li className="fw-light"
                               initial={ 'ContactsVariantsInit' } 
                               animate={ 'ContactsVariantsVisible' } 
                               variants={tVariants} 
                               transition={{ delay: 1.1 }}>
                                   SOME BORING FAAAAAAAAAAAAAAAAAACT!!!!!
                    </motion.li>
                    <motion.li className="fw-light"
                               initial={ 'ContactsVariantsInit' } 
                               animate={ 'ContactsVariantsVisible' } 
                               variants={tVariants} 
                               transition={{ delay: 1.3 }}>
                                   SOME BORING FAAAAAAAAAAAAAAAAAACT!!!!!
                    </motion.li>
                    <motion.li className="fw-light"
                               initial={ 'ContactsVariantsInit' } 
                               animate={ 'ContactsVariantsVisible' } 
                               variants={tVariants} 
                               transition={{ delay: 1.5 }}>
                                   SOME BORING FAAAAAAAAAAAAAAAAAACT!!!!!
                    </motion.li>
                    <motion.li className="fw-light"
                               initial={ 'ContactsVariantsInit' } 
                               animate={ 'ContactsVariantsVisible' } 
                               variants={tVariants} 
                               transition={{ delay: 1.7 }}>
                                   SOME BORING FAAAAAAAAAAAAAAAAAACT!!!!!
                    </motion.li>
                </ul>
            </div>
            <div className="col-6 text-center">
            ​    <picture>
                    <motion.img src={rodrigo}
                                initial={ 'RodrigoImgVariantsInit' } 
                                animate={ 'RodrigoImgVariantsVisible' } 
                                variants={ tVariants } 
                                transition={{ delay: 0.5 }} 
                                className="img-fluid img-thumbnail mt-1 h-50 w-50" 
                                alt="Копчёный Родриго"/>
                </picture>
                <ul className="mt-2">
                <motion.span className="fs-3"
                                initial={ 'NameTagVariantsInit' } 
                                animate={ 'NameTagVariantsVisible' } 
                                variants={tVariants} 
                                transition={{ delay: 0.7 }}>
                                    Андрей Ластин
                </motion.span><br/>
                    <span>AKA: Копчёный Родриго, Расхититель Ректальных Глубин</span>
                    <motion.li className="fw-light mt-3"
                               initial={ 'ContactsVariantsInit' } 
                               animate={ 'ContactsVariantsVisible' } 
                               variants={tVariants} 
                               transition={{ delay: 0.9 }}>
                                   Может сыграть ноктюрн на флейте водосточных труб.
                    </motion.li>
                    <motion.li className="fw-light"
                               initial={ 'ContactsVariantsInit' } 
                               animate={ 'ContactsVariantsVisible' } 
                               variants={tVariants} 
                               transition={{ delay: 1.1 }}>
                                   SOME BORING FAAAAAAAAAAAAAAAAAACT!!!!!
                    </motion.li>
                    <motion.li className="fw-light"
                               initial={ 'ContactsVariantsInit' } 
                               animate={ 'ContactsVariantsVisible' } 
                               variants={tVariants} 
                               transition={{ delay: 1.3 }}>
                                   SOME BORING FAAAAAAAAAAAAAAAAAACT!!!!!
                    </motion.li>
                    <motion.li className="fw-light"
                               initial={ 'ContactsVariantsInit' } 
                               animate={ 'ContactsVariantsVisible' } 
                               variants={tVariants} 
                               transition={{ delay: 1.5 }}>
                                   SOME BORING FAAAAAAAAAAAAAAAAAACT!!!!!
                    </motion.li>
                    <motion.li className="fw-light"
                               initial={ 'ContactsVariantsInit' } 
                               animate={ 'ContactsVariantsVisible' } 
                               variants={tVariants} 
                               transition={{ delay: 1.7 }}>
                                   SOME BORING FAAAAAAAAAAAAAAAAAACT!!!!!
                    </motion.li>

                </ul>
            </div>
        </div>
    )
}

export default Bio