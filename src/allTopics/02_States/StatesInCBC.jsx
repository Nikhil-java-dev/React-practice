import { Component } from "react";

class StatesInCBC extends Component{

    constructor(){
        super();
        this.state = {data : "Hello World"}
    }

        updateState = () => {
            this.setState({data : "Byee world"})

        };
        
    render(){
        console.log(this);
        
        return(
            <>
            <h1>Learn States In CBC</h1>
            <h2>{this.state.data}</h2>
            <button onClick={this.updateState}>Change</button>
            
            </>
        )
    }
}

export default StatesInCBC
