package com.xuan24.blog.service;

import com.xuan24.blog.model.Post;

import java.util.List;

public interface PostService {

    List<Post> getAllPosts();
    List<Post> getPostByPage(int page);

}
