import React from 'react'
import preloader from '../assets/images/Spinner-1s-200px.svg';




const Preloader = () => {
return (
    <div>
        <img src={preloader} style={{ backgroundColor: 'white' }} alt='preloaderImg'/>
    </div> 
    )
}

export default Preloader;