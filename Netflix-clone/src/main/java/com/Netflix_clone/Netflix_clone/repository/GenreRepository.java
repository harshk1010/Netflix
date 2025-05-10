package com.Netflix_clone.Netflix_clone.repository;

import com.Netflix_clone.Netflix_clone.model.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepository extends JpaRepository<Genre,Long> {

    Genre findByName(String genreName);

}
