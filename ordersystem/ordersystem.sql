/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.7.14 : Database - ordersystem
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`ordersystem` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;

USE `ordersystem`;

/*Table structure for table `goods` */

DROP TABLE IF EXISTS `goods`;

CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `des` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 CHECKSUM=1 DELAY_KEY_WRITE=1 ROW_FORMAT=DYNAMIC;

/*Data for the table `goods` */

insert  into `goods`(`id`,`title`,`des`,`imgurl`,`price`,`type`) values (1,'剁椒鱼头','非常辣','../img/tu1.jpg','88.00','主菜'),(2,'红烧鱼','非常辣','../img/tu2.jpg','55.00','主菜'),(3,'红烧牛肉','非常辣','../img/tu3.jpg','66.00','主菜'),(4,'水煮鱼','非常辣','../img/tu4.jpg','55.00','主菜'),(5,'酸甜排骨\r\n','有点辣','../img/tu5.jpg','48.00','主菜'),(6,'回锅肉','非常辣','../img/tu6.jpg','38.00','主菜'),(7,'清蒸鱼','非常辣','../img/tu7.jpg','58.00','主菜'),(8,'白灼菜心','很甜','../img/tu8.jpg','28.00','主菜'),(9,'蜜汁叉烧','很肉','../img/tu9.jpg','38.00','主菜'),(10,'口水鸡\r\n','很肉','../img/tu10.jpg','38.00','主菜'),(11,'特色乳鸽\r\n','很甜','../img/tu11.jpg','48.00','主菜'),(12,'泡椒凤爪\r\n','很甜','../img/tu12.jpg','28.00','小吃'),(13,'招牌色拉','很甜','../img/tu13.jpg','18.00','甜品'),(14,'香蕉船\r\n','好吃','../img/tu14.jpg','18.00','甜品'),(15,'炸薯条','很脆','../img/tu15.jpg','18.00','小吃'),(16,'烤蜗牛','很辣','../img/tu16.jpg','38.00','小吃'),(17,'芒果汁','很甜','../img/tu17.jpg','18.00','饮料'),(18,'水晶葡萄汁','很甜','../img/tu18.jpg','18.00','饮料'),(19,'烤鸡翅\r\n','很脆','../img/tu19.jpg','38.00','小吃'),(20,'招牌牛仔骨\r\n','很香','../img/tu20.jpg','38.00','小吃'),(21,'香酥烤鱼\r\n','很脆','../img/tu21.jpg','58.00','主菜');

/*Table structure for table `history` */

DROP TABLE IF EXISTS `history`;

CREATE TABLE `history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `totalPrice` varchar(255) DEFAULT NULL,
  `userid` char(255) DEFAULT NULL,
  `orderid` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `history` */

insert  into `history`(`id`,`totalPrice`,`userid`,`orderid`) values (1,'18','jsy',107),(2,'36','jsy',111),(3,'209','jsy',117),(4,'18','jsy',116),(5,'18','jsy',114);

/*Table structure for table `ordermenu` */

DROP TABLE IF EXISTS `ordermenu`;

CREATE TABLE `ordermenu` (
  `id` int(255) NOT NULL AUTO_INCREMENT COMMENT '订单对应的菜单id',
  `orderid` int(255) NOT NULL COMMENT '对应的订单id',
  `imgurl` char(255) NOT NULL COMMENT '菜单图片路径',
  `name` char(255) NOT NULL COMMENT '菜名',
  `price` char(255) NOT NULL COMMENT '菜价',
  `qty` int(255) NOT NULL COMMENT '点菜的数量',
  `dishid` int(255) NOT NULL COMMENT '菜的id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=210 DEFAULT CHARSET=utf8;

/*Data for the table `ordermenu` */

insert  into `ordermenu`(`id`,`orderid`,`imgurl`,`name`,`price`,`qty`,`dishid`) values (145,78,'../img/tu1.jpg','剁椒鱼头','￥88',1,1),(144,78,'../img/tu2.jpg','红烧鱼','￥55',1,2),(143,77,'../img/tu21.jpg','香酥烤鱼\r\n','￥58',1,21),(142,77,'../img/tu10.jpg','口水鸡\r\n','￥38',1,10),(141,77,'../img/tu8.jpg','白灼菜心','￥28',1,8),(140,77,'../img/tu7.jpg','清蒸鱼','￥58',1,7),(139,76,'../img/tu4.jpg','水煮鱼','￥55',1,4),(138,76,'../img/tu2.jpg','红烧鱼','￥55',1,2),(137,75,'../img/tu4.jpg','水煮鱼','￥55',1,4),(136,75,'../img/tu2.jpg','红烧鱼','￥55',1,2),(135,74,'../img/tu4.jpg','水煮鱼','￥55',1,4),(134,74,'../img/tu2.jpg','红烧鱼','￥55',1,2),(133,73,'../img/tu4.jpg','水煮鱼','￥55',1,4),(132,73,'../img/tu2.jpg','红烧鱼','￥55',1,2),(131,72,'../img/tu4.jpg','水煮鱼','￥55',1,4),(130,72,'../img/tu2.jpg','红烧鱼','￥55',1,2),(129,71,'../img/tu4.jpg','水煮鱼','￥55',1,4),(128,71,'../img/tu2.jpg','红烧鱼','￥55',1,2),(127,70,'../img/tu18.jpg','水晶葡萄汁','￥18',1,18),(126,69,'../img/tu18.jpg','水晶葡萄汁','￥18',1,18),(125,68,'../img/tu18.jpg','水晶葡萄汁','￥18',1,18),(124,67,'../img/tu18.jpg','水晶葡萄汁','￥18',1,18),(123,66,'../img/tu3.jpg','红烧牛肉','￥66',1,3),(122,66,'../img/tu2.jpg','红烧鱼','￥55',1,2),(121,65,'../img/tu3.jpg','红烧牛肉','￥66',1,3),(120,65,'../img/tu2.jpg','红烧鱼','￥55',1,2),(119,64,'../img/tu3.jpg','红烧牛肉','￥66',1,3),(118,64,'../img/tu2.jpg','红烧鱼','￥55',1,2),(117,63,'../img/tu3.jpg','红烧牛肉','￥66',1,3),(116,63,'../img/tu2.jpg','红烧鱼','￥55',1,2),(115,62,'../img/tu16.jpg','烤蜗牛','￥38',1,16),(114,62,'../img/tu19.jpg','烤鸡翅\r\n','￥38',1,19),(113,62,'../img/tu12.jpg','泡椒凤爪\r\n','￥28',1,12),(112,61,'../img/tu20.jpg','招牌牛仔骨\r\n','￥38',1,20),(111,61,'../img/tu16.jpg','烤蜗牛','￥38',1,16),(110,61,'../img/tu19.jpg','烤鸡翅\r\n','￥38',1,19),(109,61,'../img/tu15.jpg','炸薯条','￥18',1,15),(108,61,'../img/tu12.jpg','泡椒凤爪\r\n','￥28',1,12),(107,60,'../img/tu20.jpg','招牌牛仔骨\r\n','￥38',1,20),(106,60,'../img/tu16.jpg','烤蜗牛','￥38',1,16),(105,60,'../img/tu19.jpg','烤鸡翅\r\n','￥38',1,19),(104,60,'../img/tu15.jpg','炸薯条','￥18',1,15),(103,60,'../img/tu12.jpg','泡椒凤爪\r\n','￥28',1,12),(102,59,'../img/tu17.jpg','芒果汁','￥18',1,17),(101,58,'../img/tu18.jpg','水晶葡萄汁','￥18',1,18),(100,57,'../img/tu9.jpg','蜜汁叉烧','￥38',1,9),(99,56,'../img/tu9.jpg','蜜汁叉烧','￥38',1,9),(98,55,'../img/tu9.jpg','蜜汁叉烧','￥38',1,9),(97,54,'../img/tu9.jpg','蜜汁叉烧','￥38',1,9),(96,53,'../img/tu9.jpg','蜜汁叉烧','￥38',1,9),(61,29,'../img/tu13.jpg','招牌色拉','￥18',1,13),(62,30,'../img/tu14.jpg','香蕉船\r\n','￥18',1,14),(63,30,'../img/tu13.jpg','招牌色拉','￥18',1,13),(64,31,'../img/tu14.jpg','香蕉船\r\n','￥18',1,14),(65,31,'../img/tu13.jpg','招牌色拉','￥18',1,13),(66,32,'../img/tu14.jpg','香蕉船\r\n','￥18',1,14),(67,32,'../img/tu13.jpg','招牌色拉','￥18',1,13),(68,33,'../img/tu14.jpg','香蕉船\r\n','￥18',1,14),(69,33,'../img/tu13.jpg','招牌色拉','￥18',1,13),(70,34,'../img/tu14.jpg','香蕉船\r\n','￥18',1,14),(71,34,'../img/tu13.jpg','招牌色拉','￥18',1,13),(72,35,'../img/tu14.jpg','香蕉船\r\n','￥18',1,14),(73,35,'../img/tu13.jpg','招牌色拉','￥18',1,13),(74,36,'../img/tu14.jpg','香蕉船\r\n','￥18',1,14),(75,36,'../img/tu13.jpg','招牌色拉','￥18',1,13),(76,37,'../img/tu3.jpg','红烧牛肉','￥66',1,3),(77,37,'../img/tu4.jpg','水煮鱼','￥55',1,4),(78,38,'../img/tu3.jpg','红烧牛肉','￥66',1,3),(79,38,'../img/tu4.jpg','水煮鱼','￥55',1,4),(80,39,'../img/tu18.jpg','水晶葡萄汁','￥18',1,18),(81,40,'../img/tu18.jpg','水晶葡萄汁','￥18',1,18),(82,41,'../img/tu14.jpg','香蕉船\r\n','￥18',1,14),(83,42,'../img/tu12.jpg','泡椒凤爪\r\n','￥28',1,12),(84,43,'../img/tu1.jpg','剁椒鱼头','￥88',1,1),(85,44,'../img/tu1.jpg','剁椒鱼头','￥88',1,1),(86,44,'../img/tu2.jpg','红烧鱼','￥55',1,2),(87,45,'../img/tu1.jpg','剁椒鱼头','￥88',1,1),(88,45,'../img/tu2.jpg','红烧鱼','￥55',1,2),(89,46,'../img/tu18.jpg','水晶葡萄汁','￥18',1,18),(90,47,'../img/tu18.jpg','水晶葡萄汁','￥18',1,18),(91,48,'../img/tu8.jpg','白灼菜心','￥28',1,8),(92,49,'../img/tu13.jpg','招牌色拉','￥18',1,13),(93,50,'../img/tu13.jpg','招牌色拉','￥18',1,13),(94,51,'../img/tu9.jpg','蜜汁叉烧','￥38',1,9),(95,52,'../img/tu9.jpg','蜜汁叉烧','￥38',1,9),(146,78,'../img/tu4.jpg','水煮鱼','￥55',1,4),(147,78,'../img/tu6.jpg','回锅肉','￥38',1,6),(148,79,'../img/tu1.jpg','剁椒鱼头','￥88',1,1),(149,79,'../img/tu2.jpg','红烧鱼','￥55',1,2),(150,79,'../img/tu6.jpg','回锅肉','￥38',1,6),(151,79,'../img/tu4.jpg','水煮鱼','￥55',1,4),(152,80,'../img/tu1.jpg','剁椒鱼头','￥88',1,1),(153,80,'../img/tu2.jpg','红烧鱼','￥55',1,2),(154,80,'../img/tu6.jpg','回锅肉','￥38',1,6),(155,80,'../img/tu4.jpg','水煮鱼','￥55',1,4),(156,81,'../img/tu15.jpg','炸薯条','￥18',2,15),(157,81,'../img/tu19.jpg','烤鸡翅\r\n','￥38',2,19),(158,82,'../img/tu13.jpg','招牌色拉','￥18',1,13),(159,82,'../img/tu14.jpg','香蕉船\r\n','￥18',1,14),(160,83,'../img/tu12.jpg','泡椒凤爪\r\n','￥28',1,12),(161,83,'../img/tu15.jpg','炸薯条','￥18',1,15),(162,84,'../img/tu18.jpg','水晶葡萄汁','￥18',1,18),(163,85,'../img/tu17.jpg','芒果汁','￥18',1,17),(164,86,'../img/tu1.jpg','剁椒鱼头','￥88',1,1),(165,86,'../img/tu2.jpg','红烧鱼','￥55',1,2),(166,87,'../img/tu12.jpg','泡椒凤爪\r\n','￥28',1,12),(167,88,'../img/tu15.jpg','炸薯条','￥18',1,15),(168,89,'../img/tu1.jpg','剁椒鱼头','￥88',1,1),(169,90,'../img/tu13.jpg','招牌色拉','￥18',1,13),(170,91,'../img/tu2.jpg','红烧鱼','￥55',2,2),(171,92,'../img/tu2.jpg','红烧鱼','￥55',2,2),(172,93,'../img/tu12.jpg','泡椒凤爪\r\n','￥28',1,12),(173,93,'../img/tu15.jpg','炸薯条','￥18',1,15),(174,94,'../img/tu13.jpg','招牌色拉','￥18',1,13),(175,95,'../img/tu3.jpg','红烧牛肉','￥66',1,3),(176,95,'../img/tu4.jpg','水煮鱼','￥55',1,4),(177,96,'../img/tu12.jpg','泡椒凤爪\r\n','￥28',1,12),(178,97,'../img/tu16.jpg','烤蜗牛','￥38',1,16),(179,98,'../img/tu18.jpg','水晶葡萄汁','￥18',1,18),(180,99,'../img/tu12.jpg','泡椒凤爪\r\n','￥28',1,12),(181,100,'../img/tu14.jpg','香蕉船\r\n','￥18',1,14),(182,101,'../img/tu1.jpg','剁椒鱼头','￥88',1,1),(183,102,'../img/tu12.jpg','泡椒凤爪\r\n','￥28',1,12),(184,102,'../img/tu15.jpg','炸薯条','￥18',1,15),(185,103,'../img/tu12.jpg','泡椒凤爪\r\n','￥28',1,12),(186,104,'../img/tu12.jpg','泡椒凤爪\r\n','￥28',1,12),(187,105,'../img/tu12.jpg','泡椒凤爪\r\n','￥28',1,12),(188,105,'../img/tu15.jpg','炸薯条','￥18',1,15),(189,106,'../img/tu18.jpg','水晶葡萄汁','￥18',1,18),(190,107,'../img/tu13.jpg','招牌色拉','￥18',1,13),(191,108,'../img/tu12.jpg','泡椒凤爪\r\n','￥28',1,12),(192,108,'../img/tu15.jpg','炸薯条','￥18',1,15),(193,109,'../img/tu15.jpg','炸薯条','￥18',1,15),(194,109,'../img/tu12.jpg','泡椒凤爪\r\n','￥28',1,12),(195,110,'../img/tu12.jpg','泡椒凤爪\r\n','￥28',1,12),(196,110,'../img/tu15.jpg','炸薯条','￥18',1,15),(197,110,'../img/tu16.jpg','烤蜗牛','￥38',1,16),(198,111,'../img/tu13.jpg','招牌色拉','￥18',1,13),(199,111,'../img/tu14.jpg','香蕉船\r\n','￥18',1,14),(200,112,'../img/tu12.jpg','泡椒凤爪\r\n','￥28',1,12),(201,112,'../img/tu15.jpg','炸薯条','￥18',1,15),(202,113,'../img/tu17.jpg','芒果汁','￥18',1,17),(203,114,'../img/tu17.jpg','芒果汁','￥18',1,17),(204,115,'../img/tu13.jpg','招牌色拉','￥18',1,13),(205,115,'../img/tu14.jpg','香蕉船\r\n','￥18',1,14),(206,116,'../img/tu13.jpg','招牌色拉','￥18',1,13),(207,117,'../img/tu1.jpg','剁椒鱼头','￥88',1,1),(208,117,'../img/tu3.jpg','红烧牛肉','￥66',1,3),(209,117,'../img/tu4.jpg','水煮鱼','￥55',1,4);

/*Table structure for table `orders` */

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` int(255) NOT NULL AUTO_INCREMENT COMMENT '订单id',
  `status` char(255) NOT NULL COMMENT '订单状态',
  `totalPrice` char(255) NOT NULL COMMENT '订单总价',
  `userid` char(255) NOT NULL COMMENT '订单用户',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=118 DEFAULT CHARSET=utf8;

/*Data for the table `orders` */

insert  into `orders`(`id`,`status`,`totalPrice`,`userid`) values (117,'已付款','209.00','jsy'),(116,'已付款','18.00','jsy'),(115,'正在制作','36.00','jsy'),(114,'已付款','18.00','jsy');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`username`,`password`) values ('jsy','123456'),('ange','123123');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
