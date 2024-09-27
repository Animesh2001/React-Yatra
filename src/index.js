import React from 'react'
import ReactDOM from 'react-dom'

// this is how react also use to work.
// const root = document.getElementById('root')
// const p = document.createElement('p')
// p.innerText = "Hello from Animesh part 2";
// root.appendChild(p)

const child1 = React.createElement('p',{},"I am a child")
const child2 = React.createElement('p',{},"I am a child")
// const div = React.createElement('div',{className:'text'},[child1,child2])
const div = <div> Hello Chutiyo</div>
console.log(div)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);  