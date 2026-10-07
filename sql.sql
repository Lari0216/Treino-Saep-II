CREATE TABLE clientes (
	id SERIAL PRIMARY KEY, 
	nome VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL 
)

CREATE TABLE cpf (
	id SERIAL PRIMARY KEY, 
	cpf VARCHAR(100) NOT NULL,
	id_clientes INT,
	FOREIGN KEY (id_clientes) REFERENCES clientes(id)
)

SELECT * FROM clientes;
SELECT * FROM cpf;

INSERT INTO cpf (cpf, id_clientes) VALUES 
(12345678901, 1),
(98765432100, 2),
(45678912300, 3),
(11122233344, 4),
(55566677788, 5)
;

INSERT INTO clientes (nome, email) VALUES 
('Leandro Borges', 'leandro_borges@gmail.com'),
('Amanda Prado', 'amanda_prado@gmail.com'),
('Bruce Castro', 'bruce_castro@gmail.com'),
('Miranda Ferreira', 'miranda_ferreira@gmail.com'),
('Nicole Silveira', 'nicole_silveira@gmail.com')
;

SELECT 
	clientes.nome,
	clientes.email,
	cpf.cpf
	FROM
	clientes 
	JOIN cpf 
	ON clientes.id = cpf.id_clientes