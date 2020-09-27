-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2020 at 11:43 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `payment`
--

-- --------------------------------------------------------

--
-- Table structure for table `pin`
--

CREATE TABLE `pin` (
  `pinId` int(11) NOT NULL,
  `pin` int(6) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pin`
--

INSERT INTO `pin` (`pinId`, `pin`, `userId`) VALUES
(1, 111111, 1),
(2, 123456, 2),
(3, 333333, 3),
(4, 444444, 4),
(5, 555555, 5),
(6, 666666, 6),
(7, 777777, 7),
(8, 888888, 8);

-- --------------------------------------------------------

--
-- Table structure for table `transactionin`
--

CREATE TABLE `transactionin` (
  `transactionId` int(11) NOT NULL,
  `senderId` int(11) NOT NULL,
  `receiverId` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `notes` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactionin`
--

INSERT INTO `transactionin` (`transactionId`, `senderId`, `receiverId`, `amount`, `createdAt`, `notes`) VALUES
(1, 1, 2, 100000, '2020-09-27 08:56:25', 'Buat Kondangan'),
(2, 2, 3, 200000, '2020-09-27 08:57:04', 'Bayar Utang'),
(3, 7, 8, 2500000, '2020-09-27 08:57:34', 'Beli Perfect Grade Gundam'),
(4, 6, 1, 100000, '2020-09-27 08:57:58', 'Beli Pulsa'),
(5, 2, 1, 40000, '2020-09-27 09:12:00', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `transactionout`
--

CREATE TABLE `transactionout` (
  `transactionId` int(11) NOT NULL,
  `senderId` int(11) NOT NULL,
  `receiverId` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `notes` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactionout`
--

INSERT INTO `transactionout` (`transactionId`, `senderId`, `receiverId`, `amount`, `createdAt`, `notes`) VALUES
(1, 1, 2, 100000, '2020-09-25 16:09:47', 'Buat Kondangan'),
(2, 2, 3, 200000, '2020-09-25 16:11:36', 'Bayar Utang'),
(3, 7, 8, 2500000, '2020-09-25 16:13:44', 'Beli Perfect Grade Gundam'),
(5, 6, 1, 100000, '2020-09-27 08:13:06', 'Beli Pulsa'),
(6, 1, 2, 40000, '2020-09-27 09:18:04', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `firstName` varchar(32) NOT NULL,
  `lastName` varchar(32) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `phone` varchar(32) NOT NULL,
  `image` varchar(512) NOT NULL,
  `balance` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `username`, `firstName`, `lastName`, `email`, `password`, `phone`, `image`, `balance`, `createdAt`) VALUES
(1, 'soloplayer', 'John', 'Smith', 'soloplayer@gmail.com', '$2a$10$5ykbYimPSraVwAPZDjiMv.k2o1vjnofw2BHjypbuWOzFUaAai4YSm', '0123456789', 'https://github.com/Friemorn/BackEnd-PaymentApp-ZWallet/blob/master/www.freepik.comfree-iconmale-user-shadow_751026.htm%23page=1&query=user&position=2.png?raw=true', 200000, '2020-09-25 16:08:52'),
(2, 'dewo', 'Dewondo', 'Friemorn', 'df7@gmail.com', '$2a$10$FXtDLIZRjrcAGGj2XfBP..ntU/2TIivYJ60dLxWJhx2RWgcTewwcq', '08123456789', 'http://localhost:4000/api/v1/uploads/2020-09-25T15_57_30.298Ztibo.jpg', 100000, '2020-09-25 16:08:46'),
(3, 'alan', 'John', 'Smith', 'alan@gmail.com', '$2a$10$ivM46XQtjQerEzE.m5u9p.lMJOoHLiIU04UoMKfVIiBuN7a4S/tWS', '0123456789', 'https://github.com/Friemorn/BackEnd-PaymentApp-ZWallet/blob/master/www.freepik.comfree-iconmale-user-shadow_751026.htm%23page=1&query=user&position=2.png?raw=true', 500000, '2020-09-25 16:10:19'),
(4, 'erlangga', 'John', 'Smith', 'erlangga@gmail.com', '$2a$10$So6ij.pe/PtAsNt7OJFjd.4OhrD91I9mDoYw5FflTJ.Ke1plRiwR2', '0123456789', 'https://github.com/Friemorn/BackEnd-PaymentApp-ZWallet/blob/master/www.freepik.comfree-iconmale-user-shadow_751026.htm%23page=1&query=user&position=2.png?raw=true', 200000, '2020-09-25 16:10:30'),
(5, 'kusuma', 'John', 'Smith', 'kusuma@gmail.com', '$2a$10$zwRx1N/pBaKba2K7Anr/L.EQmuYtzeao913gGw1IORexdCPT8jeO6', '0123456789', 'https://github.com/Friemorn/BackEnd-PaymentApp-ZWallet/blob/master/www.freepik.comfree-iconmale-user-shadow_751026.htm%23page=1&query=user&position=2.png?raw=true', 700000, '2020-09-25 16:12:56'),
(6, 'ardiyanto', 'John', 'Smith', 'ardiyanto@gmail.com', '$2a$10$N8X6ke.fCgmIRq6jVF86bOb254iC0FokcX0FHHrnj7jlNNqx/AJ0e', '0123456789', 'https://github.com/Friemorn/BackEnd-PaymentApp-ZWallet/blob/master/www.freepik.comfree-iconmale-user-shadow_751026.htm%23page=1&query=user&position=2.png?raw=true', 500000, '2020-09-25 16:12:52'),
(7, 'dewondo', 'John', 'Smith', 'dewondo@gmail.com', '$2a$10$WhlB6xFAsIfetPqeI4QtGOAoP6lCrbggc0tEuLS0f0BDaVuCRSP9K', '0123456789', 'https://github.com/Friemorn/BackEnd-PaymentApp-ZWallet/blob/master/www.freepik.comfree-iconmale-user-shadow_751026.htm%23page=1&query=user&position=2.png?raw=true', 5000000, '2020-09-25 16:13:03'),
(8, 'friemorn', 'John', 'Smith', 'friemorn@gmail.com', '$2a$10$uWoZHIj89TjqY.ajvLR79uAyfzOc/xf4KmlE7rW9C4enxRM2HGtxW', '0123456789', 'https://github.com/Friemorn/BackEnd-PaymentApp-ZWallet/blob/master/www.freepik.comfree-iconmale-user-shadow_751026.htm%23page=1&query=user&position=2.png?raw=true', 2500000, '2020-09-25 16:13:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pin`
--
ALTER TABLE `pin`
  ADD PRIMARY KEY (`pinId`),
  ADD KEY `pin_ibfk_1` (`userId`);

--
-- Indexes for table `transactionin`
--
ALTER TABLE `transactionin`
  ADD PRIMARY KEY (`transactionId`),
  ADD KEY `transactionin_ibfk_1` (`receiverId`);

--
-- Indexes for table `transactionout`
--
ALTER TABLE `transactionout`
  ADD PRIMARY KEY (`transactionId`),
  ADD KEY `transaction_ibfk_1` (`senderId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pin`
--
ALTER TABLE `pin`
  MODIFY `pinId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `transactionin`
--
ALTER TABLE `transactionin`
  MODIFY `transactionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `transactionout`
--
ALTER TABLE `transactionout`
  MODIFY `transactionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pin`
--
ALTER TABLE `pin`
  ADD CONSTRAINT `pin_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transactionin`
--
ALTER TABLE `transactionin`
  ADD CONSTRAINT `transactionin_ibfk_1` FOREIGN KEY (`receiverId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transactionout`
--
ALTER TABLE `transactionout`
  ADD CONSTRAINT `transactionout_ibfk_1` FOREIGN KEY (`senderId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
