import React from 'react';
import './App.css';
import './askChatGPT.js'

function App(){
    function askChatGPT() {
        console.log("Ask Chat Triggered")
    }
    function handleSubmit(e) {
        // Prevent reload
        e.preventDefault();

        // Read data from the form
        const form = e.target;
        const formData = new FormData(form);

        // Console log data
        const formDataConsole = Object.fromEntries(formData.entries(0));
        console.log(formDataConsole);
    }
    return(
        <form method='post' onSubmit={handleSubmit}>
            <div className="Banner">
            <h1 name="Form Name">Letter Gen</h1>
            <div className="bottomSection">
                <div className="textbox-container" style={{ paddingBottom: '30px' }}>
                    <textarea 
                    name="data" 
                    id="chatBox" 
                    className="textbox" 
                    placeholder="Describe your Situation"></textarea>
                </div>
                <div>
                    <button className="bottomButton btn-danger btn-lg" onClick={askChatGPT}>Review Case</button>
                </div>
            </div>
            </div>
        </form>
    );
}
export default App;
