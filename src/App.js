import React, {useState} from 'react';
import Button from './Button';
import Text from './text'

const App = () => {
    const [message, updateMessage] = useState("hello user, good morning")

    const changeMessage= () =>{
        console.log('before update', message)
        updateMessage((prevData)=>{
            console.log("previous data is", prevData)

            return "hello user , good afternoon"
        })
        console.log('after update', message)
    }
    return <>
        <div>{message}</div>
        <Button clickAction={changeMessage}>Change Message</Button>
    </>
}

export default App;


