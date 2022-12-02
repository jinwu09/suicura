--@block
create table users (
    user_id INT AUTO_INCREMENT NOT null,
    user_name text NOT null,
    user_password text NOT null,
    user_token text,
    PRIMARY KEY(user_id)
);
CREATE TABLE todolists (
    todo_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    team_id INT ,
    todo_name TEXT NOT NULL,
    todo_description TEXT NOT NULL,
    todo_created datetime NOT NULL,
    -- 0 is active
    -- 1 is archive
    todo_status TINYINT NOT NULL,
    PRIMARY KEY (todo_id)
);
CREATE TABLE collabs (
    collab_id INT NOT NULL AUTO_INCREMENT,
    team_id INT NOT NULL,
    user_id INT NOT NULL,
    todo_id INT NOT NULL,
    PRIMARY KEY (collab_id)
);
CREATE TABLE teams (
    team_id INT NOT NULL AUTO_INCREMENT,
    -- user_id INT NOT NULL,
    team_name TEXT NOT NULL,
    team_description TEXT NOT NULL,
    team_created DATE NOT NULL,
    PRIMARY KEY (team_id)
);
CREATE TABLE team_logs(
    team_log_id INT NOT NULL AUTO_INCREMENT,
    team_id INT NOT NULL,
    log text,
    -- log type is to identify whether a 
    -- 0 is log in
    -- 1 is user task done
    -- 
    log_tyoe INT,
    log_date date not NULL,
    PRIMARY KEY (team_log_id)
);
--@block
show tables

--@block
INSERT INTO users (user_name, user_password) VALUES ("albert", "password" );
INSERT INTO users (user_name, user_password) VALUES ("albert2", "password2" );
INSERT INTO users (user_name, user_password) VALUES ("albert3", "password3" );
INSERT INTO users (user_name, user_password) VALUES ("albert4", "password4" );
INSERT INTO users (user_name, user_password) VALUES ("albert5", "password5" );
INSERT INTO users (user_name, user_password) VALUES ("albert6", "password6" );
INSERT INTO users (user_name, user_password) VALUES ("albert7", "password7" );
--@block
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
--@block
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );