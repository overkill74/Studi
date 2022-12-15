# main.py
from flask import Flask, request
from blueprints.basic_endpoints import blueprint as basic_endpoints
from blueprints.jinja_endpoint import blueprint as jinja_template_blueprint
from blueprints.documented_endpoints import blueprint as documented_endpoint

app = Flask(__name__)
app.config['RESTPLUS_MASK_SWAGGER'] = False

app.register_blueprint(basic_endpoints)
app.register_blueprint(jinja_template_blueprint)
app.register_blueprint(documented_endpoint)

if __name__ == "__main__":
    app.run()

#@app.route('/basic_api/entities', methods=['GET', 'POST'])
#def entities():
#    if request.method == "GET":
#        return {
#            'message': 'This endpoint should return a list of entities',
#            'method': request.method
#        }
#    if request.method == "POST":
#        return {
#            'message': 'This endpoint should create an entity',
#            'method': request.method,
#	    'body': request.json
#        }
#
#@app.route('/basic_api/entities/<int:entity_id>', methods=['GET', 'PUT', 'DELETE'])
#def entity(entity_id):
#    if request.method == "GET":
#        return {
#            'id': entity_id,
#            'message': 'This endpoint should return the entity {} details'.format(entity_id),
#            'method': request.method
#        }
#    if request.method == "PUT":
#        return {
#            'id': entity_id,
#            'message': 'This endpoint should update the entity {}'.format(entity_id),
#            'method': request.method,
#	    'body': request.json
#        }
#    if request.method == "DELETE":
#        return {
#            'id': entity_id,
#            'message': 'This endpoint should delete the entity {}'.format(entity_id),
#            'method': request.method
#        }
#

        
        
    
