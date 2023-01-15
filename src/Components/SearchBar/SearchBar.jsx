import React from 'react'
import './SearchBar.css'
import search_icon from "../../Assets/svg/Search.svg"

export default function SearchBar() {

  const activeBtns = (e) => {
    // if(e.target.matches("my_orders_btn")) {
    //     this.
    // }
    console.log("ok");
  }

  return (
    <div className='searchbar'>
        <div className='container'>
            <div className='searchbar_wrapper'>
                <div onClick={(e) => activeBtns(e)} className='searchbar_btn_group'>
                    <button className='my_orders_btn searchbar_btn_active'>
                        My orders
                    </button>
                    <button className='archive_orders_btn'>
                        Archive orders
                    </button>
                </div>

                <form className='search_form' action="">
                    <div className='input_box'>
                        <input type="number" placeholder='Search ID' />
                        <img src={search_icon} alt="search icon" width="24" height="24" />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
 