import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Reset from "./styles/Generic"
import Base from "./styles/Base"
import 'popper.js'

ReactDOM.render(
    <>
        <Reset />
        <Base />
        <App />
    </>
    ,
    document.getElementById('root')
)
serviceWorker.unregister()
