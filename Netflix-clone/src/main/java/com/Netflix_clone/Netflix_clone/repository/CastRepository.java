package com.Netflix_clone.Netflix_clone.repository;


import com.Netflix_clone.Netflix_clone.model.Cast;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CastRepository extends JpaRepository<Cast,Long> {

    @Query("SELECT c FROM Cast c JOIN c.videos v WHERE v.id = :videoId")
    List<Cast> findByVideoId(@Param("videoId") Long videoId);

}
