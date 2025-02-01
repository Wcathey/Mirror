from .db import db, environment, SCHEMA
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func


class Subscription(db.Model):
    __tablename__ = 'subscriptions'


    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    tier = db.Column(db.String, nullable=False)
    price = db.Column(db.Float, nullable=False)
    duration = db.Column(db.String)
    created_at = db.Column(db.DateTime, default=func.now())
    updated_at = db.Column(db.DateTime, default=func.now(), onupdate=func.now())
    users = relationship('User', back_populates='subscription', cascade="all, delete-orphan, save-update")


    @property
    def price(self):
        return self.price

    @price.setter
    def price(self, new_price):
        self.price = new_price


    def to_dict(self):
        return {
            'id': self.id,
            'price': self.price,
            'duration': self.duration
        }
