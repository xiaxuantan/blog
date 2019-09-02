CREATE DATABASE IF NOT EXISTS xuan24;
USE xuan24;

CREATE TABLE IF NOT EXISTS blog_post
(
    postId           INT AUTO_INCREMENT,
    title            VARCHAR(255) NOT NULL,
    publishedTime    DATETIME     NOT NULL,
    lastModifiedTime DATETIME     NOT NULL,
    visible          TINYINT(1)   NOT NULL DEFAULT 1,
    bodyKey          VARCHAR(255) NOT NULL,
    pageCount        INT                   DEFAULT 0,
    PRIMARY KEY (postId)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;
