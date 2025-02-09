from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from sqlalchemy import event


class Subscription(db.Model):
    __tablename__ = 'subscriptions'


    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    tier = db.Column(db.String, nullable=False)
    price = db.Column(db.Float, nullable=False)
    duration = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, default=func.now())
    updated_at = db.Column(db.DateTime, default=func.now(), onupdate=func.now())
    users = relationship('User', back_populates='subscription', cascade="all, delete-orphan, save-update")


    def to_dict(self):
        return {
            'id': self.id,
            'tier': self.tier,
            'price': self.price,
            'duration': self.duration
        }
@event.listens_for(Subscription.__table__, 'after_create', once=True)
def create_subscriptions(*args, **kw):
    db.session.add(Subscription(tier='free', price=0, duration='annual'))
    db.session.add(Subscription(tier='standard', price=4.99, duration='monthly'))
    db.session.add(Subscription(tier='standard', price=49.99, duration='annual'))
    db.session.add(Subscription(tier='premium', price=9.99, duration='monthly'))
    db.session.add(Subscription(tier='premium', price=99.99, duration='annual'))
    db.session.commit()
