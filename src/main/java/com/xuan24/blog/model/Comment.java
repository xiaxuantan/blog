package com.xuan24.blog.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;

public class Comment {
    private int postId;
    private String email;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime commentedTime;
    private String content;
    private int up;
    private int down;

    @Override
    public String toString() {
        return "Comment{" +
                "postId=" + postId +
                ", email='" + email + '\'' +
                ", commentedTime=" + commentedTime +
                ", content='" + content + '\'' +
                ", up=" + up +
                ", down=" + down +
                '}';
    }

    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getCommentedTime() {
        return commentedTime;
    }

    public void setCommentedTime(LocalDateTime commentedTime) {
        this.commentedTime = commentedTime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getUp() {
        return up;
    }

    public void setUp(int up) {
        this.up = up;
    }

    public int getDown() {
        return down;
    }

    public void setDown(int down) {
        this.down = down;
    }
}