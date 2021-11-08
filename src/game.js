import React from 'react'

class Game extends React.Component {

    constructor(props){
        super(props)
        this.state = {value:''}
        this.msg = 'Entrez la reponse'

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.preventDefault()
        // console.log(e.target.value)
        this.setState({value:e.target.value})
        this.msg = e.target.value
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({value:''})

        if(this.state.value === "winny"){
            window.location.href='http://localhost:3001/Great'
            this.msg = 'Felicitation, vous avez gagné un smartPhone'
        }else{
            this.msg = "Jouez encore, car votre reponse, n'est pas correcte"
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} autoComplete="off"> 
                    <h1>SHORT GAME</h1>
                    <h3>C'EST QUOI LE SURNOM ACTUEL DE PASCAL ?</h3>
                    <input type="text" id="email" value={this.state.value} onChange={this.handleChange} placeholder="Votre reponse"/>
                </form>
                <h5>{this.msg}</h5>
            </div>
        )
    }
}


export default Game