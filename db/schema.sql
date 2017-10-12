DROP DATABASE IF EXISTS crypto;

CREATE DATABASE crypto;

USE crypto;

CREATE TABLE currency
(
    id INT NOT NULL AUTO_INCREMENT,
    coin_name VARCHAR(50) NOT NULL,
    predict_val INT NOT NULL, 
    emot BOOLEAN DEFAULT FALSE,
    act_val INT NOT NULL,
    exch_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- CREATE TABLE login
-- (
--     id INT NOT NULL AUTO_INCREMENT,
--     userName VARCHAR(50) NOT NULL,
--     password VARCHAR(50) 
--     PRIMARY KEY (id)
-- );

