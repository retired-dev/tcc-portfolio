CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    data_cadastro DATE
);

CREATE TABLE pedidos (
    id_pedido INT PRIMARY KEY,
    id_usuario INT,
    data_pedido DATE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);
