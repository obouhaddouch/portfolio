import React from 'react'

import AOS from "aos";
import 'aos/dist/aos.css';
import MyPhoto from '../img/MyPhoto.jpeg'





const JumbotronCom = () => {
    AOS.init();
    return (

        <div class="jumbotron" data-aos="zoom-in-down" data-aos-delay="50"  data-aos-duration="1500">
            <img className='MyPhoto' src={MyPhoto} />
            <h1 class="display-4">Outmane Bouhaddouch</h1>
            <p class="">Ik ben Outmane Bouhaddouch, student bij ICT school en ik doe de Opleiding Software development.</p>
           {/* <hr class="my-4"/> */}
            <p>Ik vind het heel leuk om nieuwe dingen te leren en dat hort ook bij de opliding die ik gekuezen heb</p>
            
        </div>
    )
}



export default JumbotronCom

