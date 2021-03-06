package com.xuan24.blog.controller.api;

import com.xuan24.blog.model.Post;
import com.xuan24.blog.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/api/post")
public class PostController {

    private PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @RequestMapping(method = RequestMethod.GET, params = "type=page")
    @ResponseBody
    public List<Post> getPostsByPage(@RequestParam int page) {
        return postService.getPostByPage(page);
    }

    @RequestMapping(method = RequestMethod.GET, params = "type=single")
    @ResponseBody
    public Post getPostById(@RequestParam int id) {
        return postService.findPostById(id);
    }

    @RequestMapping(method = RequestMethod.GET, params = "type=all")
    @ResponseBody
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }


}
