import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Bio from './Bio'
import Contacts from './Contacts'
import Interests from './Interests'
import Music from './Music'

const MainWindow = () => {
    const styles = { height: '600px' }

    return(
        <div className="d-flex justify-content-center mt-5">
            <div className="w-75 bg-dark mainblock" style={styles}>
                
                <nav className="row">
                    <div className="col-5 text-center mt-2">
                        <span className="fs-5 m-1 fw-lighter text-light">ДУЭТ "РОМАШКА" - АНДРЮШКА И ПАШКА</span>
                    </div>
                    <div className="col-7">
                    <ul className="d-flex my-1">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-light" to="/">ГЛАВНАЯ</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-light" to="/bio">БИОГРАФИЯ</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-light" to="/interests">ИНТЕРЕСНОЕ</NavLink>
                                </li>
                                <li className="nav-item text-light">
                                    <NavLink className="nav-link text-light" to="/music">МУЗЫКА</NavLink>
                                </li>
                                <li className="nav-item text-light">
                                    <NavLink className="nav-link text-light" to="/contacts">СВЯЗЬ</NavLink>
                                </li>
                            </ul>
                    </div>
                </nav>

                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/bio'} exact component={Bio}/>
                    <Route path={'/contacts'} exact component={Contacts}/>
                    <Route path={'/interests'} exact component={Interests}/>
                    <Route path={'/music'} exact component={Music}/>
                </Switch>

            </div>          
        </div>
    )
}

export default MainWindow