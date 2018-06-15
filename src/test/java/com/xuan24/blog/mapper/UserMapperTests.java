package com.xuan24.blog.mapper;

import com.xuan24.blog.type.UserGender;
import com.xuan24.blog.model.User;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;


@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
public class UserMapperTests {

    @Autowired
    private UserMapper userMapper;

    private static User user;

    private String testUserName = "June";
    private LocalDateTime testRegisterTime = LocalDateTime.now();
    private LocalDateTime testBirthday = LocalDateTime.of(1995, 6, 24, 0, 0, 0);
    private String testEmail = "hello.world@gmail.com";
    private UserGender testGender = UserGender.MALE;

    @Test
    public void test000DeleteUser() {
        userMapper.deleteUserByName(testUserName);
    }

    @Test
    public void test001InsertUser() {
        User user = new User();
        user.setUserName(testUserName);
        user.setEmail(testEmail);
        user.setGender(testGender);
        user.setBirthday(testBirthday);
        user.setRegisterTime(testRegisterTime);
        userMapper.insertUser(user);
    }

    @Test
    public void test002FindUserByName() {
        User user = userMapper.findUserByName(testUserName);
        Assert.assertEquals(user.getUserName(), testUserName);
        Assert.assertEquals(user.getEmail(), testEmail);
        Assert.assertEquals(user.getGender(), testGender);
        Assert.assertEquals(user.getBirthday(), testBirthday);
        Assert.assertEquals(user.getRegisterTime().getDayOfYear(), testRegisterTime.getDayOfYear());
    }

    @Test
    public void test003UpdateUserByName() {
        User user = userMapper.findUserByName(testUserName);

        var newBirthday = LocalDateTime.of(1995, 9, 8, 0, 0, 0);
        var newGender = UserGender.FEMALE;
        var newProfile = "/asset/new_profile.jpg";

        user.setGender(UserGender.FEMALE);
        user.setBirthday(newBirthday);
        user.setProfile(newProfile);
        userMapper.updateUser(user);

        var updatedUser = userMapper.findUserByName(testUserName);
        Assert.assertEquals(updatedUser.getBirthday(), newBirthday);
        Assert.assertEquals(updatedUser.getGender(), newGender);
        Assert.assertEquals(updatedUser.getProfile(), newProfile);
    }

}
