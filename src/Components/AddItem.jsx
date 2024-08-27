import React, { useState } from 'react'
import './AddItem.css'
import ItemsList from './ItemsList'

const AddItem = () => {

    const [inputText, setInputText] = useState('');



    return (
        <div className='container'>
            <h1>To Do List</h1>
            <div className="box">
                <input onChange={(e)=> setInputText(e.target.value)} type="text" placeholder='Enter Task' />
                <div className="plus-icon">
                    <i className="fa-solid fa-plus"></i>
                </div>
            </div>
            <h3>Lists <i className="fa-solid fa-arrow-down"></i></h3>
            <ItemsList work="Break Fast" />
            
        </div>
    )
}

export default AddItem
