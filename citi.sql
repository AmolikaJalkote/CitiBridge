-- MySQL dump 10.13  Distrib 5.7.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: citi
-- ------------------------------------------------------
-- Server version	5.7.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login` (
  `username` varchar(20) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES ('aa','a'),('b','e'),('bb','b'),('cc','c'),('dd','d');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userdata`
--

DROP TABLE IF EXISTS `userdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userdata` (
  `username` varchar(20) DEFAULT NULL,
  `symbol` varchar(10) DEFAULT NULL,
  `companyName` varchar(50) DEFAULT NULL,
  `sector` varchar(30) DEFAULT NULL,
  `marketCap` bigint(20) DEFAULT NULL,
  `latestPrice` float DEFAULT NULL,
  `high` float DEFAULT NULL,
  `low` float DEFAULT NULL,
  `ytdChange` double DEFAULT NULL,
  `ts` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userdata`
--

LOCK TABLES `userdata` WRITE;
/*!40000 ALTER TABLE `userdata` DISABLE KEYS */;
INSERT INTO `userdata` VALUES ('aa','NRP','Natural Resource Partners LP Limited Partnership','Basic Materials',348273577,28.45,29.681,28.45,0.07862800034880055,'2018-03-18 13:40:16'),('aa','SNX','Synnex Corporation','Industrials',5060927557,126.19,126.99,123.82,-0.07791908866050191,'2018-03-18 13:57:18'),('aa','ETO','Eaton Vance Tax-Advantage Global Dividend Opp','Financial Services',373502158,25.705,25.9,25.58,0.039337541090323884,'2018-03-18 14:41:15'),('aa','GME','Gamestop Corporation','Consumer Cyclical',1562113755,15.42,15.66,15.315,-0.13494712630781755,'2018-03-18 14:41:18'),('aa','RRC','Range Resources Corporation','Energy',3755426844,15.11,15.255,14.64,-0.15568668208893513,'2018-03-18 14:43:33'),('aa','DDD','3D Systems Corporation','Technology',1411182831,12.4,13.1,12.4,0.368653421633554,'2018-03-18 15:27:21'),('aa','ASIX','AdvanSix Inc.','Basic Materials',1126955253,36.97,37.01,36.16,-0.1321596244131456,'2018-03-18 15:27:23');
/*!40000 ALTER TABLE `userdata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userdata1`
--

DROP TABLE IF EXISTS `userdata1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userdata1` (
  `username` varchar(20) DEFAULT NULL,
  `symbol` varchar(10) DEFAULT NULL,
  `companyName` varchar(50) DEFAULT NULL,
  `sector` varchar(30) DEFAULT NULL,
  `marketCap` bigint(20) DEFAULT NULL,
  `latestPrice` float DEFAULT NULL,
  `high` float DEFAULT NULL,
  `low` float DEFAULT NULL,
  `changePercent` double DEFAULT NULL,
  `ytdChange` double DEFAULT NULL,
  `ts` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userdata1`
--

LOCK TABLES `userdata1` WRITE;
/*!40000 ALTER TABLE `userdata1` DISABLE KEYS */;
INSERT INTO `userdata1` VALUES (NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2018-02-14');
/*!40000 ALTER TABLE `userdata1` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-18 20:22:10
