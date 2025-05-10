package com.Netflix_clone.Netflix_clone.repository;

import com.Netflix_clone.Netflix_clone.model.Video;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VideoRepository extends JpaRepository<Video, Long> {

    List<Video> findByIsFeaturedTrue();

    List<Video> findByTitle(String title);

    @Query("SELECT v FROM Video v JOIN v.genres g WHERE g.name = :genreName")
    List<Video> findByGenres(@Param("genreName") String genreName);

    Page<Video> findByRatingGreaterThanEqual(Pageable pageable, Double rating);  // Correct method

    @NotNull
    Page<Video> findAll(@NotNull Pageable pageable);
}
