package com.Netflix_clone.Netflix_clone.service;

import com.Netflix_clone.Netflix_clone.model.Review;
import com.Netflix_clone.Netflix_clone.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService{

    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public Review saveReview(Review review) {
        return reviewRepository.save(review);
    }

    @Override
    public List<Review> getReviewByVideoId(Long videoId) {
        return reviewRepository.findByVideoId(videoId);
    }

    @Override
    public List<Review> getReviewByUserId(Long userId) {
        return reviewRepository.findByUserId(userId);
    }

    @Override
    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }
}
