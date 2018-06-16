package com.xuan24.blog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {

    @RequestMapping({"/",
            "/space/*",
            "/posts",
            "/post",
            "/about",
            "/photos"})
    public String index() {
        return "index";
    }

}
