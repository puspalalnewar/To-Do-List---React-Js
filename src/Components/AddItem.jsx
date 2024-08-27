import React, { useState } from 'react'
import './AddItem.css'
import ItemsList from './ItemsList';



const AddItem = () => {

    const [addItem, setAddItem] = useState(["Puspalal"]);
    // setAddItem([...addItem, "hi"]);
    // console.log(addItem);
    const [inputText, setInputText] = useState('');
    const addList = (inputText) => {
        setAddItem([...addItem, inputText]);
        setInputText("");
    }

    return (
        <div className='container'>
            <h1>To Do List</h1>
            <div className="box">
                <input value={inputText} onChange={(e) => setInputText(e.target.value)} type="text" placeholder='Enter Task' />
                <div className="plus-icon">
                    <i className="fa-solid fa-plus" onClick={() => {addList(inputText)}}></i>
                </div>
            </div>
            <h3>Lists <i className="fa-solid fa-arrow-down"></i></h3>
            {addItem.map((e, i)=>{
                return (
                    <ItemsList key = {i} work = {e}/>
                )
            })}

        </div>
    )
}

export default AddItem
