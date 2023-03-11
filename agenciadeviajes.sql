-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-03-2023 a las 20:10:12
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `agenciadeviajes`
--
CREATE DATABASE IF NOT EXISTS `agenciadeviajes` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `agenciadeviajes`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `destinations`
--
-- Creación: 06-03-2023 a las 20:50:31
--

CREATE TABLE `destinations` (
  `destination_id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `ranking` int(11) NOT NULL,
  `season` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- RELACIONES PARA LA TABLA `destinations`:
--

--
-- Volcado de datos para la tabla `destinations`
--

INSERT INTO `destinations` (`destination_id`, `name`, `ranking`, `season`) VALUES
(1, 'La Plata', 1, 'Verano'),
(2, 'Córoba', 9, 'Invierno'),
(3, 'Bariloche', 8, 'Verano'),
(4, 'Salta', 10, 'Primavera');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--
-- Creación: 06-03-2023 a las 20:50:31
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `imgURL` varchar(256) NOT NULL,
  `destination_id` int(11) NOT NULL,
  `staying` int(11) NOT NULL,
  `price` float NOT NULL,
  `offer` int(11) NOT NULL,
  `checkIn` date NOT NULL,
  `checkOut` date NOT NULL,
  `lodging` varchar(50) NOT NULL,
  `vehicle_id` int(11) NOT NULL,
  `tour` varchar(256) NOT NULL,
  `tour2` varchar(256) NOT NULL,
  `creationDate` date NOT NULL DEFAULT current_timestamp(),
  `dueDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- RELACIONES PARA LA TABLA `products`:
--   `destination_id`
--       `destinations` -> `destination_id`
--   `vehicle_id`
--       `vehicles` -> `vehicle_id`
--

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`product_id`, `imgURL`, `destination_id`, `staying`, `price`, `offer`, `checkIn`, `checkOut`, `lodging`, `vehicle_id`, `tour`, `tour2`, `creationDate`, `dueDate`) VALUES
(1, 'bariloche-005.jpg', 3, 10, 1500, 10, '2023-02-14', '2023-02-24', 'Hotel del Sol', 1, 'Tour de Verano', 'excursion cerro catedral', '2023-02-19', NULL),
(2, 'cumbresita.jpg', 2, 10, 15000, 10, '2023-02-14', '2023-02-24', 'Hostel Loky', 8, 'noche en carlos paz', 'excursion al tincu', '2023-02-22', NULL),
(14, 'img-1677982424726.jpg', 2, 10, 23555, 15, '2023-03-16', '2023-03-17', 'Camping Lunar', 6, 'paseo a la luna', 'vuelta al mundo', '2023-03-30', '2023-03-30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userproducts`
--
-- Creación: 06-03-2023 a las 20:50:31
--

CREATE TABLE `userproducts` (
  `user_products_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `price` float NOT NULL,
  `process_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- RELACIONES PARA LA TABLA `userproducts`:
--   `user_id`
--       `users` -> `user_id`
--   `product_id`
--       `products` -> `product_id`
--

--
-- Volcado de datos para la tabla `userproducts`
--

INSERT INTO `userproducts` (`user_products_id`, `product_id`, `user_id`, `price`, `process_date`) VALUES
(2, 1, 1, 0, '2023-02-19'),
(3, 1, 1, 0, '2023-02-19'),
(4, 2, 2, 15000, '2023-02-22'),
(5, 2, 3, 23000, '2023-02-22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--
-- Creación: 06-03-2023 a las 20:50:31
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `country` varchar(50) NOT NULL,
  `phoneNumber` bigint(20) NOT NULL DEFAULT 0,
  `password` varchar(256) NOT NULL,
  `profile` varchar(50) NOT NULL,
  `avatar` varchar(256) NOT NULL,
  `registration_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- RELACIONES PARA LA TABLA `users`:
--

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `country`, `phoneNumber`, `password`, `profile`, `avatar`, `registration_date`) VALUES
(1, 'Diego', 'dnoya@gmail.com', 'Argentina', 2147483647, 'pass123', 'Usuario', 'https://algo.jpg', '2023-02-19'),
(2, 'Facundo', 'facunoya@hotmail.com', 'Argentina', 115324789, '123456', 'Usuario', 'avatar.jpg', '2023-02-22'),
(3, 'Nina', 'nina@gmail.com', 'Argentina', 115324758, '123456', 'Administrador', 'avatar2.jpg', '2023-02-22'),
(4, 'Lin', 'lin@gmail.com', 'Argentina', 115325487, '123456', 'Administrador', 'avatar3.jpg', '2023-02-22'),
(5, 'Agostina', 'agos@gmail.com', 'Argentina', 1122453985, '123456', 'Administrador', 'algo.jpg', '2023-02-24'),
(6, 'Juan', 'juana@dearco.com', 'Argentina', 2236569887, '$2a$10$OEVaeM48IINhFt61npHVbuyxY7g5WZvwGnXHKl7mXKyDNQox1uo1u', 'Administrador', 'A LA VUELTA DEL MUNDO.png', '2023-02-25'),
(7, 'Roberto', 'robert@gmail.com', 'Argentina', 2236569887, '$2a$10$gMPXJag3BX1AwUrKA9wo8OhZ2cLrYS68sahDWqx2uymW2qwaAF2Kq', 'Administrador', '46d37e64-994c-4f5a-b09a-0802bcb2f89d.JPG', '2023-02-25'),
(8, 'Florencia', 'flor@gmail.com', 'Argentina', 1152684788, '$2a$10$o1dylLCRf7Wmg4X5YIuxFesYxxmwWlulmOYHDZhgsR6gfA54PyDRq', 'Administrador', 'datos-curiosidades-gatos-m.jpg.webp', '2023-02-25'),
(9, 'Alejandro', 'ale@gmail.com', 'Argentina', 221537281, '$2a$10$rShifNlIQiSTwGS0JwLbe.wTkM3hevLk5hMhlb/n4xkKM8jDJqmCK', 'Cliente', 'bariloche.jpg', '2023-02-28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehicles`
--
-- Creación: 06-03-2023 a las 20:50:31
--

CREATE TABLE `vehicles` (
  `vehicle_id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `type` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- RELACIONES PARA LA TABLA `vehicles`:
--

--
-- Volcado de datos para la tabla `vehicles`
--

INSERT INTO `vehicles` (`vehicle_id`, `name`, `type`, `brand`) VALUES
(1, 'Clio', 'Auto', 'Renault'),
(5, '144', 'Auto', 'Fiat'),
(6, '206', 'Auto', 'Peugeot'),
(7, 'Focus', 'Auto', 'Ford'),
(8, 'Fulgon', 'Trafic', 'Volkswagen');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `destinations`
--
ALTER TABLE `destinations`
  ADD PRIMARY KEY (`destination_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `destionation_id` (`destination_id`),
  ADD KEY `vehicle_id` (`vehicle_id`);

--
-- Indices de la tabla `userproducts`
--
ALTER TABLE `userproducts`
  ADD PRIMARY KEY (`user_products_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indices de la tabla `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`vehicle_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `destinations`
--
ALTER TABLE `destinations`
  MODIFY `destination_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `userproducts`
--
ALTER TABLE `userproducts`
  MODIFY `user_products_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `vehicle_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`destination_id`) REFERENCES `destinations` (`destination_id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`vehicle_id`);

--
-- Filtros para la tabla `userproducts`
--
ALTER TABLE `userproducts`
  ADD CONSTRAINT `userproducts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `userproducts_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
