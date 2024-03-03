import React from 'react';
import OpenAI from 'openai';
import './App.css';
import './askChatGPT.js'
// const OpenAI = require("openai");
// require("dotenv").config();

function App(){
    
    
    async function askChatGPT() {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
        console.log("Ask Chat Clicked");
        const thread = await openai.beta.threads.create();
        console.log(thread.id);
        // userMessage = "My boss has decided to host a ballet-filling party I'm not sure how I feel about that.";
        const message = await openai.beta.threads.messages.create(
            thread.id,
            {
                role: "user",
                content: "formData",
            }
        );
        const threadMessages = await openai.beta.threads.messages.list(
            thread.id
        );
        const run = await openai.beta.threads.runs.create(
            thread.id,
            { assistant_id: "asst_coEDRLofekur4e4eGG6wKfzL" }
        );
        while (true) {
            const runs = await openai.beta.threads.runs.retrieve(
                thread.id,
                run.id
            );
            if (runs.status == "completed") {
                break;
            }
            console.log(runs.status);
        }
        for (const message of threadMessages.data) {
            console.log(message.content);
            console.log(message.thread_id);
        }
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
