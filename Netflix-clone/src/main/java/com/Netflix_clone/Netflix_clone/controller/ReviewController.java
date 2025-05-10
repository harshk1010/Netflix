package com.Netflix_clone.Netflix_clone.controller;

import com.Netflix_clone.Netflix_clone.model.Review;
import com.Netflix_clone.Netflix_clone.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/review")
@RequiredArgsConstructor
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Review> saveReview(@RequestBody Review review) {
        return ResponseEntity.ok(reviewService.saveReview(review));
    }

    @GetMapping("/video/{videoId}")
    public ResponseEntity<List<Review>> getReviewsByVideoId(@PathVariable Long videoId) {
        return ResponseEntity.ok(reviewService.getReviewByVideoId(videoId));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Review>> getReviewsByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(reviewService.getReviewByUserId(userId));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable Long id) {
        reviewService.deleteReview(id);
        return ResponseEntity.ok().build();
    }
}
