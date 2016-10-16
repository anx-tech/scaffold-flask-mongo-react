import http.client as httplib

from flask import jsonify
from flask import render_template
from flask import request

from jsonschema import validate
from jsonschema import ValidationError

from app.bl.todo import get_all_todos
from app.bl.todo import create_todo
from app.bl.validation import todo_schema


def index():
    return render_template('index.html')


def list_all():
    todos = get_all_todos()
    return jsonify({
        'status': 'ok',
        'result': todos,
    })


def create():
    data = getattr(request, 'json')
    try:
        validate(data, todo_schema)
    except ValidationError as error:
        return jsonify({
            'status': 'error',
            'message': error.message,
        }), httplib.BAD_REQUEST

    created_id = create_todo(**data)
    return jsonify({
        'status': 'ok',
        'result': created_id,
    })
