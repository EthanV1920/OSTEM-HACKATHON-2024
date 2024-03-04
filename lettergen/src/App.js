import React from 'react';
import OpenAI from 'openai';
import loadingGif from './Loading.gif';
import './App.css';
import './askChatGPT.js'
// const OpenAI = require("openai");
// require("dotenv").config();

function App() {

    const [isLoading, setIsLoading] = React.useState(false);

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
                instructions: "This is a person's experience relating to trying to vote in California, using the California Penal Code document, and the election code documentation, to determine if it would be in the user's best interest to fill out the CA Voter Fraud Form. If you recommend filling out the form please provide a summary of the clients' situation along with the exact violation codes they experienced as provided in your training set. There should only be one response generated and there should be no more than 500 words with no mentions of being unable to read the text files. Only return whether or not the user should fill out the form and any specific violations of the law that the user should mention in the form with the law code.",
                assistant_id: "asst_coEDRLofekur4e4eGG6wKfzL"
            }
        );
        
        while (true) {
            const runs = await openai.beta.threads.runs.retrieve(
                thread.id,
                run.id
            );
            setIsLoading(true);
            if (runs.status == "completed") {
                setIsLoading(false);
                break;
            }
            console.log(runs.status);
        }
        const messages = await openai.beta.threads.messages.list(
            thread.id
            // "thread_7cDNSVigqjlDP57O54r3adoK"
        );

        let outputBox = document.getElementById('outputBox');
        outputBox.value = '';
        for (let i = 0; i < messages.data.length - 1; i++) {
            const message = messages.data[i];
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
    const handleDownloadForm = () => {
    // Replace the link with your desired URL
    window.open('https://elections.cdn.sos.ca.gov/fraud-complaints/pdfs/english-voter-fraud-complaint-form.pdf', '_blank');
  };

  return (
        <form method='post' onSubmit={handleSubmit}>
            <div className="Banner">
                <h1 name="Form Name">Voter Advocate</h1>
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
                        {!isLoading && <button className="bottomButton btn-danger btn-lg">Review Case</button>}
                        {isLoading && <img src={loadingGif} alt='Loading' id='LoadingGIF'style={{width: "60px", height: "60px"}}/>}
                      <button type="button" className="Form btn-lg" onClick={handleDownloadForm}>Download Form</button>
                    </div>
                    <div>
        </div>
                </div>
            </div>
        </form>

    );
}
export default App;
