from sqlalchemy import create_engine, Column, Integer, String, Date, ForeignKey
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()

class Usuario(Base):
    __tablename__ = 'usuarios'
    id_usuario = Column(Integer, primary_key=True)
    nome = Column(String(100))
    email = Column(String(150))

class Pedido(Base):
    __tablename__ = 'pedidos'
    id_pedido = Column(Integer, primary_key=True)
    id_usuario = Column(Integer, ForeignKey('usuarios.id_usuario'))
    usuario = relationship("Usuario")

engine = create_engine('sqlite:///banco.db')
Base.metadata.create_all(engine)
