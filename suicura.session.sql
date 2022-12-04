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
    team_created datetime NOT NULL,
    PRIMARY KEY (team_id)
);
CREATE TABLE team_user (
    team_user_id INT NOT NULL AUTO_INCREMENT,
    -- user_id INT NOT NULL,
    team_name TEXT NOT NULL,
    team_description TEXT NOT NULL,
    team_created datetime NOT NULL,
    PRIMARY KEY (team_id)
);
CREATE TABLE team_logs(
    team_log_id INT NOT NULL AUTO_INCREMENT,
    team_id INT NOT NULL,
    -- who user do it or action made from user
    user_id int NOT NULL,
    log text,
    -- log type is to identify whether a 
    -- 0 is log in
    -- 1 is user task done
    -- 2 is created
    log_type INT,
    log_date datetime not NULL,
    PRIMARY KEY (team_log_id)
);
--@block
show tables
--@block
drop table users, todolists, collabs, teams, team_logs
--@block 
INSERT INTO users (user_name, user_password) VALUES ("albert", "password" );
INSERT INTO users (user_name, user_password) VALUES ("albert2", "password2" );
INSERT INTO users (user_name, user_password) VALUES ("albert3", "password3" );
INSERT INTO users (user_name, user_password) VALUES ("albert4", "password4" );
INSERT INTO users (user_name, user_password) VALUES ("albert5", "password5" );
INSERT INTO users (user_name, user_password) VALUES ("albert6", "password6" );
INSERT INTO users (user_name, user_password) VALUES ("albert7", "password7" );
-- put data in todolists for user 1
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (1, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
-- put data in todolist for user 2
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, todo_name, todo_description, todo_status, todo_created) VALUES (2, "todo sample","todo desription", 0, CURRENT_TIMESTAMP );
-- for team todolist
INSERT INTO todolists (user_id, team_id ,todo_name, todo_description, todo_status, todo_created) VALUES (2, 1,"todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, team_id ,todo_name, todo_description, todo_status, todo_created) VALUES (2, 1,"todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, team_id ,todo_name, todo_description, todo_status, todo_created) VALUES (2, 1,"todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, team_id ,todo_name, todo_description, todo_status, todo_created) VALUES (2, 2,"todo sample","todo desription", 0, CURRENT_TIMESTAMP );
INSERT INTO todolists (user_id, team_id ,todo_name, todo_description, todo_status, todo_created) VALUES (2, 2,"todo sample","todo desription", 0, CURRENT_TIMESTAMP );
-- put data in teams
INSERT INTO teams (user_id, team_name, team_description, team_created) VALUES (1, "team sample", "team description sample", CURRENT_TIMESTAMP);
INSERT INTO teams (user_id, team_name, team_description, team_created) VALUES (1, "team sample", "team description sample", CURRENT_TIMESTAMP);
INSERT INTO teams (user_id, team_name, team_description, team_created) VALUES (1, "team sample", "team description sample", CURRENT_TIMESTAMP);
INSERT INTO teams (user_id, team_name, team_description, team_created) VALUES (1, "team sample", "team description sample", CURRENT_TIMESTAMP);
INSERT INTO teams (user_id, team_name, team_description, team_created) VALUES (1, "team sample", "team description sample", CURRENT_TIMESTAMP);
INSERT INTO teams (user_id, team_name, team_description, team_created) VALUES (1, "team sample", "team description sample", CURRENT_TIMESTAMP);
INSERT INTO teams (user_id, team_name, team_description, team_created) VALUES (2, "team sample 2", "team description sample 2", CURRENT_TIMESTAMP);
INSERT INTO teams (user_id, team_name, team_description, team_created) VALUES (2, "team sample 2", "team description sample 2", CURRENT_TIMESTAMP);
INSERT INTO teams (user_id, team_name, team_description, team_created) VALUES (2, "team sample 2", "team description sample 2", CURRENT_TIMESTAMP);
INSERT INTO teams (user_id, team_name, team_description, team_created) VALUES (2, "team sample 2", "team description sample 2", CURRENT_TIMESTAMP);
INSERT INTO teams (user_id, team_name, team_description, team_created) VALUES (2, "team sample 2", "team description sample 2", CURRENT_TIMESTAMP);
-- team logs
INSERT INTO team_logs (team_id, user_id, log, log_type, log_date) VALUES (2, 2, "log sample",0, CURRENT_TIMESTAMP);
INSERT INTO team_logs (team_id, user_id, log, log_type, log_date) VALUES (2, 2, "log sample",0, CURRENT_TIMESTAMP);
INSERT INTO team_logs (team_id, user_id, log, log_type, log_date) VALUES (2, 2, "log sample",0, CURRENT_TIMESTAMP);
INSERT INTO team_logs (team_id, user_id, log, log_type, log_date) VALUES (2, 2, "log sample",0, CURRENT_TIMESTAMP);
INSERT INTO team_logs (team_id, user_id, log, log_type, log_date) VALUES (2, 2, "log sample",0, CURRENT_TIMESTAMP);
INSERT INTO team_logs (team_id, user_id, log, log_type, log_date) VALUES (2, 2, "log sample",0, CURRENT_TIMESTAMP);
INSERT INTO team_logs (team_id, user_id, log, log_type, log_date) VALUES (2, 2, "log sample",0, CURRENT_TIMESTAMP);
