import { useState } from "react";

export default function Player({initialName,symbol,isActive})
{
    const [playerName,setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    let btn = 'Edit';
    function handleClick()
    {
        setIsEditing(isEditing => !isEditing);

    }

    function handleChange(event)
    {
        setPlayerName(event.target.value);
    }

    
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if(isEditing)
    {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
        btn = 'Save';
    }
    return(
        <li className={isActive? 'active' : undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{btn}</button>
        </li>
    );
}