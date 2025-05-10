package com.Netflix_clone.Netflix_clone.service;

import com.Netflix_clone.Netflix_clone.model.Webseries;

import java.util.List;

public interface WebSeriesService {

    Webseries saveWebseries(Webseries webseries);

    List<Webseries> getAllWebSeries();

    Webseries getWebSeriesById(Long id);

    List<Webseries> getWebSeriesByGenre(String genre);

    void deleteWebSeries(Long id);

}
