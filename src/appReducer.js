
const initialState = { text: 'Vai mudar' }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return { ...state, text: action.payload }
        default:
            return state
    }
}

// Reducers - Cada dado da store deve ter o seu próprio reducer, por exemplo: o dado "user" teria o seu reducer, 
// chamado "userReducer". Um reducer é encarregado de lidar com todas as ações, 
// como algum componente pedindo para alterar algum dado da store. 

// Actions- São responsáveis por requisitar algo para um reducer. 
// Elas devem ser sempre funções puras, o que, dizendo de uma forma leiga, 
// quer dizer que elas devem APENAS enviar os dados ao reducer, nada além disso.