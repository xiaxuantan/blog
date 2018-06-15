package com.xuan24.blog.mapper;

import com.xuan24.blog.model.User;
import org.apache.ibatis.annotations.*;


@Mapper
public interface UserMapper {

    @Insert("INSERT INTO blog_user(" +
            "userName," +
            "email," +
            "gender," +
            "birthday," +
            "avatarKey," +
            "registerTime) VALUES (" +
            "#{userName}," +
            "#{email}," +
            "#{gender}," +
            "#{birthday}," +
            "#{avatarKey}," +
            "#{registerTime})")
    void insertUser(User user);

    @Update("UPDATE blog_user SET gender=#{gender}, " +
            "birthday=#{birthday}, avatarKey=#{avatarKey} WHERE userName=#{userName}")
    void updateUser(User user);

    @Select("SELECT * FROM blog_user WHERE userName = #{userName}")
    User findUserByName(String userName);

    @Delete("DELETE FROM blog_user WHERE userName = #{userName}")
    void deleteUserByName(String userName);
}
