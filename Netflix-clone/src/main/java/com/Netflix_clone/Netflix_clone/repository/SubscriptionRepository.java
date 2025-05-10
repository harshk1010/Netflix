package com.Netflix_clone.Netflix_clone.repository;

import com.Netflix_clone.Netflix_clone.model.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {

    List<Subscription> findByUserId(Long userId);

}
