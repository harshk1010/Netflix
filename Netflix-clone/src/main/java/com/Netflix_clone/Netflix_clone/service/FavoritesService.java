package com.Netflix_clone.Netflix_clone.service;



import com.Netflix_clone.Netflix_clone.model.Favorites;

import java.util.List;

public interface FavoritesService {

    Favorites saveFavorite(Favorites favorites);

    List<Favorites> getFavoritesByUserId(Long userId);

    void removeFavorite(Long id);

}
