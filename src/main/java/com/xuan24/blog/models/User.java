package com.xuan24.blog.models;


import com.xuan24.blog.enums.UserGender;

import java.time.LocalDateTime;

public class User {
    private int userId;
    private String userName;
    private String email;
    private UserGender gender;
    private LocalDateTime birthday;
    private LocalDateTime registerTime;

    public User() {
    }

    public User(String userName, String email, UserGender gender, LocalDateTime birthday, LocalDateTime registerTime) {
        this.userName = userName;
        this.email = email;
        this.gender = gender;
        this.birthday = birthday;
        this.registerTime = registerTime;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public UserGender getGender() {
        return gender;
    }

    public void setGender(UserGender gender) {
        this.gender = gender;
    }

    public LocalDateTime getBirthday() {
        return birthday;
    }

    public void setBirthday(LocalDateTime birthday) {
        this.birthday = birthday;
    }

    public LocalDateTime getRegisterTime() {
        return registerTime;
    }

    public void setRegisterTime(LocalDateTime registerTime) {
        this.registerTime = registerTime;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", email='" + email + '\'' +
                ", gender=" + gender +
                ", birthday=" + birthday +
                ", registerTime=" + registerTime +
                '}';
    }
}
