SELECT u.nome, COUNT(p.id_pedido) AS total_pedidos
FROM usuarios u
INNER JOIN pedidos p ON u.id_usuario = p.id_usuario
GROUP BY u.nome
HAVING COUNT(p.id_pedido) > 1;
