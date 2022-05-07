DROP DATABASE IF EXISTS movies;

CREATE DATABASE movies;

USE movies; /* run use chat in mysql terminal to be able to access the chat database */

CREATE TABLE movies (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT,
  title VARCHAR(40),
  description VARCHAR(100),
  image_url VARCHAR(80),
  PRIMARY KEY (id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/