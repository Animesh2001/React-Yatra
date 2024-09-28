import React from 'react';
import Button from './Button';

const App = () => {
    //we want to render this button component
    const handleClickAction = ()=>{
        console.log('I was clicked from parent.')
    }
    return <Button clickAction = {handleClickAction}>Click Me</Button> 
}

export default App;


