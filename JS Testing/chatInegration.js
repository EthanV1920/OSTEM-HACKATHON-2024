// const axios = require('axios');

// // Replace 'YOUR_API_KEY' with your actual OpenAI API key
// const apiKey = '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';

// // This endpoint is for OpenAI's GPT-3; endpoints may vary
// const endpoint = 'https://chat.openai.com/g/g-wOyC79hLg-voter-advocate';
// // const endpoint = 'https://api.openai.com/v1/completions';

// const data = {
//   model: 'text-davinci-003', // Specify the model you wish to use
//   prompt: 'My boss has decided to host a ballet-filling party I\'m not sure how I feel about that.',
//   // Your query
//   temperature: 0.7,
//   max_tokens: 150,
// };

// const config = {
//   headers: {
//     'Authorization': `Bearer ${apiKey}`,
//     'Content-Type': 'application/json',
//   },
// };

// axios.post(endpoint, data, config)
//   .then(response => {
//     console.log('Response:', response.data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
const OpenAI = require("openai");
require("dotenv").config();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// async function main() {
//     const completion = await openai.chat.completions.create({
//         messages: [{ "role": "system", "content": "You are a helpful assistant." },
//         { "role": "user", "content": "Who won the world series in 2020?" },
//         { "role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020." },
//         { "role": "user", "content": "Where was it played?" }],
//         model: "voter",
//     });

//     console.log(completion.choices[0]);
// }
// main();

// // const { Configuration, OpenAIApi } = require("openai");
// const OpenAI = require("openai");
// require("dotenv").config();

// // Set up your API key
// // const configuration = new Configuration({
// //   apiKey: process.env.OPENAI_API_KEY, // Replace with your API key or use environment variable
// // });

// const openai = new OpenAI({
//       apiKey: process.env.OPENAI_API_KEY,
//     });

// async function interactWithGPT(prompt) {
//   try {
//     const response = await openai.createCompletion({
//       model: "text-davinci-003", // Replace with your custom model name
//       prompt: prompt,
//       max_tokens: 100,
//       temperature: 0.7,
//     });

//     console.log(response.data.choices[0].text);
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Example usage
// interactWithGPT("What is the capital of France?");
// import OpenAI from "openai";

// const openai = new OpenAI();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


async function main() {
    const thread = await openai.beta.threads.create();
    console.log(thread.id);
    userMessage = "My boss has decided to host a ballet-filling party I'm not sure how I feel about that.";
    const message = await openai.beta.threads.messages.create(
        thread.id,
        {
            role: "user",
            content: userMessage,
        }
    );
    const threadMessages = await openai.beta.threads.messages.list(
        thread.id
        // "thread_hVH1QV4jlqvEcN8PfIJrtpUJ"
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
        // console.log(messages.data);
        // console.log(messages.data.content);
    }
    // console.log(thread);
    // console.log(threadMessages);
    // console.log(run);
    // const messages = await openai.beta.threads.messages.list(
    //     thread.id
    // );
    // console.log(runs.status);
    // console.log(threadMessages);
    // while (true) {
    //     console.log(threadMessages.data.length);
    //     if (threadMessages.data.length > 1) {
    //         break;
    //     }
    // }
    for (const message of threadMessages.data) {
        console.log(message.content);
        console.log(message.thread_id);
    }
}
main();


// const run = await openai.beta.threads.runs.create(
//     thread.id,
//     { 
//       assistant_id: asst_coEDRLofekur4e4eGG6wKfzL,
//       instructions: "My boss has decided to host a ballet-filling party I'm not sure how I feel about that.",
//     }
//   );

//   run();