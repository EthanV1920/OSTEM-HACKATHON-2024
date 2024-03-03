import React from 'react';
import './App.css';
import './askChatGPT.js'

class App extends React.Component{
    askChatGPT = () => {
        console.log("Ask Chat Triggered")
    }
    render(){
        return(
            <div className="Banner">
            <h1>Letter Gen</h1>
            <div className="bottomSection">
                <div className="textbox-container" style={{ paddingBottom: '30px' }}>
                    <textarea className="textbox" placeholder="Describe your Situation"></textarea>
                </div>
                <p class="topText">AI Voting Right Bot</p>
                <div>
                    <button className="bottomButton btn-danger btn-lg" onClick={this.askChatGPT}>Review Case</button>
                </div>
            </div>
        </div>
        )
    }
}
export default App;
