import React from 'react';
import "./Corzinka.css"
import bagImg from "../../Assets/svg/Bag.svg"
import CorzinkaCard from './Corzinka.Card';

const Corzinka = () => {
    return (
        <div className=" corzinka" >

            <div className='container corzinka-container'>
                <div className='corzinka-header'>
                    <div className='corzinka-logo'>
                        <img className='corzinka-logoImg'
                            src={bagImg}
                            alt="Corzinka bag logo" />
                        <h2 className='corzinka-logoText'>Bag</h2>
                    </div>

                    <div className='corzinka-id'>
                        <p className='corzinka-idIext'>
                            ID: <span className='corzinka-idNum'>2386282</span>
                        </p>
                    </div>

                    <div className="corzinka-close">
                        <p className='corzinka-closeText'>Cancel</p>
                        <button className='corzinka-closeBtn'>&#10005;</button>
                    </div>
                </div>

                <CorzinkaCard />
                <CorzinkaCard />
                <CorzinkaCard />
            </div>

            <div className="backdrop"></div>
        </div>
    );
}

export default Corzinka;
