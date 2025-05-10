package com.Netflix_clone.Netflix_clone.service;

import com.Netflix_clone.Netflix_clone.model.SubscriptionPlan;

import java.util.List;

public interface SubscriptionPlanService {

    SubscriptionPlan activatePlan(SubscriptionPlan plan);

    List<SubscriptionPlan> getAllPlan();

    SubscriptionPlan getPlanById(Long id);

    SubscriptionPlan updatePlan(Long id, SubscriptionPlan updatedPlan);

    void deletePlan(Long id);
}
