import requests

url = "https://chat.openai.com/g/g-wOyC79hLg-voter-advocate"
payload = {
    "prompt": "My boss has decided to host a ballet-filling party I'm not sure how I feel about that."
}
headers = {
    "Authorization": "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",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

if response.status_code == 200:
    print("Response:", response.json())
else:
    print("Error:", response.status_code)
