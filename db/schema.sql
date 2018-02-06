drop database if exists burger_db;

create database burger_db;

USE burger_db;

drop table if exists burgers;

create table burgers
(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (100) NOT NULL,
devoured boolean default false,
PRIMARY KEY (id)
);

use burger_db;

select *
from burgers;