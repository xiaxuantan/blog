CREATE DATABASE IF NOT EXISTS xuan24;
USE xuan24;

CREATE TABLE IF NOT EXISTS blog_user (
  userId INT AUTO_INCREMENT,
  userName VARCHAR (50) UNIQUE NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  gender VARCHAR(10),
  birthday DATE,
  registerTime DATETIME NOT NULL,
  avatarKey VARCHAR(255),
  PRIMARY KEY (userId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS blog_post (
  postId INT AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  publishedTime DATETIME NOT NULL,
  lastModifiedTime DATETIME NOT NULL,
  visible TINYINT(1) NOT NULL DEFAULT 1,
  bodyKey VARCHAR(255) NOT NULL,
  PRIMARY KEY (postId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
