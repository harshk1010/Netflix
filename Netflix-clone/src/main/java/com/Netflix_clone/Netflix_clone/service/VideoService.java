package com.Netflix_clone.Netflix_clone.service;

import com.Netflix_clone.Netflix_clone.model.Video;
import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;
import java.util.List;

public interface VideoService {

    Video saveVideo(Video video);

    Video getVideoById(Long id);

    List<Video> getAllVideo();

    List<Video> getVideoByGenre(String genre);

    List<Video> searchVideo(String search);

    List<Video> getFeaturedVideo();

    Page<Video> getVideos(Pageable pageable, Double rating);

    void deleteVideo(Long id);

}
