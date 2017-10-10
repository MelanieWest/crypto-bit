
USE crypto;

-- CREATE TABLE currency
-- (
--     id INT NOT NULL AUTO_INCREMENT,
--     coin_name VARCHAR(50) NOT NULL,
--     predict_val INT NOT NULL, 
--     emot BOOLEAN DEFAULT FALSE,
--     act_val INT NOT NULL,
--     exch_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     PRIMARY KEY (id)
-- );


INSERT INTO currency (coin_name, predict_val, emot, act_val, exch_date) 
VALUES ("Example", 100, false, 105, CURRENT_TIMESTAMP);