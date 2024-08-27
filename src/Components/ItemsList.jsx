import React from 'react'
import './ItemsList.css'

const ItemsList = (props) => {
    return (
        <div className='cont'>
                <div className="item-box">
                    <p>{props.work}</p>
                    <i className="fa-solid fa-trash-arrow-up"></i>
                </div>
        </div>
    )
}

export default ItemsList
