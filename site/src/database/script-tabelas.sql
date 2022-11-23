
CREATE DATABASE boop;

USE boop;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table formulario(
	idFormulario int primary key AUTO_INCREMENT,
	fkUsuario int, foreign key (fkUsuario) references usuario(id),
	champion varchar(45)
);


create table quiz(
idQuiz int primary key auto_increment,
fkUsuario int, foreign key (fkusuario) references usuario(id),
nota int);

select * from usuario;

select * from formulario;

select * from quiz;

select count(idQuiz), max(nota), round(avg(nota),0), min(nota) from quiz;

select usuario.nome, quiz.nota from usuario join quiz on fkUsuario = id  where quiz.nota = (select max(nota) from quiz) group by usuario.nome order by nota  desc limit 5;