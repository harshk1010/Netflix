package com.Netflix_clone.Netflix_clone.service;

import com.Netflix_clone.Netflix_clone.model.Subscription;
import com.Netflix_clone.Netflix_clone.repository.SubscriptionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubscriptionServiceImpl implements SubscriptionService{

    private SubscriptionRepository repository;

    @Override
    public Subscription saveSubscription(Subscription subscription) {
        return repository.save(subscription);
    }

    @Override
    public Subscription getSubscriptionById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<Subscription> getSubscriptionByUserId(Long userId) {
        return repository.findByUserId(userId);
    }

    @Override
    public List<Subscription> getAllSubscription() {
        return repository.findAll();
    }

    @Override
    public void deleteSubscription(Long id) {
        repository.deleteById(id);
    }
}
