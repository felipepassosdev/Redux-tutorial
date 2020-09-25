
import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))

// O Provider é o responsável por dizer qual vai ser a nossa store, 
// como podemos ver no código acima.    