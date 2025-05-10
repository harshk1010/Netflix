package com.Netflix_clone.Netflix_clone.repository;

import com.Netflix_clone.Netflix_clone.model.Favorites;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FavoritesRepository extends JpaRepository<Favorites,Long> {

    List<Favorites> findByUserId(Long userId);
}
