package com.Netflix_clone.Netflix_clone.repository;

import com.Netflix_clone.Netflix_clone.model.Webseries;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WebSeriesRepository extends JpaRepository<Webseries,Long> {

    @Query("SELECT w FROM Webseries w JOIN w.genres g WHERE g.name = :name")
    List<Webseries> findByGenreName(@Param("name") String name);

}
