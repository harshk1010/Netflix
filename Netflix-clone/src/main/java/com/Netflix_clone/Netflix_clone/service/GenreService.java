package com.Netflix_clone.Netflix_clone.service;

import com.Netflix_clone.Netflix_clone.model.Genre;

import java.util.List;

public interface GenreService {

    Genre saveGenre(Genre genre);

    Genre getGenreById(Long id);

    List<Genre> getAllGenre();

    Genre getGenreByName(String genreName);

    void deleteGenre(Long id);

}
