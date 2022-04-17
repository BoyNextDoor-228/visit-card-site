import React from 'react'
import spotify_logo from '../images/spotify-logo.png'
import yandex_logo from '../images/yandex-logo.png'
import { tVariants } from '../tVariants'
import { motion } from 'framer-motion'

const Music = () => {
    return (
        <div>
        <div className="mt-4 row">
            <div className="col-4 d-flex justify-content-center">
                <motion.img src={spotify_logo}
                            initial={ 'PabloImgVariantsInit' } 
                            animate={ 'PabloImgVariantsVisible' } 
                            variants={tVariants} 
                            transition={{ delay: 0.5 }} 
                            width="200px" 
                            height="200px" 
                            alt="spotify logo"/>
            </div>
            <div className="col-7 d-flex justify-content-center">
            <iframe src="https://open.spotify.com/embed/artist/5Tywwd6fvFF9ZGm1p3ohUL?theme=0"
                title="Tikhonov Pavel Music at Spotify" 
                className="w-100"
                height="200px" 
                frameBorder="1" 
                allowtransparency="true" 
                allow="encrypted-media"/>
            </div>
        </div>
        <div className="mt-4 ms-4 row">
            <div className="col-7 d-flex justify-content-center">
            <iframe src="https://music.yandex.ru/iframe/#artist/9690997"
                    title="Tikhonov Pavel Music at Yandex.Music"
                    frameborder="0" 
                    className="w-100" 
                    height="200px" 
                /> 
            </div>
            <div className="col-4 d-flex justify-content-center">
            <motion.img src={yandex_logo} 
                 initial={ 'RodrigoImgVariantsInit' } 
                 animate={ 'RodrigoImgVariantsVisible' } 
                 variants={tVariants} 
                 transition={{ delay: 0.5 }}
                 width="200px" 
                 height="200px" 
                 alt="yandex-music logo"/>        
            </div>
        </div>
        </div>
    )
}

export default Music