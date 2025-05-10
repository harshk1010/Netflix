package com.Netflix_clone.Netflix_clone.service;

import com.Netflix_clone.Netflix_clone.model.WatchHistory;
import com.Netflix_clone.Netflix_clone.repository.WatchHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WatchHistoryServiceImpl implements WatchHistoryService{

    @Autowired
    private WatchHistoryRepository watchHistoryRepository;

    @Override
    public WatchHistory saveWatchHistory(WatchHistory watchHistory) {
        return watchHistoryRepository.save(watchHistory);
    }

    @Override
    public List<WatchHistory> getWatchHistoryByUserId(Long userId) {
        return watchHistoryRepository.findByUserId(userId);
    }

    @Override
    public void deleteWatchHistoryById(Long id) {

        watchHistoryRepository.deleteById(id);
    }
}