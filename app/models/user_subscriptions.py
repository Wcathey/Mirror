from .db import db, environment, SCHEMA



user_subscriptions = db.Table(
    'user_subscriptions',
    db.Model.metadata,
    db.Column('users', db.Integer, db.ForeignKey('users.id'), primary_key=True ),
    db.Column('subscriptions', db.Integer, db.ForeignKey('subscriptions.id'), primary_key=True )
)

if environment == "production":
    user_subscriptions.schema = SCHEMA
