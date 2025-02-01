"""empty message

Revision ID: 4eab422247d9
Revises: a5bece552f31
Create Date: 2025-01-31 18:22:04.635608

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4eab422247d9'
down_revision = 'a5bece552f31'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('subscriptions', schema=None) as batch_op:
        batch_op.add_column(sa.Column('tier', sa.String(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('subscriptions', schema=None) as batch_op:
        batch_op.drop_column('tier')

    # ### end Alembic commands ###
