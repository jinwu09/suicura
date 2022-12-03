-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2022 at 10:10 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `suicura`
--

-- --------------------------------------------------------

--
-- Table structure for table `collabs`
--

CREATE TABLE `collabs` (
  `collab_id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `todo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `team_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `team_name` text NOT NULL,
  `team_description` text NOT NULL,
  `team_created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`team_id`, `user_id`, `team_name`, `team_description`, `team_created`) VALUES
(1, 1, 'team sample', 'team description sample', '2022-12-03 16:42:26'),
(2, 1, 'team sample', 'team description sample', '2022-12-03 16:42:26'),
(3, 1, 'team sample', 'team description sample', '2022-12-03 16:42:26'),
(4, 1, 'team sample', 'team description sample', '2022-12-03 16:42:26'),
(5, 1, 'team sample', 'team description sample', '2022-12-03 16:42:26'),
(6, 1, 'team sample', 'team description sample', '2022-12-03 16:42:26'),
(7, 2, 'team sample 2', 'team description sample 2', '2022-12-03 16:42:26'),
(8, 2, 'team sample 2', 'team description sample 2', '2022-12-03 16:42:26'),
(9, 2, 'team sample 2', 'team description sample 2', '2022-12-03 16:42:26'),
(10, 2, 'team sample 2', 'team description sample 2', '2022-12-03 16:42:26'),
(11, 2, 'team sample 2', 'team description sample 2', '2022-12-03 16:42:26');

-- --------------------------------------------------------

--
-- Table structure for table `team_logs`
--

CREATE TABLE `team_logs` (
  `team_log_id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `log` text DEFAULT NULL,
  `log_type` int(11) DEFAULT NULL,
  `log_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `team_logs`
--

INSERT INTO `team_logs` (`team_log_id`, `team_id`, `user_id`, `log`, `log_type`, `log_date`) VALUES
(1, 2, 2, 'log sample', 0, '2022-12-03 16:42:26'),
(2, 2, 2, 'log sample', 0, '2022-12-03 16:42:26'),
(3, 2, 2, 'log sample', 0, '2022-12-03 16:42:26'),
(4, 2, 2, 'log sample', 0, '2022-12-03 16:42:26'),
(5, 2, 2, 'log sample', 0, '2022-12-03 16:42:26'),
(6, 2, 2, 'log sample', 0, '2022-12-03 16:42:26'),
(7, 2, 2, 'log sample', 0, '2022-12-03 16:42:26');

-- --------------------------------------------------------

--
-- Table structure for table `todolists`
--

CREATE TABLE `todolists` (
  `todo_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `team_id` int(11) DEFAULT NULL,
  `todo_name` text NOT NULL,
  `todo_description` text NOT NULL,
  `todo_created` datetime NOT NULL,
  `todo_status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `todolists`
--

INSERT INTO `todolists` (`todo_id`, `user_id`, `team_id`, `todo_name`, `todo_description`, `todo_created`, `todo_status`) VALUES
(1, 1, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(2, 1, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(3, 1, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(4, 1, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(5, 1, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(6, 1, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(7, 1, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(8, 1, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(9, 1, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(10, 2, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(11, 2, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(12, 2, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(13, 2, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(14, 2, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(15, 2, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(16, 2, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(17, 2, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(18, 2, NULL, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(19, 2, 1, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(20, 2, 1, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(21, 2, 1, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(22, 2, 2, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0),
(23, 2, 2, 'todo sample', 'todo desription', '2022-12-03 16:42:26', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` text NOT NULL,
  `user_password` text NOT NULL,
  `user_token` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_password`, `user_token`) VALUES
(1, 'albert', 'password', NULL),
(2, 'albert2', 'password2', NULL),
(3, 'albert3', 'password3', NULL),
(4, 'albert4', 'password4', NULL),
(5, 'albert5', 'password5', NULL),
(6, 'albert6', 'password6', NULL),
(7, 'albert7', 'password7', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `collabs`
--
ALTER TABLE `collabs`
  ADD PRIMARY KEY (`collab_id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`team_id`);

--
-- Indexes for table `team_logs`
--
ALTER TABLE `team_logs`
  ADD PRIMARY KEY (`team_log_id`);

--
-- Indexes for table `todolists`
--
ALTER TABLE `todolists`
  ADD PRIMARY KEY (`todo_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `collabs`
--
ALTER TABLE `collabs`
  MODIFY `collab_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `team_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `team_logs`
--
ALTER TABLE `team_logs`
  MODIFY `team_log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `todolists`
--
ALTER TABLE `todolists`
  MODIFY `todo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
