import datetime
from app import mongo


def get_all_todos():
    todos = mongo.db.todo.find()  # cursor returned
    return list(todos)


def create_todo(title, text, **kwargs):
    todo = {
        'title': title,
        'text': text,
        'created': datetime.datetime.now()
    }
    todo.update(kwargs)
    result = mongo.db.todo.insert(todo)
    return result
