from flask import Blueprint, jsonify, request
from app.models import Subscription

subscription_routes = Blueprint('subscriptions', __name__)


@subscription_routes.route('/')
def subscriptions():
    """
    Query for all subscriptions and returns them in a list of subscription dictionaries
    """

    subscriptions = Subscription.query.all()
    return {'subscriptions': [subscription.to_dict() for subscription in subscriptions]}


@subscription_routes.route('/<int:id>')
def subscription(id):
    """
    Query for a subscription by id and returns that subscription in a dictionary
    """
    subscription = Subscription.query.get(id)
    return subscription.to_dict()

@subscription_routes.route('/tiers', methods=['POST'])
def submit():
    selected_options = request.form.getlist('checkbox')
    
