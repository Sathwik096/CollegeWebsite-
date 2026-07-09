-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: collegegpt
-- ------------------------------------------------------
-- Server version	8.0.43
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance` (
  `s_id` varchar(12) DEFAULT NULL,
  KEY `s_id` (`s_id`),
  CONSTRAINT `attendance_s_id_fk` FOREIGN KEY (`s_id`) REFERENCES `student_details` (`s_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
INSERT INTO `attendance` VALUES ('21001-cs-021'),('21001-cs-031');
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;

--
-- Table structure for table `completed_students`
--

DROP TABLE IF EXISTS `completed_students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `completed_students` (
  `s_id` varchar(12) NOT NULL,
  `sname` char(20) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `s_father` char(20) DEFAULT NULL,
  `phone_no` bigint unsigned DEFAULT NULL,
  `address` varchar(225) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `aadhaar` varchar(12) DEFAULT NULL,
  `semester` int DEFAULT NULL,
  `department` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`s_id`),
  UNIQUE KEY `aadhaar` (`aadhaar`),
  KEY `department` (`department`),
  CONSTRAINT `complete_studentdetails_fk_1` FOREIGN KEY (`department`) REFERENCES `department` (`D_name`),
  CONSTRAINT `cs_aadhaar_check` CHECK (regexp_like(`aadhaar`,_utf8mb4'^[0-9]{12}$')),
  CONSTRAINT `cs_email_check` CHECK (regexp_like(`email`,_utf8mb4'^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+.[A-Z|a-z]{2,4}$')),
  CONSTRAINT `cs_phone_no_check` CHECK (regexp_like(`phone_no`,_utf8mb4'^[0-9]{10}$')),
  CONSTRAINT `cs_s_id_check` CHECK (regexp_like(`s_id`,_utf8mb4'^[0-9]{5}-[a-zA-Z]{2}-[0-9]{3}$')),
  CONSTRAINT `cs_semester_check` CHECK (regexp_like(`semester`,_utf8mb4'^[1-6]{1}$'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `completed_students`
--

/*!40000 ALTER TABLE `completed_students` DISABLE KEYS */;
/*!40000 ALTER TABLE `completed_students` ENABLE KEYS */;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `D_id` int NOT NULL AUTO_INCREMENT,
  `D_name` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`D_id`),
  KEY `depart` (`D_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (1,'cse');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;

--
-- Table structure for table `student_details`
--

DROP TABLE IF EXISTS `student_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_details` (
  `s_id` varchar(12) NOT NULL,
  `sname` char(20) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `s_father` char(20) DEFAULT NULL,
  `phone_no` bigint unsigned DEFAULT NULL,
  `address` varchar(225) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `aadhaar` varchar(12) DEFAULT NULL,
  `semester` int DEFAULT NULL,
  `department` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`s_id`),
  UNIQUE KEY `aadhaar` (`aadhaar`),
  KEY `department` (`department`),
  CONSTRAINT `student_details_fk_1` FOREIGN KEY (`department`) REFERENCES `department` (`D_name`),
  CONSTRAINT `aadhaar_check` CHECK (regexp_like(`aadhaar`,_utf8mb4'^[0-9]{12}$')),
  CONSTRAINT `email_check` CHECK (regexp_like(`email`,_utf8mb4'^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+.[A-Z|a-z]{2,4}$')),
  CONSTRAINT `phone_no_check` CHECK (regexp_like(`phone_no`,_utf8mb4'^[0-9]{10}$')),
  CONSTRAINT `s_id_check` CHECK (regexp_like(`s_id`,_utf8mb4'^[0-9]{5}-[a-zA-Z]{2}-[0-9]{3}$')),
  CONSTRAINT `semester_check` CHECK (regexp_like(`semester`,_utf8mb4'^[1-6]{1}$'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_details`
--

/*!40000 ALTER TABLE `student_details` DISABLE KEYS */;
INSERT INTO `student_details` VALUES ('21001-cs-021','Siddhu','2005-05-23','G Venkana',8919957464,'45-202 , Srinivas nagar','gsathi@gmail.com','123456789761',6,'CSE'),('21001-cs-031','Sai','2006-03-10','G Venkana',8919957404,'45-202 , Srinivas nagar','gsathi@gmail.com','123456789769',6,'CSE');
/*!40000 ALTER TABLE `student_details` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-03 21:10:40
