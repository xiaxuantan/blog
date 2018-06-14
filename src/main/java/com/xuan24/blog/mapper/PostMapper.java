package com.xuan24.blog.mapper;

import com.xuan24.blog.model.Post;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface PostMapper {

    @Insert("INSERT INTO blog_post(" +
            "title," +
            "postTime," +
            "lastModifiedTime," +
            "content) VALUES (" +
            "#{title}," +
            "#{postTime}," +
            "#{lastModifiedTime}," +
            "#{content})")
    @Options(useGeneratedKeys=true, keyProperty="postId")
    void insertPost(Post post);

    @Update("UPDATE blog_post SET title=#{title}, lastModifiedTime=#{lastModifiedTime}, " +
            "content=#{content}, visible=#{visible} WHERE postId=#{postId}")
    void updatePostBody(Post post);

    @Select("SELECT * FROM blog_post WHERE postId = #{postId}")
    Post findPostById(int postId);

    @Delete("DELETE FROM blog_post WHERE postId = #{postId}")
    void deletePostById(int postId);

    @Select("SELECT postId, title, postTime, lastModifiedTime, visible" +
            " FROM blog_post ORDER BY postId DESC")
    List<Post> getAllPosts();

    @Select("SELECT postId, title, postTime, lastModifiedTime, visible" +
            " FROM blog_post ORDER BY postId DESC LIMIT #{offset}, #{size}")
    List<Post> getPostsByPage(int offset, int size);

}
