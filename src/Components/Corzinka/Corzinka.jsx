import React from 'react';
import "./Corzinka.css"
import bagImg from "../../Assets/svg/Bag.svg"
import CorzinkaCard from './Corzinka.Card';
import { useContext } from 'react';
import { OpenModalContext } from '../../Contexts/OrderModalContext/OrderModalContext';

const Corzinka = () => {

    const { isOpenCorzinkaModal, setIsOpenCorzinkaModal } = useContext(OpenModalContext)

    const closeCorzinkaModal = () => {
        setIsOpenCorzinkaModal(false)
    }

    return (
        <div style={{display: isOpenCorzinkaModal ? "block" : "none"}} className="corzinka" >

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

                    <button onClick={() => closeCorzinkaModal()} className="corzinka-close">
                        <p className='corzinka-closeText'>Cancel</p>
                        <span className='corzinka-closeBtn'>&#10005;</span>
                    </button>
                </div>

                <CorzinkaCard />
                <CorzinkaCard />
                <CorzinkaCard />

                <button className='next_btn'>
                    Next
                </button>
            </div>

            <div className="backdrop"></div>
        </div>
    );
}

export default Corzinka;
