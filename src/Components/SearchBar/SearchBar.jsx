import React, { useRef } from 'react'
import './SearchBar.css'
import search_icon from "../../Assets/svg/Search.svg"

export default function SearchBar() {

    const archiveBtn = useRef()
    const orderBtn = useRef()

    const activeOrders = () => {
        orderBtn.current.classList.remove("searchbar_btn_active")
        archiveBtn.current.classList.add("searchbar_btn_active")
    }

    const activeArchive = () => {
        archiveBtn.current.classList.remove("searchbar_btn_active")
        orderBtn.current.classList.add("searchbar_btn_active")
    }


  return (
    <div className='searchbar'>
        <div className='container'>
            <div className='searchbar_wrapper'>
                <div className='searchbar_btn_group'>
                    <button ref={orderBtn} onClick={() => activeArchive()} className='my_orders_btn searchbar_btn_active'>
                        My orders
                    </button>
                    <button ref={archiveBtn} onClick={() => activeOrders()} className='archive_orders_btn'>
                        Archive orders
                    </button>
                </div>

                <form className='search_form' action="">
                    <div className='input_box'>
                        <input type="text" placeholder='Search' />
                        <img src={search_icon} alt="search icon" width="24" height="24" />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
 