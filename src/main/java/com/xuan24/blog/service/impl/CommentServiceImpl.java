package com.xuan24.blog.service.impl;

import com.xuan24.blog.mapper.CommentMapper;
import com.xuan24.blog.model.Comment;
import com.xuan24.blog.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    private CommentMapper commentMapper;

    @Autowired
    public CommentServiceImpl(CommentMapper commentMapper) {
        this.commentMapper = commentMapper;
    }

    @Override
    public List<Comment> getCommentsByPostId(int postId) {
        return commentMapper.getCommentsByPostId(postId);
    }


    @Override
    public void upVote(int commentId) {
        Comment comment = commentMapper.getCommentById(commentId);
        comment.setUp(comment.getUp() + 1);
        commentMapper.updateComment(comment);
    }

    @Override
    public void downVote(int commentId) {
        Comment comment = commentMapper.getCommentById(commentId);
        comment.setUp(comment.getUp() - 1);
        commentMapper.updateComment(comment);
    }

    @Override
    public void makeComment(int postId, String email, String content) {
        Comment comment = new Comment();
        comment.setUp(0);
        comment.setDown(0);
        comment.setEmail(email);
        comment.setContent(content);
        comment.setPostId(postId);
        commentMapper.insertComment(comment);
    }
}
