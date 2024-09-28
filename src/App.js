import React from 'react';
import Button from './Button';
import Text from './text'

const App = () => {
    //now we will render something using this data
    const data = [
        { id: 'a', text: "text 1" },
        { id: 'b', text: "text 2" },
        { id: 'c', text: "text 3" },
        { id: 'd', text: "text 4" },
        { id: 'e', text: "text 5" }
    ]

    //we can do like this , but instead of doing this we can do something better.
    // return <>
    //     <Text>{data[0].text}</Text>
    //     <Text>{data[1].text}</Text>
    //     <Text>{data[2].text}</Text>
    //     <Text>{data[3].text}</Text>
    //     <Text>{data[4].text}</Text>

    // </>

    //using map we can generate the array dynamically in javascript.
    return <>
        {data.map((item,index)=> <Text key={index}>{item.text}</Text>)}   
</>

}

export default App;


