
import React, { Component } from 'react'
import { connect } from 'react-redux'
import appActions from './appActions'

class Children extends Component {
    setText() {
        this.props.dispatch(appActions.setText('modou'))
    }
    render() {
        return (
            <>
                <button onClick={() => this.setText()}>Mudar texto</button>
            </>
        )
    }
}

const ChildrenConnected = connect(store => ({ text: store.text }))(Children)

class App extends Component {
    render() {
        return (
            <>
                <h1>{this.props.text}</h1>
                <ChildrenConnected />
            </>
        )
    }
}

export default connect(store => 
  ({ text: store.text }))(App)

// Connect, por sua vez, é responsável por estabelecer conexão entre algum componente e o Redux (store, reducers). 
// Quando um componente está englobado pelo connect, 
// ele recebe uma função chamada dispatch por props, 
// para que você possa executar as suas ações (isso irá ficar mais claro no código). 
// Para usarmos o connect, devemos dizer quais dados da store o nosso componente irá usar (estes dados também serão passados por props). 
// No nosso caso, o único dado que vamos precisar será o "texto".