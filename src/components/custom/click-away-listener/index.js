import React, { useEffect, useRef } from 'react'

const ClickAwayListener = ({children , onClickAway}) => {
    const wrapperRef = useRef(null);
    useEffect(()=>{
        function handleClickOutside(event){
            if(wrapperRef.current && !wrapperRef.current.contains(event.target)){
                onClickAway()
            }
        }
        document.addEventListener("mousedown",handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        }
    },[wrapperRef, onClickAway]);
  return (
    <div ref={wrapperRef}>{children}</div>
  )
}

export default ClickAwayListener;