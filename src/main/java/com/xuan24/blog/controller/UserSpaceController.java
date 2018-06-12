package com.xuan24.blog.controller;

import com.xuan24.blog.model.User;
import com.xuan24.blog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/space")
public class UserSpaceController {

    private UserService userService;

    @Autowired
    public UserSpaceController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("{name}")
    String showUserSpace(@PathVariable String name, Model model) {
        User user = userService.getUser(name);
        model.addAttribute("user", user);
        return "user-space";
    }

}
