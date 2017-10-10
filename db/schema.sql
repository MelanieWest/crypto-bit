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
    exch_date DATE ON UPDATE CURRENT_DATE,
    PRIMARY KEY (id)
);

