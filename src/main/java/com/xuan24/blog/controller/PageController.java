package com.xuan24.blog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {

    @RequestMapping({
            "/",
            "/space/*",
            "/posts",
            "/post",
            "/post/edit",
            "/about",
            "/photos",
            "/cv",
            "/milestones"
    })
    public String index() {
        return "index";
    }

}
