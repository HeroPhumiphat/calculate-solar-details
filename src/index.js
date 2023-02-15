import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dc = document.createElement('div')
dc.id = 'detailsBox'
dc.style.position = 'fixed'
dc.style.bottom = '10px'
dc.style.right = '10px'
dc.style.color = 'blue'
dc.style.fontSize = '25px'
dc.style.fontFamily = "'Nanum Pen Script', cursive"
document.body.append(dc)

const details = document.getElementById(('detailsBox'))

const body = document.body.style
body.height = `${window.innerHeight}px`
body.width = `${window.innerWidth}px`
details.innerHTML = `<h3><b>Window-Width => ${window.innerWidth}px.</b></h3>`
// console.log(window.innerWidth, window.innerHeight)


window.addEventListener('resize', () => {
  body.height = `${window.innerHeight}px`
  body.width = `${window.innerWidth}px`
  details.innerHTML = `<h3><b>Window-Width => ${window.innerWidth}px.</b></h3>`
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
