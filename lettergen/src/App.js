import React from 'react';
import OpenAI from 'openai';
import './App.css';
import './askChatGPT.js'
// const OpenAI = require("openai");
// require("dotenv").config();

function App() {

    const openai = new OpenAI({
        apiKey: "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",
        dangerouslyAllowBrowser: true
    });

    async function askChatGPT(formData) {
        console.log("Ask Chat Clicked");
        const thread = await openai.beta.threads.create();
        console.log(thread.id);
        // userMessage = "My boss has decided to host a ballet-filling party I'm not sure how I feel about that.";
        console.log(formData.data);
        const message = await openai.beta.threads.messages.create(
            thread.id,
            {
                role: "user",
                content: formData.data
            }
        );
        const threadMessages = await openai.beta.threads.messages.list(
            thread.id
        );
        const run = await openai.beta.threads.runs.create(
            thread.id,
            {
                instructions: "This is a person's experience relating to trying to vote in California, using the California Penal Code document, and the election code documentation, to determine if it would be in the user's best interest to fill out the CA Voter Fraud Form. There should only be one response generated and there should be no more than 500 words with no mentions of being unable to read the text files. Only return weather or not the user should fill out the form and any specific violations of the law that the user should mention in the form.",
                assistant_id: "asst_coEDRLofekur4e4eGG6wKfzL"
            }
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
        const messages = await openai.beta.threads.messages.list(
            thread.id
            // "thread_7cDNSVigqjlDP57O54r3adoK"
        );

        let outputBox = document.getElementById('outputBox');
        for (const message of messages.data) {
            const currentMessage = Object.entries(message.content);
            console.log(currentMessage[0][1].text);
            outputBox.value += currentMessage[0][1].text.value +  '\n';
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
        askChatGPT(formDataConsole);
    }
    function changeContent(e) {
        const chatBox = document.getElementById('chatBox');
        chatBox.innerHTML = e.target.value;
        console.log(chatBox.innerHTML);
    }
    return (
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
                    <div className="textbox-container" style={{ paddingBottom: '30px' }}>
                        <textarea
                            name="output"
                            id="outputBox"
                            className="textbox"
                            placeholder="Output will be displayed here"
                            readOnly></textarea>
                    </div>
                    <div>
                        <button className="bottomButton btn-danger btn-lg">Review Case</button>
                    </div>
                </div>
            </div>
        </form>

    );
}
export default App;
