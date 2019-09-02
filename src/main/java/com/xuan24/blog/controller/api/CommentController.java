package com.xuan24.blog.controller.api;

import com.xuan24.blog.model.Comment;
import com.xuan24.blog.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/api/comment")
public class CommentController {
    private CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Comment> getCommentsByPostId(@RequestParam int postId) {
        return commentService.getCommentsByPostId(postId);
    }

}
