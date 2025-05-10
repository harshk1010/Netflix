package com.Netflix_clone.Netflix_clone.service;

import com.Netflix_clone.Netflix_clone.model.Favorites;
import com.Netflix_clone.Netflix_clone.repository.FavoritesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoritesServiceImpl implements FavoritesService{

    @Autowired
    private FavoritesRepository favoritesRepository;

    @Override
    public Favorites saveFavorite(Favorites favorites) {
        return favoritesRepository.save(favorites);
    }

    @Override
    public List<Favorites> getFavoritesByUserId(Long userId) {
        return favoritesRepository.findByUserId(userId);
    }

    @Override
    public void removeFavorite(Long id) {

        favoritesRepository.deleteById(id);
    }
}
