import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Reset from "./styles/Generic"
import Base from "./styles/Base"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js'
import 'jquery/jquery'

ReactDOM.render(
    <>
        <Reset />
        <Base />
        <App />
    </>
    , 
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
