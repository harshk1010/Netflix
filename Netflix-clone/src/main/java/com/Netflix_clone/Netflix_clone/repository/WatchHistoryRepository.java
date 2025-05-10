package com.Netflix_clone.Netflix_clone.repository;

import com.Netflix_clone.Netflix_clone.model.WatchHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WatchHistoryRepository extends JpaRepository<WatchHistory,Long> {

    List<WatchHistory> findByUserId(Long userId);
}
