-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2022 at 07:34 AM
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
  `team_name` text NOT NULL,
  `team_description` text NOT NULL,
  `team_created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`team_id`, `team_name`, `team_description`, `team_created`) VALUES
(1, 'team sample', 'team description sample', '2022-12-06 14:15:10'),
(2, 'team sample', 'team description sample', '2022-12-06 14:15:10'),
(3, 'team sample', 'team description sample', '2022-12-06 14:15:10'),
(4, 'team sample', 'team description sample', '2022-12-06 14:15:10'),
(5, 'team sample', 'team description sample', '2022-12-06 14:15:10'),
(6, 'team sample', 'team description sample', '2022-12-06 14:15:10'),
(7, 'team sample 2', 'team description sample 2', '2022-12-06 14:15:10'),
(8, 'team sample 2', 'team description sample 2', '2022-12-06 14:15:10'),
(9, 'team sample 2', 'team description sample 2', '2022-12-06 14:15:10'),
(10, 'team sample 2', 'team description sample 2', '2022-12-06 14:15:10'),
(11, 'team sample 2', 'team description sample 2', '2022-12-06 14:15:10');

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
(1, 2, 2, 'log sample', 0, '2022-12-06 14:15:10'),
(2, 2, 2, 'log sample', 0, '2022-12-06 14:15:10'),
(3, 2, 2, 'log sample', 0, '2022-12-06 14:15:10'),
(4, 2, 2, 'log sample', 0, '2022-12-06 14:15:10'),
(5, 2, 2, 'log sample', 0, '2022-12-06 14:15:10'),
(6, 2, 2, 'log sample', 0, '2022-12-06 14:15:10'),
(7, 2, 2, 'log sample', 0, '2022-12-06 14:15:10');

-- --------------------------------------------------------

--
-- Table structure for table `team_user`
--

CREATE TABLE `team_user` (
  `team_user_id` int(11) NOT NULL,
  `team_name` text NOT NULL,
  `team_description` text NOT NULL,
  `team_created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `todo_status` tinyint(4) NOT NULL,
  `todo_archived` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `todolists`
--

INSERT INTO `todolists` (`todo_id`, `user_id`, `team_id`, `todo_name`, `todo_description`, `todo_created`, `todo_status`, `todo_archived`) VALUES
(1, 1, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(2, 1, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(3, 1, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(4, 1, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(5, 1, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(6, 1, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(7, 1, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(8, 1, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(9, 1, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(10, 2, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(11, 2, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(12, 2, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(13, 2, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(14, 2, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(15, 2, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(16, 2, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(17, 2, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(18, 2, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:05', 0, NULL),
(19, 13, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:08', 0, NULL),
(20, 13, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:08', 0, NULL),
(21, 13, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:08', 0, NULL),
(22, 13, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:08', 0, NULL),
(23, 13, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:08', 0, NULL),
(24, 13, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:08', 0, NULL),
(25, 13, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:08', 0, NULL),
(26, 13, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:08', 0, NULL),
(27, 13, NULL, 'todo sample', 'todo desription', '2022-12-06 14:15:08', 0, NULL),
(28, 2, 1, 'todo sample', 'todo desription', '2022-12-06 14:15:10', 0, NULL),
(29, 2, 1, 'todo sample', 'todo desription', '2022-12-06 14:15:10', 0, NULL),
(30, 2, 1, 'todo sample', 'todo desription', '2022-12-06 14:15:10', 0, NULL),
(31, 2, 2, 'todo sample', 'todo desription', '2022-12-06 14:15:10', 0, NULL),
(32, 2, 2, 'todo sample', 'todo desription', '2022-12-06 14:15:10', 0, NULL),
(33, 8, NULL, 'hance form todo', '', '2022-12-07 14:03:21', 1, '2022-12-07 14:03:25'),
(34, 8, NULL, 'hance form todo', '', '2022-12-07 14:03:35', 0, NULL),
(35, 8, NULL, 'jomar and heart add to do modal', '', '2022-12-07 14:03:57', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` text NOT NULL,
  `user_first_name` text NOT NULL,
  `user_last_name` text NOT NULL,
  `user_password` text NOT NULL,
  `user_token` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_first_name`, `user_last_name`, `user_password`, `user_token`) VALUES
(1, 'albert', 'Albert', 'santos', 'password', NULL),
(2, 'albert2', '', '', 'password2', '9b0be121275953afec7ace117d94d7b093eb771f2ce220ca06f9301ef9c8fb4dc988fcfb6f19ebd00252822a80322185743b'),
(3, 'albert3', 'Albert', 'santos', 'password3', NULL),
(4, 'albert4', 'Albert', 'santos', 'password4', NULL),
(5, 'albert5', 'Albert', 'santos', 'password5', NULL),
(6, 'albert6', 'Albert', 'santos', 'password6', NULL),
(7, 'albert7', 'Albert', 'santos', 'password7', NULL),
(8, 'test', 'albert john', 'santos', '$2y$10$YjU1ODY4Mjg0ZTE2ZTljYe43jKLOSXPu.pKtKM10o.KQY8kSZzV9G', 'cfc9eb05719f31b6c0582c41e7a57a7a1f8583fee3a376482d2c0aece65175fc3a1011f219850cc5f1881ac917fb0979b39a');

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
-- Indexes for table `team_user`
--
ALTER TABLE `team_user`
  ADD PRIMARY KEY (`team_user_id`);

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
-- AUTO_INCREMENT for table `team_user`
--
ALTER TABLE `team_user`
  MODIFY `team_user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `todolists`
--
ALTER TABLE `todolists`
  MODIFY `todo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
