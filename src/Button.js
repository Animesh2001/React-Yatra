import React from 'react'
 
//keep function name capital
const Button = (props) =>{
    console.log("button rendered")
    //here you are destructuring the props
    const {children, clickAction} = props
    const handleClick = () =>{
       clickAction?.()
    }
    return <button onClick={handleClick}>{children}</button>
} 

// we will export this button and consume this on our app. 
export default Button;
