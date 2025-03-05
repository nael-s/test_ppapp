-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2025 at 11:14 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testing_ppapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `chart_variables`
--

CREATE TABLE `chart_variables` (
  `id` int(11) NOT NULL,
  `variabel` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chart_variables`
--

INSERT INTO `chart_variables` (`id`, `variabel`) VALUES
(1, 'jumlah_laki_laki'),
(2, 'jumlah_perempuan');

-- --------------------------------------------------------

--
-- Table structure for table `dashboards`
--

CREATE TABLE `dashboards` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `path_user` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `show` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dashboards`
--

INSERT INTO `dashboards` (`id`, `label`, `description`, `path_user`, `icon`, `show`) VALUES
(1, 'Dashboard Kependudukan', 'Deskripsi tentang dashboard kependudukan', '/user/dashboard-grafik/', 'icon_kependudukan', 1),
(2, 'Dashboard Pendidikan', 'Deskripsi tentang dashboard pendidikan', 'Deskripsi tentang dashboard pendidikan', 'icon_pendidikan', 1),
(3, 'Dashboard Perumahan', 'Deskripsi tentang dashboard perumahan', '/user/dashboard-grafik/', 'icon_perumahan', 1),
(4, 'Dashboard Kesehatan', 'Deskripsi tentang dashboard kesehatan', '/user/dashboard-grafik/', 'icon_kesehatan', 1),
(5, 'Dashboard Fertilitas/KB', 'Bagian Fertilitas/KB', '/user/dashboard-grafik/', 'icon_keluarga_berencana', 1);

-- --------------------------------------------------------

--
-- Table structure for table `dashboard_charts`
--

CREATE TABLE `dashboard_charts` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `deskripsi` varchar(255) NOT NULL,
  `model_chart` varchar(255) NOT NULL,
  `row` int(11) NOT NULL,
  `column` int(11) NOT NULL,
  `column_size` int(11) NOT NULL,
  `show` tinyint(4) NOT NULL DEFAULT 1,
  `dashboardId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dashboard_charts`
--

INSERT INTO `dashboard_charts` (`id`, `label`, `deskripsi`, `model_chart`, `row`, `column`, `column_size`, `show`, `dashboardId`) VALUES
(2, 'Jumlah Penduduk Berdasarkan Jenis Kelamin', 'Deskripsi Indikator Mengeluarkan chart atau agregat ini, misal indikator program yang dimiliki masing - masing stackholder chart ini', 'pie', 1, 2, 6, 1, 1),
(3, 'Jumlah Penduduk Berdasarkan Kepemilikan KTP', 'Deskripsi Indikator Mengeluarkan chart atau agregat ini, misal indikator program yang dimiliki masing - masing stackholder chart ini', 'donut', 1, 2, 6, 1, 1),
(4, 'Jumlah Penduduk', 'Deskripsi Indikator Mengeluarkan chart atau agregat ini, misal indikator program yang dimiliki masing - masing stackholder chart ini', 'agregat', 1, 1, 12, 1, 1),
(5, 'Jumlah Penduduk Laki - Laki', 'Deskripsi Indikator Mengeluarkan chart atau agregat ini, misal indikator program yang dimiliki masing - masing stackholder chart ini', 'agregat', 1, 1, 6, 1, 1),
(6, 'Jumlah Penduduk Perempuan', 'Deskripsi Indikator Mengeluarkan chart atau agregat ini, misal indikator program yang dimiliki masing - masing stackholder chart ini', 'agregat', 1, 1, 6, 1, 1),
(7, 'Jumlah Penduduk KTP DKI', 'Deskripsi Indikator Mengeluarkan chart atau agregat ini, misal indikator program yang dimiliki masing - masing stackholder chart ini', 'agregat', 1, 1, 6, 1, 1),
(8, 'Jumlah Penduduk KTP Non DKI', 'Deskripsi Indikator Mengeluarkan chart atau agregat ini, misal indikator program yang dimiliki masing - masing stackholder chart ini', 'agregat', 1, 1, 6, 1, 1),
(9, 'Jumlah Penduduk DKI Jakarta', 'Deskripsi Indikator Mengeluarkan chart atau agregat ini, misal indikator program yang dimiliki masing - masing stackholder chart ini', 'horizontal_bar', 1, 2, 12, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `dashboard_chart_level_wilayah`
--

CREATE TABLE `dashboard_chart_level_wilayah` (
  `chart_id` int(11) NOT NULL,
  `level_wilayah_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dashboard_chart_level_wilayah`
--

INSERT INTO `dashboard_chart_level_wilayah` (`chart_id`, `level_wilayah_id`) VALUES
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(3, 1),
(3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `dashboard_chart_variabel`
--

CREATE TABLE `dashboard_chart_variabel` (
  `chart_id` int(11) NOT NULL,
  `variabel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dashboard_chart_variabel`
--

INSERT INTO `dashboard_chart_variabel` (`chart_id`, `variabel_id`) VALUES
(2, 1),
(2, 2),
(5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `dashboard_grid_rows`
--

CREATE TABLE `dashboard_grid_rows` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `highlight` tinyint(4) NOT NULL DEFAULT 0,
  `dashboardId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dashboard_grid_rows`
--

INSERT INTO `dashboard_grid_rows` (`id`, `label`, `highlight`, `dashboardId`) VALUES
(1, 'Highlight Data', 1, 1),
(2, 'Data Grafik', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `dashboard_grid_row_column`
--

CREATE TABLE `dashboard_grid_row_column` (
  `grid_column_id` int(11) NOT NULL,
  `dashboard_grid_row_column_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dashboard_grid_row_column`
--

INSERT INTO `dashboard_grid_row_column` (`grid_column_id`, `dashboard_grid_row_column_id`) VALUES
(1, 1),
(2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `dashboard_roles`
--

CREATE TABLE `dashboard_roles` (
  `id` int(11) NOT NULL,
  `dashboardId` int(11) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dashboard_roles`
--

INSERT INTO `dashboard_roles` (`id`, `dashboardId`, `roleId`) VALUES
(1, 1, 4),
(2, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `grid_column`
--

CREATE TABLE `grid_column` (
  `id` int(11) NOT NULL,
  `lg` int(11) NOT NULL,
  `md` int(11) NOT NULL,
  `sm` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `grid_column`
--

INSERT INTO `grid_column` (`id`, `lg`, `md`, `sm`) VALUES
(1, 12, 12, 12);

-- --------------------------------------------------------

--
-- Table structure for table `level_wilayah`
--

CREATE TABLE `level_wilayah` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `level_wilayah`
--

INSERT INTO `level_wilayah` (`id`, `name`) VALUES
(1, 'PROVINSI'),
(2, 'KOTA'),
(3, 'KECAMATAN'),
(4, 'KELURAHAN'),
(5, 'RW'),
(6, 'RT');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(4, 'ADMIN'),
(1, 'BAPPEDA'),
(22, 'BNBA'),
(15, 'DINKES'),
(11, 'DINSOS'),
(14, 'DISDIK'),
(3, 'DISDUKCAPIL'),
(20, 'DISKOMINFOTIK'),
(5, 'DKPKP'),
(21, 'DKTE'),
(7, 'DLH'),
(12, 'DPAREKRAF'),
(10, 'DPMPTSP'),
(16, 'DPPAPP'),
(6, 'DSDA'),
(19, 'GULKARMAT'),
(2, 'KELURAHAN'),
(9, 'KOTA'),
(17, 'PKB'),
(23, 'PUSKESMAS'),
(13, 'ROEKON'),
(18, 'ROPLH'),
(8, 'SEKEL');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chart_variables`
--
ALTER TABLE `chart_variables`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dashboards`
--
ALTER TABLE `dashboards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dashboard_charts`
--
ALTER TABLE `dashboard_charts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_2e990818471031f6fe6af283ef3` (`dashboardId`);

--
-- Indexes for table `dashboard_chart_level_wilayah`
--
ALTER TABLE `dashboard_chart_level_wilayah`
  ADD PRIMARY KEY (`chart_id`,`level_wilayah_id`),
  ADD KEY `IDX_05026607bf7f5dd29eced9a8e3` (`chart_id`),
  ADD KEY `IDX_7f6153848683bea6a164287562` (`level_wilayah_id`);

--
-- Indexes for table `dashboard_chart_variabel`
--
ALTER TABLE `dashboard_chart_variabel`
  ADD PRIMARY KEY (`chart_id`,`variabel_id`),
  ADD KEY `IDX_61b6e20394d38a66fbce26ef29` (`chart_id`),
  ADD KEY `IDX_017d58ce47b91549f1433a7de4` (`variabel_id`);

--
-- Indexes for table `dashboard_grid_rows`
--
ALTER TABLE `dashboard_grid_rows`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_7a188319ffb474d5d4100904efe` (`dashboardId`);

--
-- Indexes for table `dashboard_grid_row_column`
--
ALTER TABLE `dashboard_grid_row_column`
  ADD PRIMARY KEY (`grid_column_id`,`dashboard_grid_row_column_id`),
  ADD KEY `IDX_4fd6552ec5e97ee6bcfa3ea545` (`grid_column_id`),
  ADD KEY `IDX_13cc1928e68c4fde2bdc3e4256` (`dashboard_grid_row_column_id`);

--
-- Indexes for table `dashboard_roles`
--
ALTER TABLE `dashboard_roles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_55b102e3360b75073665cf4fd09` (`dashboardId`),
  ADD KEY `FK_179ac6404372aecb9f85c5d3103` (`roleId`);

--
-- Indexes for table `grid_column`
--
ALTER TABLE `grid_column`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `level_wilayah`
--
ALTER TABLE `level_wilayah`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_648e3f5447f725579d7d4ffdfb` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_fe0bb3f6520ee0469504521e71` (`username`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `IDX_87b8888186ca9769c960e92687` (`user_id`),
  ADD KEY `IDX_b23c65e50a758245a33ee35fda` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chart_variables`
--
ALTER TABLE `chart_variables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `dashboards`
--
ALTER TABLE `dashboards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `dashboard_charts`
--
ALTER TABLE `dashboard_charts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `dashboard_grid_rows`
--
ALTER TABLE `dashboard_grid_rows`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `dashboard_roles`
--
ALTER TABLE `dashboard_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `grid_column`
--
ALTER TABLE `grid_column`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `level_wilayah`
--
ALTER TABLE `level_wilayah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dashboard_charts`
--
ALTER TABLE `dashboard_charts`
  ADD CONSTRAINT `FK_2e990818471031f6fe6af283ef3` FOREIGN KEY (`dashboardId`) REFERENCES `dashboards` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `dashboard_chart_level_wilayah`
--
ALTER TABLE `dashboard_chart_level_wilayah`
  ADD CONSTRAINT `FK_05026607bf7f5dd29eced9a8e3b` FOREIGN KEY (`chart_id`) REFERENCES `dashboard_charts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_7f6153848683bea6a1642875625` FOREIGN KEY (`level_wilayah_id`) REFERENCES `level_wilayah` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `dashboard_chart_variabel`
--
ALTER TABLE `dashboard_chart_variabel`
  ADD CONSTRAINT `FK_017d58ce47b91549f1433a7de49` FOREIGN KEY (`variabel_id`) REFERENCES `chart_variables` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_61b6e20394d38a66fbce26ef29e` FOREIGN KEY (`chart_id`) REFERENCES `dashboard_charts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `dashboard_grid_rows`
--
ALTER TABLE `dashboard_grid_rows`
  ADD CONSTRAINT `FK_7a188319ffb474d5d4100904efe` FOREIGN KEY (`dashboardId`) REFERENCES `dashboards` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `dashboard_grid_row_column`
--
ALTER TABLE `dashboard_grid_row_column`
  ADD CONSTRAINT `FK_13cc1928e68c4fde2bdc3e42568` FOREIGN KEY (`dashboard_grid_row_column_id`) REFERENCES `grid_column` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_4fd6552ec5e97ee6bcfa3ea5456` FOREIGN KEY (`grid_column_id`) REFERENCES `dashboard_grid_rows` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `dashboard_roles`
--
ALTER TABLE `dashboard_roles`
  ADD CONSTRAINT `FK_179ac6404372aecb9f85c5d3103` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_55b102e3360b75073665cf4fd09` FOREIGN KEY (`dashboardId`) REFERENCES `dashboards` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `FK_87b8888186ca9769c960e926870` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_b23c65e50a758245a33ee35fda1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
