INSERT INTO usuarios (id_usuario, nome, email, data_cadastro)
VALUES (1, 'Ana Silva', 'ana@email.com', SYSDATE);

SELECT nome, email FROM usuarios;

UPDATE usuarios
SET email = 'novo@email.com'
WHERE id_usuario = 1;

DELETE FROM usuarios
WHERE id_usuario = 1;
