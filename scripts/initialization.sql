DELETE FROM xuan24.blog_post;
INSERT INTO xuan24.blog_post(title, publishedTime, lastModifiedTime, bodyKey, pageCount) VALUES("My 1st Post", "2018-01-01 00:00:00", "2018-01-01 00:00:00", "posts/1.md", 100);
INSERT INTO xuan24.blog_post(title, publishedTime, lastModifiedTime, bodyKey, pageCount) VALUES("My 2nd Post", "2018-01-01 00:00:00", "2018-01-01 00:00:00", "posts/2.md", 50);
INSERT INTO xuan24.blog_comment(postId, email, commentedTime, content, up, down) VALUES (1, "xiaxuant@usc.edu", "2018-01-01 00:00:00", "**Good**!", 5, 3);
INSERT INTO xuan24.blog_comment(postId, email, commentedTime, content, up, down) VALUES (1, "xiaxuant@usc.edu", "2018-01-01 00:00:00", "Very Good!", 4, 6);