
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


select * from formulario;

select * from quiz;