from flask import Flask, request
import os
import uuid
from datetime import datetime

app = Flask(__name__)

responses_dir = '.responses'
if not os.path.exists(responses_dir):
    os.makedirs(responses_dir)

@app.route('/', methods=['GET', 'POST'])
def handle_form():
    if request.method == 'POST':
        filename = f"{uuid.uuid4()}.txt"
        filepath = os.path.join(responses_dir, filename)
        
        with open(filepath, 'w') as f:
            f.write(f"Timestamp: {datetime.now().isoformat()}\n")
            f.write(f"Form Data:\n")
            for key, value in request.form.items():
                f.write(f"  {key}: {value}\n")
        
        print(f"Form saved to {filepath}")
        return "Form received and saved!", 200
    return "Server running. Send POST requests to save form data.", 200

if __name__ == '__main__':
    app.run(debug=False, host='127.0.0.1', port=5000)
