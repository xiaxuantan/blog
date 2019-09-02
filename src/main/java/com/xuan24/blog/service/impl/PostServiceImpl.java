package com.xuan24.blog.service.impl;

import com.xuan24.blog.mapper.PostMapper;
import com.xuan24.blog.model.Post;
import com.xuan24.blog.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    private PostMapper postMapper;

    @Autowired
    public PostServiceImpl(PostMapper postMapper) {
        this.postMapper = postMapper;
    }

    @Override
    public List<Post> getAllPosts() {
        return postMapper.getAllPosts();
    }

    @Override
    public List<Post> getPostByPage(int page) {
        int offset = page == 0 ? 0 : (page - 1) * 10;
        int size = 20;
        return postMapper.getPostsByPage(offset, size);
    }

    @Override
    public Post findPostById(int postId) {
        Post post = postMapper.findPostById(postId);
        post.setPageCount(post.getPageCount() + 1);
        postMapper.updatePost(post);
        return post;
    }
}
