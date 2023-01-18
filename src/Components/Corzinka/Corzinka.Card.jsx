import React from 'react';
import OrderCard from '../OrderCard/OrderCard';
import CorzinkaProduct from './Corzinka.Product';

const CorzinkaCard = () => {
    return (
        <div className='corzinka-card'>
            <div className='corzinka-cardHeader'>
                <h2>Oilaviy</h2>
                <button className='corzinka-closeBtn'>&#10005;</button>
            </div>

            <div className="corzinka-cardBody">
                <CorzinkaProduct />
                <CorzinkaProduct />
                <CorzinkaProduct />
                <CorzinkaProduct />
            </div>

            <div className="corzinka-cardFooter">
                <div className='corzinka-cardProductType'>
                    <div className='corzinka-cardSelect'>
                        <select name="" id="">
                            <option disabled selected>Nojka</option>
                            <option selected>Mato</option>
                            <option selected>Mato</option>
                            <option selected>Mato</option>
                            <option selected>Mato</option>
                        </select>
                        <select name="" id="">
                            <option selected>Mato</option>
                            <option selected>Mato</option>
                            <option selected>Mato</option>
                            <option selected>Mato</option>
                            <option selected>Mato</option>
                        </select>
                    </div>
                    <div className="corzinka-cardPrice">
                        <p>
                            Jami: <span> 750 000</span>
                        </p>
                        <p>
                            Sotdim: <span> 750 000</span>
                        </p>
                        <p>
                            Skidka: <span> 10%</span>
                        </p>
                    </div>
                </div>
                <div className="corzinka-cardTotal">
                    <div className='corzinka-cardTotal-Header'>
                        <h3>Total profit:</h3>
                        <span>15 000 000 000</span>
                    </div>

                    <div className="corzinka-cardTotalPrice corzinka-cardPrice ">
                        <p>
                            Nojka: <span> 25 000 000</span>
                        </p>
                        <p>
                            Mato: <span> 25 000 000</span>
                        </p>
                        <p>
                            Complect: <span> 25 000 000</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CorzinkaCard;
