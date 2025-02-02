from flask import Blueprint, jsonify, request
from app.models import Subscription, User

subscription_routes = Blueprint('subscriptions', __name__)


@subscription_routes.route('/')
def get_subscriptions():
    """
    Query for all subscriptions and returns them in a list of subscription dictionaries
    """

    subscriptions = Subscription.query.all()

    return {'subscriptions': [subscription.to_dict() for subscription in subscriptions]}


@subscription_routes.route('/<tier>/<duration>')
def subscription(tier, duration):
    
    tiers = Subscription.query.filter(Subscription.tier == tier, Subscription.duration == duration)
    return {'tiers': [subscription.to_dict() for subscription in tiers]}
