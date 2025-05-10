package com.Netflix_clone.Netflix_clone.service;

import com.Netflix_clone.Netflix_clone.model.Review;

import java.util.List;

public interface ReviewService {

    Review saveReview(Review review);

    List<Review> getReviewByVideoId(Long videoId);

    List<Review> getReviewByUserId(Long userId);

    void deleteReview(Long id);

}
