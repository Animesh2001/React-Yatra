import React from 'react'
import ReactDOM from 'react-dom/client'

const apiData = "Hello Sis"
const isMorning = false
const morningText = "good morning user"
const afternoonText = "afternoon user"

const morningElement = <div>{morningText} it is 8am</div>
const afternoonElement = <div>{afternoonText} it is 6pm</div>
const greetingElement = isMorning ? morningElement : afternoonElement

const GreetingComponent = function(){
    // we can get rid of extra div by using <> only this. 
    return <>
        {greetingElement}
        i am inside component now
    </>
}
console.log(GreetingComponent)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(GreetingComponent());  