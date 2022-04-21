import React, {useRef} from 'react'
import FRinput from './FRinput'

function FRParent() {
    const inputRef = useRef()
    const clickHandler = ()=>{
        inputRef.current.focus()
    }
  return (
    <div>
        <FRinput ref={inputRef}/>
        <button onClick={clickHandler}>Focus input </button>
    </div>
  )
}

export default FRParent