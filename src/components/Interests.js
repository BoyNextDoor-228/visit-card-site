import React from 'react'

const Interests = () => {
    return (
        <div className="text-center m-4">
            <h3 className="text-light fs-5">ПРЕДЛАГАЕМ К ПРОСМОТРУ ИНТЕРЕСНЕЙШИЙ РОЛИК О НАШЕМ ПУТЕШЕСТВИИ!</h3>
            <iframe 
                height="400px"
                src="https://www.youtube.com/embed/_rXe3vqFpJo" 
                title="1-day-trip" 
                frameborder="0"                 
                allowfullscreen
                className="mt-3 w-75"/>
        </div>
    )
}

export default Interests