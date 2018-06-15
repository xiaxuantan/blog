package com.xuan24.blog.mapper;

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


@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
public class PostMapperTests {

    @Autowired
    private PostMapper postMapper;
    private String testTitle = "My Test Post";
    private LocalDateTime testPostTime = LocalDateTime.now();
    private String testBodyKey = "posts/test.md";

    private static int testPostId;

    @Test
    public void test000InsertPost() {
        Post post = new Post();
        post.setTitle(testTitle);
        post.setPublishedTime(testPostTime);
        post.setLastModifiedTime(testPostTime);
        post.setBodyKey(testBodyKey);
        postMapper.insertPost(post);
        testPostId = post.getPostId();
    }

    @Test
    public void test001FindPostById() {
        Post post = postMapper.findPostById(testPostId);
        Assert.assertEquals(post.getLastModifiedTime(), post.getPublishedTime());
        Assert.assertEquals(post.getTitle(), testTitle);
        Assert.assertEquals(post.getBodyKey(), testBodyKey);
        Assert.assertTrue(post.isVisible());
    }

    @Test
    public void test002UpdatePostById() {
        Post post = postMapper.findPostById(testPostId);

        var newTitle = "My Updated Post";
        var current = LocalDateTime.now();

        post.setLastModifiedTime(current);
        post.setVisible(false);
        post.setTitle(newTitle);

        postMapper.updatePost(post);
        post = postMapper.findPostById(testPostId);

        Assert.assertFalse(post.isVisible());
        Assert.assertEquals(post.getTitle(), newTitle);
    }

    @Test
    public void test003FindAllPosts() {
        var allPosts = postMapper.getAllPosts();
        Assert.assertEquals(allPosts.get(0).getPostId(), testPostId);
    }

    @Test
    public void test004DeletePostById() {
        postMapper.deletePostById(testPostId);
        Post post = postMapper.findPostById(testPostId);
        Assert.assertNull(post);
    }

}
