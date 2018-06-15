package com.xuan24.blog.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;

public class Post {
    private int postId;
    private String title;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime postTime;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime lastModifiedTime;
    private String bodyKey;

    @Override
    public String toString() {
        return "Post{" +
                "postId=" + postId +
                ", title='" + title + '\'' +
                ", postTime=" + postTime +
                ", lastModifiedTime=" + lastModifiedTime +
                ", bodyKey='" + bodyKey + '\'' +
                ", visible=" + visible +
                '}';
    }

    public String getBodyKey() {
        return bodyKey;
    }

    public void setBodyKey(String bodyKey) {
        this.bodyKey = bodyKey;
    }

    private boolean visible;

    public boolean isVisible() {
        return visible;
    }

    public void setVisible(boolean visible) {
        this.visible = visible;
    }

    public Post() {
    }

    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDateTime getPostTime() {
        return postTime;
    }

    public void setPostTime(LocalDateTime postTime) {
        this.postTime = postTime;
    }

    public LocalDateTime getLastModifiedTime() {
        return lastModifiedTime;
    }

    public void setLastModifiedTime(LocalDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
    }

}
