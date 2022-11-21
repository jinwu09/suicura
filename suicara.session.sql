

--@block
create table 'user' (
    'user_id' INT NOT NULL AUTO_INCREMENT,
    'user_name' text NOT NULL,
    'password' varchar(255) NOT NULL
    PRIMARY KEY('user_id')
)ENGINE = InnoDB;;
--@block
CREATE TABLE `todolist` (`
    todo_id` INT NOT NULL AUTO_INCREMENT ,
    `user_id` INT NOT NULL ,
    `todo_name` TEXT NOT NULL ,
    `todo_description` TEXT NOT NULL ,
PRIMARY KEY (`todo_id`)
) ENGINE = InnoDB;

--@block
show tables