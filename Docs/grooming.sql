-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Sep 17, 2024 at 06:09 PM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grooming`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(25) NOT NULL,
  `customer_number` varchar(10) NOT NULL,
  `customer_nic` varchar(20) NOT NULL,
  `rented_date` date NOT NULL,
  `return_date` date NOT NULL,
  `rent_code` varchar(15) NOT NULL,
  `product_name` varchar(30) NOT NULL,
  `product_code` varchar(15) NOT NULL,
  `note` varchar(300) NOT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `customer_name`, `customer_number`, `customer_nic`, `rented_date`, `return_date`, `rent_code`, `product_name`, `product_code`, `note`) VALUES
(1, 'Alice Smith', '2345678901', '876543210', '2024-09-05', '2024-09-20', 'RENT456', 'Projector', 'PRO789', 'Returned with minor scratches'),
(2, 'Bob Johnson', '3456789012', '765432109', '2024-09-10', '2024-09-25', 'RENT789', 'Camera', 'CAM012', 'Returned early, no issues'),
(3, 'Carol Williams', '4567890123', '654321098', '2024-09-15', '2024-09-30', 'RENT012', 'Drone', 'DRN345', 'Returned with battery missing'),
(4, 'David Brown', '5678901234', '543210987', '2024-09-20', '2024-10-05', 'RENT345', 'Smartphone', 'SMP678', 'Returned in perfect condition'),
(5, 'Emily Davis', '6789012345', '432109876', '2024-09-25', '2024-10-10', 'RENT678', 'Tablet', 'TBL901', 'Returned late, in good condition');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(50) DEFAULT NULL,
  `product_code` varchar(10) NOT NULL,
  `note` varchar(300) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_code`, `note`) VALUES
(1, 'Smartwatch', 'SW1234', 'Latest model with advanced features'),
(2, 'Wireless Earbuds', 'WE5678', 'Noise-cancelling, includes charging case'),
(3, 'Portable Speaker', 'PS9012', 'Water-resistant with Bluetooth connectivity'),
(4, 'Gaming Laptop', 'GL3456', 'High performance with 16GB RAM'),
(5, '4K Television', 'TV7890', 'Ultra HD with HDR support');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
