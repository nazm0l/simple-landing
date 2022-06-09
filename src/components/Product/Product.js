import React from 'react';
import './Product.css'
import product from '../../asserts/3.png'

const Product = () => {
    return (
        <section>
            <div className='product-content'>
                <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
                <img src={product} alt="" />
                <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            </div>
            <hr className="border"></hr>
            <div className='product-footer'>
                <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
                <p><span>CHEMICALS & PROCESS</span><span>POWER</span><span>WATER & WASTE WATER</span><span>OILS & GAS</span><span>PHARMA</span><span>SUGARS & DISTILLERIES</span><span>PAPER & PULP</span><span>MARINE & DEFENCE</span><span>METAL & MINING</span><span>FOOD & BEVERAGE</span><span>PETROCHEMICAL & REFINERIES</span><span>SOLAR</span><span>BUILDING</span><span>HVAC</span><span>FIRE FIGHTING</span>AGRICULTURE & RESIDENTIAL</p>
            </div>
        </section>
    );
};

export default Product;