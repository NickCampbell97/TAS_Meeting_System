from pymongo import MongoClient
from datetime import datetime
from random import randint
from flask import jsonify

client = MongoClient('mongodb+srv://nick:simplepass@tas.kuads7c.mongodb.net/')
db = client['presentationdb']
comment_collection = db['comments']
file_collection = db['files']
deck_collection = db['slidedecks']
slide_collection = db['slides']

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

def create_deck(i):
    data = {'name': f'Presentation {i}', 'date_created': get_date_string()}
    slide_list = []
    for j in range(randint(1, 10)):
        s = f'Slide {randint(1, 100)}'
        slide = {
            'slide_name': str(s),
            'header': 'sample header', 
            'body': 'This is some body content', 
            'files': ['path/to/f1', 'path/to/f2']
            }
        slide_list.append(slide)
    data['slides'] = slide_list
    return data

def fetch_decks():
    slideDecks = [deck['name'] for deck in deck_collection.find({}, {'name': 1, '_id': 0})]
    for i in range(len(slideDecks)):
        print(slideDecks[i])

def fetch_individual_slide(deck_name, slide_name):
    slide_deck = deck_collection.find_one({'name': deck_name})
    if slide_deck:
        slides = slide_deck.get('slides', [])
        selected_slide = next((slide for slide in slides if slide['slide_name'] == slide_name), None)
        if selected_slide:
            print(selected_slide)
            return jsonify(selected_slide)
        else:
            print('could not select slide')
            return jsonify({'error': 'Slide not Found'}), 404
    else:
        print('Could not get slide deck')
        return jsonify({'error': 'Deck not Found'})


#fetch_decks()
        
#fetch_individual_slide('Presentation: 1', 'Slide 86')
        
'''
for i in range(1, 16):
    deck = create_deck(i)
    insert_data(deck, deck_collection)
'''

