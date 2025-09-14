import {useState} from "react";
export default function Player({name,symbol}){
   const [isEditing , setIsEditing] = useState(false)
    const [playerName,setPlayerName] = useState(name);
    const handleEdit = () =>{
       setIsEditing((editing)=>!editing)
    }
    const handleChange = (event)=>{
        setPlayerName(event.target.value);
    }

    return( <li>
           <span className="player">

        <span className="player-name">{isEditing ? <input value={playerName} onChange={handleChange} autoFocus={true}/> : playerName}</span>
        <span className="player-symbol">{symbol}</span>
           </span>
            <button onClick={handleEdit}>{!isEditing ? 'Edit' : 'Save'}</button>
    </li>
   )
}