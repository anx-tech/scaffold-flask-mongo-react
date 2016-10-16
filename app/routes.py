from app.views import index
from app.views import create


def setup_routes(app):
    app.add_url_rule(
        '/', 
        'index',
        methods=['GET'],
        view_func=index,
    )

    app.add_url_rule(
        '/create',
        'create',
        methods=['POST'],
        view_func=create
    )
