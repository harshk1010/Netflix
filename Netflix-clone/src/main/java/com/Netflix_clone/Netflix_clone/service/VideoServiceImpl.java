package com.Netflix_clone.Netflix_clone.service;

import com.Netflix_clone.Netflix_clone.model.Video;
import com.Netflix_clone.Netflix_clone.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;
import java.util.List;

@Service
public class VideoServiceImpl implements VideoService {


    @Autowired
    private VideoRepository videoRepository;

    @Override
    public Video saveVideo(Video video) {
        return videoRepository.save(video);
    }

    @Override
    public Video getVideoById(Long id) {
        return videoRepository.findById(id).orElse(null);
    }

    @Override
    public List<Video> getAllVideo() {
        return videoRepository.findAll();
    }

    @Override
    public List<Video> getVideoByGenre(String genre) {
        return videoRepository.findByGenres(genre);
    }

    @Override
    public List<Video> searchVideo(String title) {
        return videoRepository.findByTitle(title);
    }

    @Override
    public List<Video> getFeaturedVideo() {
        return videoRepository.findByIsFeaturedTrue();
    }

    @Override
    public Page<Video> getVideos(Pageable pageable, Double rating) {
        if (rating != null) {
            return videoRepository.findByRatingGreaterThanEqual((org.springframework.data.domain.Pageable) pageable, rating);
        }
        return videoRepository.findAll((org.springframework.data.domain.Pageable) pageable);  // Corrected return statement
    }

    @Override
    public void deleteVideo(Long id) {
        videoRepository.deleteById(id);
    }

}
