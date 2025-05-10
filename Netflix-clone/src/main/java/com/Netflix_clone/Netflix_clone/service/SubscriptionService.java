package com.Netflix_clone.Netflix_clone.service;

import com.Netflix_clone.Netflix_clone.model.Subscription;

import java.util.List;

public interface SubscriptionService {

    Subscription saveSubscription(Subscription subscription);

    Subscription getSubscriptionById(Long id);

    List<Subscription> getSubscriptionByUserId(Long userId);

    List<Subscription> getAllSubscription();

    void deleteSubscription(Long id);

}
