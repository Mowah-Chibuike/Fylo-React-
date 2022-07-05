import React, {useState} from "react";
import Btn from "./Button";
import './InputEl.css'

const InputEl = ({content, placeholder, lgButtonWidth, flexDirection, marginLeft, marginRight}) => {
    const [inputValue, setInputValue] = useState("")
    const [message, setMessage] = useState("")

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue)
    }

    let handleClick = () => {
        if (!inputValue.length) {
            setMessage("Please fill this correctly")
        } else{
            setMessage("")
        }
    }
    return(
        <div className="input-el" style={{flexDirection: flexDirection}}>
            <div className="input-box">
                <input placeholder={placeholder} type="email" name="email" id="email" onChange={onChange}/>
                <p className="error">{message}</p>
            </div>
            
            <Btn width={{sm: '100%', md:'100%', lg: lgButtonWidth}} text={content} left={marginLeft} right={marginRight} onClick={handleClick}/>
        </div>
    )
}

export default InputEl