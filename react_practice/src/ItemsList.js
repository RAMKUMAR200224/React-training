import React from 'react'

import LineItem from './LineItem';

const ItemsList = ({items,handleCheck,handleDelete}) => {
  return (
               <ul>
                {items.map((item)=>(
                    <LineItem 
                           item = {item}
                           key = {item.id}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                    />
                    // <li className="item" key={item.id}>
                    //     <input 
                    //     type="checkbox"
                    //     onChange={()=>handleCheck(item.id)}
                    //     checked={item.checked}
                    //     />
                    //     <label 
                    //     style={(item.checked)?{textDecoration: "line-through"} : null}
                    //     onDoubleClick={()=>handleCheck(item.id)}>
                    //         {item.item}</label>
                    //     <FaTrashAlt 
                    //         role="button"
                    //         onClick={()=>handleDelete(item.id)}
                    //         tabIndex="0"
                    //         aria-label={`Delete ${item.item}`}
                    //         />
                    // </li>
                ))}
               </ul>
  )
}

export default ItemsList
