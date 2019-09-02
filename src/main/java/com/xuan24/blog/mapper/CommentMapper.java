package com.xuan24.blog.mapper;

import com.xuan24.blog.model.Comment;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CommentMapper {
    @Insert("INSERT INTO blog_comment(" +
            "postId," +
            "email," +
            "commentedTime," +
            "content," +
            "up," +
            "down) VALUES (" +
            "#{postId}," +
            "#{email}," +
            "#{commentedTime}," +
            "#{content}," +
            "#{up}," +
            "#{down})")
    @Options(useGeneratedKeys = true, keyProperty = "commentId")
    void insertComment(Comment comment);

    @Update("UPDATE blog_comment SET up=#{up}, down=#{down} WHERE commentId=#{commentId}")
    void updateComment(Comment comment);

//    @Select("SELECT * FROM blog_post WHERE postId = #{postId}")
//    Post findPostById(int postId);

    @Select("SELECT * FROM blog_comment WHERE commentId = #{commentId}")
    Comment getCommentById(int commentId);

    @Select("SELECT * FROM blog_comment WHERE postId = #{postId} ORDER BY commentedTime")
    List<Comment> getCommentsByPostId(int postId);
}
