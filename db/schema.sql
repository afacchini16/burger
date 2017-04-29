CREATE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT auto_increment NOT NULL;
    burger_name VARCHAR(255) NOT NULL;
    devoured boolean NOT NULL DEFAULT false;
    date VARCHAR(30) NOT NULL;
    date TIMESTAMP;

    PRIMARY KEY(id);
);

SET time_zone = '+00:00';