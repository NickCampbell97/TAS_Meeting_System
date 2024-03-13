from flask import Flask, jsonify, request
from pymongo import MongoClient
from datetime import datetime
import os

app = Flask(__name__)

# mongo connection
client = MongoClient('mongodb+srv://njc1749:p7hokzyhPY0oWXuv@tas.medfbei.mongodb.net/?retryWrites=true&w=majority&appName=TAS')
db = client['presentationdb']
comment_collection = db['comments']
file_collection = db['files']
deck_collection = db['slidedecks']
slide_collection = db['slides']

# inserting data in mongo
def insert_data(data, collection):
    try:
        result = collection.insert_one(data)
        print("Data inserted successfully. Inserted ID:", result.inserted_id)
    except Exception as e:
        print("Error inserting data:", e)

# get date time as a string instead of date object for mongo to accept
def get_date_string():
    current_date = datetime.now().strftime('%B %d, %Y')
    return str(current_date)

# sample slide decks with slides
slide_decks = {
    'Test Deck 1': ['Slide 1'],
    'Test Deck 2': ['Slide 113', 'Slide 117'],
    'Test Deck 3': ['Slide 99', 'Slide 111', 'Slide 119'],
    'Test Deck 4': ['Slide 2', 'Slide 13', 'Slide 15'],
    'Test Deck 5': ['Slide 7', 'Slide 9', 'Slide 27']
}

dummy_slides = {
    'Slide 1': {
        'header': 'Slide 1 Header Content',
        'body': 'Slide 1 Body Content 1',
        'documents': 'dummyDocument.csv'
    }
}

@app.route('/api/slide-info/<slide_name>')
def get_slide_info(slide_name):
    print(f'Slide Name: {slide_name}')
    slideDataList = []
    temp_info = dummy_slides.get(slide_name, {})
    slideDataList.append(temp_info['header'])
    slideDataList.append(temp_info['body'])
    slideDataList.append(temp_info['documents'])
    return jsonify({'slideDataList': slideDataList})

# get decks from dummy deck data - will change to get from db
@app.route('/api/slide-decks')
def get_slide_decks():
    slideDecks = list(slide_decks.keys())
    return jsonify({'slideDecks': slideDecks})

# get deck list from dummy data - will change to get slides from db
@app.route('/api/slides/<deck_name>')
def get_slides(deck_name):
    slides = slide_decks.get(deck_name, [])
    return jsonify({'slides': slides})

# insert new deck in db
@app.route('/api/slide-decks/new-deck', methods=['POST'])
def create_new_deck():
    if request.method == 'POST':
        received_data = request.json
        name = received_data.get('name')
        date = get_date_string()
        new_deck_data = {
            'name': name,
            'date_created': date,
            'slides': []
        }
        insert_data(new_deck_data, deck_collection)
        print(f'Name: {name}')
        return jsonify({'message': 'Received'}), 200
    else:
        return jsonify({'error': 'Method not Allowed'}), 405
    

@app.route('/api/upload-doc', methods=['POST'])
def upload_document():
    #  Check if the POST request has the file part
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']


    # If the user does not select a file, the browser submits an empty file without a filename
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Assuming you want to store documents in a subdirectory named 'documents' within the backend directory
    upload_directory = os.path.join(os.getcwd(), 'documents')


    # Create the directory if it doesn't exist
    os.makedirs(upload_directory, exist_ok=True)


    # Save the file to the upload directory
    file_path = os.path.join(upload_directory, file.filename)
    file.save(file_path)


    return jsonify({'message': 'File uploaded successfully'}), 200


if __name__ == '__main__':
    app.run(debug=True)
