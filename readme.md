
## DB schema ⬇️

## Tabella Films
CREATE TABLE Films (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    year YEAR CHECK (year <= YEAR(CURRENT_DATE)),
    poster VARCHAR(255)
)

## Tabella Users
CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
)

## Tabella Reviews
CREATE TABLE Reviews (
    id INT PRIMARY KEY AUTO_INCREMENT,
    film_id INT NOT NULL,
    user_id INT NOT NULL,
    review TEXT NOT NULL,
    vote TINYINT,  -- Voto della recensione
    FOREIGN KEY (film_id) REFERENCES Films(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
)

## Trigger per aggiornamento voto film dopo l'inserimento di una recensione
DELIMITER //

CREATE TRIGGER update_film_vote_after_insert
AFTER INSERT ON Reviews
FOR EACH ROW
BEGIN
    UPDATE Films
    SET vote = (
        SELECT AVG(vote) 
        FROM Reviews 
        WHERE film_id = NEW.film_id
    )
    WHERE id = NEW.film_id;
END//

DELIMITER 

## Trigger per aggiornamento voto film dopo l'aggiornamento di una recensione
DELIMITER //

CREATE TRIGGER update_film_vote_after_update
AFTER UPDATE ON Reviews
FOR EACH ROW
BEGIN
    UPDATE Films
    SET vote = (
        SELECT AVG(vote) 
        FROM Reviews 
        WHERE film_id = OLD.film_id
    )
    WHERE id = OLD.film_id;
END//

DELIMITER 

## Trigger per aggiornamento voto film dopo la cancellazione di una recensione
DELIMITER //

CREATE TRIGGER update_film_vote_after_delete
AFTER DELETE ON Reviews
FOR EACH ROW
BEGIN
    UPDATE Films
    SET vote = (
        SELECT AVG(vote) 
        FROM Reviews 
        WHERE film_id = OLD.film_id
    )
    WHERE id = OLD.film_id;
END//

DELIMITER 
