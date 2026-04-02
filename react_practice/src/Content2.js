import React from "react";


import ItemsList from "./ItemsList";

const Content2 = ({items,handleCheck,handleDelete}) => {
    //    const [items,setItems] = useState(
    //     [
    //         {id:1,
    //          checked: true,
    //          item:"practice coding"

    //         },
    //         {id:2,
    //          checked: false,
    //          item:"playing game"

    //         },
    //         {id:3,
    //          checked: true,
    //          item:"read about react"

    //         }])
    //         const handleCheck = (id) =>{
    //             const listItems = items.map((item)=>
    //                 item.id==id ? {...item,checked:!item.checked} : item)
    //             setItems(listItems)
    //             localStorage.setItem("todo_list",JSON.stringify(listItems))
    //         }
    //         const handleDelete =(id)=>{
    //             const listItems = items.filter((item)=> 
    //                 item.id!==id)
    //             setItems(listItems)
    //             localStorage.setItem("todo_list",JSON.stringify(listItems))
    //         }
    return(
        <>
            {(items.length) ?(
                <ItemsList
                    items = {items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
        />
        //    <ul>
        //     {items.map((item)=>(
        //         <li className="item" key={item.id}>
        //             <input 
        //             type="checkbox"
        //             onChange={()=>handleCheck(item.id)}
        //             checked={item.checked}
        //             />
        //             <label 
        //             style={(item.checked)?{textDecoration: "line-through"} : null}
        //             onDoubleClick={()=>handleCheck(item.id)}>
        //                 {item.item}</label>
        //             <FaTrashAlt 
        //                 role="button"
        //                 onClick={()=>handleDelete(item.id)}
        //                 tabIndex="0"
        //                 />
        //         </li>
        //     ))}
        //    </ul>
            ):(
                <p style={ {marginTop:"2rem"} }>Your List Is Empyt</p>
            )
        }
        </>
    )
}

export default Content2