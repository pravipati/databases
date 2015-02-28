CREATE DATABASE superduperchat4;

USE superduperchat4;

/* Describe your table here.*/
CREATE TABLE messages
  (time varchar(50),
  text varchar(50));

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms
  (name varchar(50));
  /* Describe your table here.*/



CREATE TABLE users
  (name varchar(50),
  friends varchar(50));
  /* Describe your table here.*/


-- CREATE TABLE usersTOrooms (
--    Describe your table here.
-- );


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

