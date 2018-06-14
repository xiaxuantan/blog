DELETE FROM xuan24.blog_user;
DELETE FROM xuan24.blog_post;
INSERT INTO xuan24.blog_user(userName, email, gender, birthday, registerTime) VALUES("Peter", "hello.world@gmail.com", "MALE", "1995-06-24 00:00:00", "2018-01-01 00:00:00");
INSERT INTO xuan24.blog_user(userName, email, gender, birthday, registerTime) VALUES("June", "hello.world@ucla.edu", "FEMALE", "1995-09-08 00:00:00", "2018-01-01 00:00:00");
INSERT INTO xuan24.blog_post(title, postTime, lastModifiedTime, content) VALUES("My First Post", "2018-01-01 00:00:00", "2018-01-01 00:00:00", "# Hello Wolrd!");
INSERT INTO xuan24.blog_post(title, postTime, lastModifiedTime, content) VALUES("My Second Post", "2018-01-01 00:00:00", "2018-01-01 00:00:00", "# Hello Wolrd!");