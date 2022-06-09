import React from 'react';
import './Banner.css'
import award from '../../asserts/1.png'
import awardReceive from '../../asserts/2.png'

const Banner = () => {
    return (
        <section className='banner-container'>
            <div className='banner-img'>
                <img src={award} alt="award" />
            </div>
            <div className='award-container'>
                <div className='award-content'>
                    <h2>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
                    <ul>
                        <li>
                        C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                        </li>
                        <li>
                        C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                        </li>
                    </ul>
                    <img src={awardReceive} alt="award receive" />
                    <h4>Government of India has awarded the <span>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h4>
                </div>
            </div>
        </section>
    );
};

export default Banner;