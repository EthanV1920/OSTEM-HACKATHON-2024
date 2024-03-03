const axios = require('axios');

// Replace 'YOUR_API_KEY' with your actual OpenAI API key
const apiKey = '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';

// This endpoint is for OpenAI's GPT-3; endpoints may vary
const endpoint = 'https://chat.openai.com/g/g-wOyC79hLg-voter-advocate';
// const endpoint = 'https://api.openai.com/v1/completions';

const data = {
  model: 'text-davinci-003', // Specify the model you wish to use
  prompt: 'My boss has decided to host a ballet-filling party I\'m not sure how I feel about that.',
  // Your query
  temperature: 0.7,
  max_tokens: 150,
};

const config = {
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
};

axios.post(endpoint, data, config)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
