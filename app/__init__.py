import os
import sys
import logging

from flask import Flask
from flask_script import Manager
from flask_pymongo import PyMongo

from app.util.json import JSONEncoder


app = Flask(__name__, static_folder='../static')
manager = Manager(app)
filepath = os.path.abspath(os.getenv('APP_CONFIG'))
app.config.from_pyfile(filepath)

# MongoDB setup
mongo = PyMongo(app)

# Set up custom json encoder to serialize/deserialize
# mongo ObjectID properly
app.json_encoder = JSONEncoder


# Configure logging
formatter = logging.Formatter(
    "[%(name)s][%(levelname)s] %(filename)s:%(lineno)d - %(message)s"
)
logger = logging.getLogger('user-interaction')
handler = logging.StreamHandler(stream=sys.stderr)
handler.setFormatter(formatter)
logger.addHandler(handler)
logger.setLevel(logging.DEBUG)

# Import setup_routes at very end 
# to avoid cyclic dependencies
from app.routes import setup_routes  # NOQA
setup_routes(app)
