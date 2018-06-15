package com.xuan24.blog.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.xuan24.blog.type.UserGender;

import java.time.LocalDateTime;

public class User {
    private int userId;
    private String userName;
    private String email;
    private UserGender gender;
    private String avatarKey;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime birthday;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime registerTime;

    public User() {
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
                ", avatarKey='" + avatarKey + '\'' +
                ", birthday=" + birthday +
                ", registerTime=" + registerTime +
                '}';
    }

    public String getAvatarKey() {
        return avatarKey;
    }

    public void setAvatarKey(String avatarKey) {
        this.avatarKey = avatarKey;
    }
}
