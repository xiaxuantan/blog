package com.xuan24.blog.mapper;

import com.xuan24.blog.model.Post;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface PostMapper {

    @Insert("INSERT INTO blog_post(" +
            "title," +
            "postTime," +
            "bodyKey," +
            "lastModifiedTime) VALUES (" +
            "#{title}," +
            "#{postTime}," +
            "#{bodyKey}," +
            "#{lastModifiedTime})")
    @Options(useGeneratedKeys=true, keyProperty="postId")
    void insertPost(Post post);

    @Update("UPDATE blog_post SET title=#{title}, lastModifiedTime=#{lastModifiedTime}, " +
            "visible=#{visible} WHERE postId=#{postId}")
    void updatePost(Post post);

    @Select("SELECT * FROM blog_post WHERE postId = #{postId}")
    Post findPostById(int postId);

    @Delete("DELETE FROM blog_post WHERE postId = #{postId}")
    void deletePostById(int postId);

    @Select("SELECT * FROM blog_post ORDER BY postId DESC")
    List<Post> getAllPosts();

    @Select("SELECT * FROM blog_post ORDER BY postId DESC LIMIT #{offset}, #{size}")
    List<Post> getPostsByPage(int offset, int size);

}
