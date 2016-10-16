from app.views import create
from app.views import index
from app.views import list_all


def setup_routes(app):
    app.add_url_rule(
        '/', 
        'index',
        methods=['GET'],
        view_func=index,
    )

    app.add_url_rule(
        '/list',
        'list',
        methods=['GET'],
        view_func=list_all,
    )
    app.add_url_rule(
        '/create',
        'create',
        methods=['POST'],
        view_func=create,
    )
