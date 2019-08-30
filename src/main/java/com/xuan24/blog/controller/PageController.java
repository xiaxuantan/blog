package com.xuan24.blog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {

    @RequestMapping({
            "/",
            "/posts",
            "/post",
            "/photos",
            "/cv",
            "/website"
    })
    public String index() {
        return "index";
    }

}
