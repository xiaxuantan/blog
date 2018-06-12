package com.xuan24.blog.service.impl;

import com.xuan24.blog.mapper.UserMapper;
import com.xuan24.blog.model.User;
import com.xuan24.blog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private UserMapper userMapper;

    @Autowired
    public UserServiceImpl(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    public User getUser(String userName) {
        return userMapper.findUserByName(userName);
    }
}
