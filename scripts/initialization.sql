DELETE FROM xuan24.blog_user;
DELETE FROM xuan24.blog_post;
INSERT INTO xuan24.blog_user(userName, email, gender, birthday, registerTime, avatarKey) VALUES("Peter", "hello.world@gmail.com", "MALE", "1995-06-24 00:00:00", "2018-01-01 00:00:00", "avatars/default-avatar.jpg");
INSERT INTO xuan24.blog_user(userName, email, gender, birthday, registerTime, avatarKey) VALUES("June", "hello.world@ucla.edu", "FEMALE", "1995-09-08 00:00:00", "2018-01-01 00:00:00", "avatars/default-avatar.jpg");
INSERT INTO xuan24.blog_post(title, postTime, lastModifiedTime, bodyKey) VALUES("My 1st Post", "2018-01-01 00:00:00", "2018-01-01 00:00:00", "posts/1.md");
INSERT INTO xuan24.blog_post(title, postTime, lastModifiedTime, bodyKey) VALUES("My 2nd Post", "2018-01-01 00:00:00", "2018-01-01 00:00:00", "posts/2.md");