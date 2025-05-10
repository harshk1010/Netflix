package com.Netflix_clone.Netflix_clone.service;

import com.Netflix_clone.Netflix_clone.model.WatchHistory;

import java.util.List;

public interface WatchHistoryService {

    WatchHistory saveWatchHistory(WatchHistory watchHistory);

    List<WatchHistory> getWatchHistoryByUserId(Long userId);

    void deleteWatchHistoryById(Long id);

}
