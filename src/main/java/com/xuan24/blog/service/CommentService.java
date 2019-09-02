package com.xuan24.blog.service;

import com.xuan24.blog.model.Comment;

import java.util.List;

public interface CommentService {

    List<Comment> getCommentsByPostId(int postId);

    void upVote(int commentId);

    void downVote(int commentId);

    void makeComment(int postId, String email, String content);
}
