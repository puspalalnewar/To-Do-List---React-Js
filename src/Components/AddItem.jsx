import React, { useState } from 'react'
import './AddItem.css'
import ItemsList from './ItemsList';



const AddItem = (props) => {

    const [addItem, setAddItem] = useState([]);
    const [inputText, setInputText] = useState('');
    const addList = (inputText) => {
        if(inputText !== ''){
            setAddItem([...addItem, inputText]);
            setInputText("");
        }
        
    }

    const handleEnter = (e)=>{
        if(e.keyCode === 13){
            addList(inputText);
            setInputText("");
        }
    }
    const deleteListItem = (idx)=>{
        const newListTodo = [...addItem];
        newListTodo.splice(idx, 1);
        setAddItem([...newListTodo]);
    }

    return (
        <div className='container'>
            <h1>To Do List</h1>
            <div className="box">
                <input value={inputText} onKeyDown={handleEnter} onChange={(e) => setInputText(e.target.value)} type="text" placeholder='Enter Task' />
                <div className="plus-icon">
                    <i className="fa-solid fa-plus" onClick={() => {addList(inputText)}}></i>
                </div>
            </div>
            <h3>Lists <i className="fa-solid fa-arrow-down"></i></h3>
            {addItem.map((e, i)=>{
                return (
                    <ItemsList key = {i} idx = {i} work = {e} deleteItem = {deleteListItem}/>
                )
            })}

        </div>
    )
}

export default AddItem
