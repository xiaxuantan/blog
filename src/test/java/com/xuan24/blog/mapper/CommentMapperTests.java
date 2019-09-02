package com.xuan24.blog.mapper;

import com.xuan24.blog.model.Comment;
import com.xuan24.blog.model.Post;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;
import java.util.List;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
public class CommentMapperTests {

    @Autowired
    private CommentMapper commentMapper;
    @Autowired
    private PostMapper postMapper;

    private static int postId;
    private static int commentId;

    @Test
    public void test000InsertComment() {
        Post post = new Post();
        post.setTitle("");
        post.setPublishedTime(LocalDateTime.now());
        post.setLastModifiedTime(LocalDateTime.now());
        post.setBodyKey("");
        post.setPageCount(0);
        postMapper.insertPost(post);
        postId = post.getPostId();
        Comment comment = new Comment();
        comment.setPostId(postId);
        comment.setCommentedTime(LocalDateTime.now());
        comment.setContent("hello");
        comment.setUp(100);
        comment.setDown(40);
        comment.setEmail("123@123.com");
        commentMapper.insertComment(comment);
        commentId = comment.getCommentId();
    }

    @Test
    public void test001GetCommentById() {
        Comment comment = commentMapper.getCommentById(commentId);
        Assert.assertEquals(comment.getContent(), "hello");
        Assert.assertEquals(comment.getUp(), 100);
        Assert.assertEquals(comment.getDown(), 40);
    }

    @Test
    public void test002GetCommentsByPostId() {
        List<Comment> comments = commentMapper.getCommentsByPostId(postId);
        Assert.assertEquals(comments.size(), 1);
    }

    @Test
    public void test003UpdateComment() {
        Comment comment = commentMapper.getCommentById(commentId);
        comment.setUp(123);
        comment.setDown(456);
        commentMapper.updateComment(comment);
        comment = commentMapper.getCommentById(commentId);
        Assert.assertEquals(comment.getUp(), 123);
        Assert.assertEquals(comment.getDown(), 456);
    }

    @Test
    public void test004OnCascadeDelete() {
        postMapper.deletePostById(postId);
        List<Comment> comments = commentMapper.getCommentsByPostId(postId);
        Assert.assertEquals(comments.size(), 0);
    }

}
