package com.Netflix_clone.Netflix_clone.service;


import com.Netflix_clone.Netflix_clone.model.Cast;

import java.util.List;

public interface CastService {

    Cast saveCast(Cast cast);

    Cast getCastById(Long id);

    List<Cast> getCastByVideoId(Long videoId);

    List<Cast> getAllCast();

    void deleteCast(Long id);

}
