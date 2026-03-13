-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Jan 29. 12:42
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `gymbox`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `berlesek`
--

CREATE TABLE `berlesek` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `csomag` bigint(20) UNSIGNED NOT NULL,
  `berlesiIdo` int(11) NOT NULL,
  `ar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `csomagok`
--

CREATE TABLE `csomagok` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kontener` bigint(20) UNSIGNED NOT NULL,
  `gepcsomag` bigint(20) UNSIGNED NOT NULL,
  `ertekeles` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `csomagok`
--

INSERT INTO `csomagok` (`id`, `kontener`, `gepcsomag`, `ertekeles`) VALUES
(1, 2, 1, 3),
(2, 1, 2, 4),
(3, 3, 3, 6),
(4, 3, 4, 4),
(5, 4, 5, 6);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ertekelesek`
--

CREATE TABLE `ertekelesek` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ertekeles` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `ertekelesek`
--

INSERT INTO `ertekelesek` (`id`, `ertekeles`) VALUES
(6, 'Gyors bérlés, minden a helyén, ajánlom!'),
(3, 'Jó ötlet, de lehetne kicsit olcsóbb.'),
(9, 'Korrekt szolgáltatás, kicsit nehézkes egyeztetés.'),
(10, 'Meglepően jó élmény, újra bérelni fogok!'),
(7, 'Nagyon kényelmes, hogy otthon tudok edzeni.'),
(4, 'Profi kialakítás, minden eszköz kéznél.'),
(1, 'Szuper felszerelés,kényelmes edzés bárhol!'),
(2, 'Tiszta, modern konténer, igazi mini edzőterem'),
(5, 'Túl meleg volt bent, nem élveztem az edzést.'),
(8, 'Zajos volt, de a gépek hibátlanok.');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalok`
--

CREATE TABLE `felhasznalok` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nev` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `jelszo` varchar(255) NOT NULL,
  `edzoE` tinyint(1) NOT NULL,
  `ertekeles` bigint(20) UNSIGNED NOT NULL,
  `kontener` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `felhasznalok`
--

INSERT INTO `felhasznalok` (`id`, `nev`, `email`, `jelszo`, `edzoE`, `ertekeles`, `kontener`) VALUES
(1, 'Bohn Eliot Konstantin', 'bohneliot@gmail.com', 'ezajelszo', 1, 1, 3);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gepcsomagok`
--

CREATE TABLE `gepcsomagok` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `gepId1` bigint(20) UNSIGNED NOT NULL,
  `gepId2` bigint(20) UNSIGNED NOT NULL,
  `gepId3` bigint(20) UNSIGNED NOT NULL,
  `gepId4` bigint(20) UNSIGNED NOT NULL,
  `gepId5` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `gepcsomagok`
--

INSERT INTO `gepcsomagok` (`id`, `gepId1`, `gepId2`, `gepId3`, `gepId4`, `gepId5`) VALUES
(1, 1, 2, 3, 4, 5),
(2, 4, 5, 6, 7, 8),
(3, 10, 11, 12, 14, 9),
(4, 20, 19, 18, 15, 6),
(5, 16, 13, 11, 17, 3),
(6, 30, 28, 29, 27, 26),
(7, 21, 22, 23, 24, 25);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gepek`
--

CREATE TABLE `gepek` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nev` varchar(255) NOT NULL,
  `ar` int(11) NOT NULL,
  `marka` varchar(255) NOT NULL,
  `kategoria` varchar(255) NOT NULL,
  `gepSuly` int(11) NOT NULL,
  `gepHossz` double NOT NULL,
  `gepSzelesseg` double NOT NULL,
  `gepMagassag` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `gepek`
--

INSERT INTO `gepek` (`id`, `nev`, `ar`, `marka`, `kategoria`, `gepSuly`, `gepHossz`, `gepSzelesseg`, `gepMagassag`) VALUES
(1, 'Hektor3 Otthoni Lapsúlyos Kondigép', 219000, 'HMS', 'Kondicionális erősítő', 82, 112, 120, 207),
(2, 'Gladiator Otthoni Multigym', 269000, 'Elite Fitness ', 'Kondicionális erősítő', 95, 106, 112, 207),
(3, 'Atlas X3 Smith keret', 249000, 'HMS', 'Kondicionális erősítő', 82, 207, 112, 120),
(4, 'TFK 650 futópad', 369000, 'Everfit', 'Kardiovaszkuláris', 62, 189, 76, 137),
(5, 'BRX-R65 COMFORT háttámlás szobakerékpár', 169000, 'Toorx', 'Kardiovaszkuláris', 33, 130, 63, 97),
(6, 'ERX-400 elliptikus tréner', 369000, 'Toorx', 'Kardiovaszkuláris', 64, 150, 59, 179),
(7, 'Rower Sea 70 evezőgép', 239000, 'Toorx', 'Kardiovaszkuláris', 26, 186, 44, 104),
(8, 'ERX-400 elliptikus tréner', 369000, 'Toorx', 'Kardiovaszkuláris', 64, 150, 59, 179),
(9, 'RWX Air 5000 evezőgép', 549000, 'Toorx', 'Kardiovaszkuláris', 52, 237, 63, 113),
(10, 'MSX-60 kombinált gép', 409900, 'Toorx', 'Kondicionális erősítő', 142, 113, 93, 206),
(11, 'Platinum V-series melltől / vállból nyomó gép', 999900, 'Tunturi', 'Kondicionális erősítő', 244, 190, 127, 155),
(12, 'Platinum V-series combfeszítő gép', 889900, 'Tunturi', 'Kondicionális erősítő', 174, 130, 98, 155),
(13, 'Platinum V-series tárogató / hátsóváll gép', 939900, 'Tunturi', 'Kondicionális erősítő', 242, 130, 117, 208),
(14, 'MSX-5000 lábtoló', 449900, 'Toorx', 'Kondicionális erősítő', 101, 131, 196, 107),
(15, 'Platinum V-series combfeszítő / combhajlító gép', 949900, 'Tunturi', 'Kondicionális erősítő', 230, 152, 82, 215),
(16, 'Platinum V-series vállból nyomó gép', 949900, 'Tunturi', 'Kondicionális erősítő', 219, 135, 135, 155),
(17, 'MSX-50 kombinált gép', 349900, 'Toorx', 'Kondicionális erősítő', 134, 175, 105, 202),
(18, 'Platinum V-series csípőemelő farizom gép', 959900, 'Tunturi', 'Kondicionális erősítő', 226, 195, 123, 155),
(19, 'Platinum V-series combközelítő / combtávolító gép', 899900, 'Tunturi', 'Kondicionális erősítő', 234, 152, 61, 155),
(20, 'Platinum V-series hasprés / mélyhát gép', 919900, 'Tunturi', 'Kondicionális erősítő', 223, 164, 100, 155),
(21, 'HG60 többfunkciós lapsúlyos otthoni kondigép', 499900, 'Tunturi', 'Kondicionális erősítő', 160, 168, 114, 212),
(22, 'SM80 többfunciós Smith erőkeret', 399900, 'Tunturi', 'Kondicionális erősítő', 124, 190, 184, 209),
(23, 'Tytan 17 Otthoni Lapsúlyos Kondigép', 539000, 'HMS', 'Kondicionális erősítő', 214, 200, 215, 210),
(24, 'kombinált edzőkeret', 699000, 'Cyklop', 'Kondicionális erősítő', 139, 199, 150, 220),
(25, 'G2B kombinált edzőgép', 619000, 'Body-Solid', 'Kondicionális erősítő', 204, 191, 206, 212),
(26, 'Tytan12 Multifunkciós kondigép', 229900, 'HMS', 'Kondicionális erősítő', 142, 160, 225, 212),
(27, 'Tytan10R Otthoni Multifunkciós kondigép', 274900, 'HMS', 'Kondicionális erősítő', 179, 274, 162, 203),
(28, 'Crossover 500 Otthoni Keresztcsiga', 299000, 'Elite Fitness ', 'Kondicionális erősítő', 204, 255, 62, 212),
(29, 'WT80 otthoni többfunkciós kondigép', 299000, 'Tunturi', 'Kondicionális erősítő', 54, 165, 115, 182),
(30, 'kombinált edzőgép', 349000, 'Master Poseidon', 'Kondicionális erősítő', 154, 168, 172, 203);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kontenerek`
--

CREATE TABLE `kontenerek` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `kontenerNev` varchar(255) NOT NULL,
  `sulyKG` int(11) NOT NULL,
  `belSzelesseg` double NOT NULL,
  `kulSzelesseg` double NOT NULL,
  `belMagassag` double NOT NULL,
  `belHosszusag` double NOT NULL,
  `kulMagassag` double NOT NULL,
  `kulHosszusag` double NOT NULL,
  `negyzetMeter` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `kontenerek`
--

INSERT INTO `kontenerek` (`id`, `kontenerNev`, `sulyKG`, `belSzelesseg`, `kulSzelesseg`, `belMagassag`, `belHosszusag`, `kulMagassag`, `kulHosszusag`, `negyzetMeter`) VALUES
(1, '20\' normál', 2300, 2.35, 2.43, 2.39, 5.89, 2.59, 6.09, 13.86),
(2, '40\' normál', 3750, 2.35, 2.43, 2.68, 12.03, 2.59, 12.19, 28.27),
(3, '40\' magas', 3940, 2.35, 2.43, 2.69, 12.03, 2.89, 12.19, 28.27),
(4, '45\' magas', 4820, 2.35, 2.43, 2.69, 13.55, 2.89, 13.71, 31.188);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- A tábla adatainak kiíratása `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2026_01_16_080708_create_ertekeles_table', 1),
(2, '2026_01_21_104031_create_konteners_table', 1),
(3, '2026_01_21_114139_create_felhasznalos_table', 1),
(4, '2026_01_22_094827_create_geps_table', 1),
(5, '2026_01_26_080150_create_gepcsomags_table', 1),
(6, '2026_01_26_095600_create_csomags_table', 1),
(7, '2026_01_26_101501_create_berles_table', 1);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `berlesek`
--
ALTER TABLE `berlesek`
  ADD PRIMARY KEY (`id`),
  ADD KEY `berlesek_csomag_foreign` (`csomag`);

--
-- A tábla indexei `csomagok`
--
ALTER TABLE `csomagok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `csomagok_kontener_foreign` (`kontener`),
  ADD KEY `csomagok_gepcsomag_foreign` (`gepcsomag`),
  ADD KEY `csomagok_ertekeles_foreign` (`ertekeles`);

--
-- A tábla indexei `ertekelesek`
--
ALTER TABLE `ertekelesek`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ertekelesek_ertekeles_unique` (`ertekeles`);

--
-- A tábla indexei `felhasznalok`
--
ALTER TABLE `felhasznalok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `felhasznalok_ertekeles_foreign` (`ertekeles`),
  ADD KEY `felhasznalok_kontener_foreign` (`kontener`);

--
-- A tábla indexei `gepcsomagok`
--
ALTER TABLE `gepcsomagok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gepcsomagok_gepid1_foreign` (`gepId1`),
  ADD KEY `gepcsomagok_gepid2_foreign` (`gepId2`),
  ADD KEY `gepcsomagok_gepid3_foreign` (`gepId3`),
  ADD KEY `gepcsomagok_gepid4_foreign` (`gepId4`),
  ADD KEY `gepcsomagok_gepid5_foreign` (`gepId5`);

--
-- A tábla indexei `gepek`
--
ALTER TABLE `gepek`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `kontenerek`
--
ALTER TABLE `kontenerek`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `berlesek`
--
ALTER TABLE `berlesek`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `csomagok`
--
ALTER TABLE `csomagok`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `ertekelesek`
--
ALTER TABLE `ertekelesek`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT a táblához `felhasznalok`
--
ALTER TABLE `felhasznalok`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `gepcsomagok`
--
ALTER TABLE `gepcsomagok`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `gepek`
--
ALTER TABLE `gepek`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT a táblához `kontenerek`
--
ALTER TABLE `kontenerek`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `berlesek`
--
ALTER TABLE `berlesek`
  ADD CONSTRAINT `berlesek_csomag_foreign` FOREIGN KEY (`csomag`) REFERENCES `csomagok` (`id`);

--
-- Megkötések a táblához `csomagok`
--
ALTER TABLE `csomagok`
  ADD CONSTRAINT `csomagok_ertekeles_foreign` FOREIGN KEY (`ertekeles`) REFERENCES `ertekelesek` (`id`),
  ADD CONSTRAINT `csomagok_gepcsomag_foreign` FOREIGN KEY (`gepcsomag`) REFERENCES `gepcsomagok` (`id`),
  ADD CONSTRAINT `csomagok_kontener_foreign` FOREIGN KEY (`kontener`) REFERENCES `kontenerek` (`id`);

--
-- Megkötések a táblához `felhasznalok`
--
ALTER TABLE `felhasznalok`
  ADD CONSTRAINT `felhasznalok_ertekeles_foreign` FOREIGN KEY (`ertekeles`) REFERENCES `ertekelesek` (`id`),
  ADD CONSTRAINT `felhasznalok_kontener_foreign` FOREIGN KEY (`kontener`) REFERENCES `kontenerek` (`id`);

--
-- Megkötések a táblához `gepcsomagok`
--
ALTER TABLE `gepcsomagok`
  ADD CONSTRAINT `gepcsomagok_gepid1_foreign` FOREIGN KEY (`gepId1`) REFERENCES `gepek` (`id`),
  ADD CONSTRAINT `gepcsomagok_gepid2_foreign` FOREIGN KEY (`gepId2`) REFERENCES `gepek` (`id`),
  ADD CONSTRAINT `gepcsomagok_gepid3_foreign` FOREIGN KEY (`gepId3`) REFERENCES `gepek` (`id`),
  ADD CONSTRAINT `gepcsomagok_gepid4_foreign` FOREIGN KEY (`gepId4`) REFERENCES `gepek` (`id`),
  ADD CONSTRAINT `gepcsomagok_gepid5_foreign` FOREIGN KEY (`gepId5`) REFERENCES `gepek` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
