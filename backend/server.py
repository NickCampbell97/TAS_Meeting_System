from flask import Flask, jsonify, request
from pymongo import MongoClient
from datetime import datetime
import os

app = Flask(__name__)

# mongo connection
client = MongoClient('connectionstring')
db = client['presentationdb']
deck_collection = db['slidedecks']

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

# get data from slide
@app.route('/api/select-slide/<deck_name>/<slide_name>')
def fetch_individual_slide(deck_name, slide_name):
    print(f'{deck_name}: {slide_name}')
    slide_deck = deck_collection.find_one({'name': deck_name})
    if slide_deck:
        slides = slide_deck.get('slides', [])
        selected_slide = next((slide for slide in slides if slide['slide_name'] == slide_name), None)
        if selected_slide:
            return jsonify(selected_slide)
        else:
            return jsonify({'error': 'Slide not Found'}), 404
    else:
        return jsonify({'error': 'Deck not Found'}), 404

# get slide deck names
@app.route('/api/slide-decks')
def get_deck_names():
    slideDecks = [deck['name'] for deck in deck_collection.find({}, {'name': 1, '_id': 0})]
    return jsonify({'slideDecks': slideDecks})

# get deck list from db
@app.route('/api/slides/<deck_name>')
def get_slides(deck_name):
    slide_deck = deck_collection.find_one({'name': deck_name})
    if slide_deck:
        slide_names = [slide['slide_name'] for slide in slide_deck['slides']]
        return jsonify({'slides': slide_names})
    else:
        return jsonify({'error': 'Slide deck not found'}), 404

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
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    upload_directory = os.path.join(os.getcwd(), 'documents')

    os.makedirs(upload_directory, exist_ok=True)

    file_path = os.path.join(upload_directory, file.filename)
    file.save(file_path)
    return jsonify({'message': 'File uploaded successfully'}), 200


if __name__ == '__main__':
    app.run(debug=True)
