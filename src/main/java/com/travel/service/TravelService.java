package com.travel.service;

import com.travel.model.Destination;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class TravelService {
    private List<Destination> destinations;
    private List<Map<String, Object>> travelPlans;
    
    public TravelService() {
        this.destinations = new ArrayList<>();
        this.travelPlans = new ArrayList<>();
        initializeDestinations();
    }
    
    private void initializeDestinations() {
        destinations.add(new Destination("Paris", "City of Lights", "historical", 1200));
        destinations.add(new Destination("Tokyo", "Modern metropolis", "shopping", 1500));
        destinations.add(new Destination("Bali", "Tropical paradise", "adventure", 1000));
        destinations.add(new Destination("New York", "The Big Apple", "cultural", 1300));
        destinations.add(new Destination("Swiss Alps", "Mountain adventure", "adventure", 1800));
    }
    
    public List<Destination> getDestinations() {
        return destinations;
    }
    
    public List<Destination> getDestinationsByType(String type) {
        List<Destination> result = new ArrayList<>();
        for (Destination dest : destinations) {
            if (dest.getType().equalsIgnoreCase(type)) {
                result.add(dest);
            }
        }
        return result;
    }
    
    public Map<String, Object> createTravelPlan(String planName, int travelers, int days, 
                                              String destination, String accommodation) {
        Map<String, Object> plan = new HashMap<>();
        plan.put("name", planName);
        plan.put("travelers", travelers);
        plan.put("days", days);
        plan.put("destination", destination);
        plan.put("accommodation", accommodation);
        
        // Budget calculation
        double baseCost = getDestinationCost(destination);
        double accommodationCost = getAccommodationCost(accommodation) * days * travelers;
        double foodCost = 50 * days * travelers;
        double activitiesCost = 30 * days * travelers;
        double totalBudget = baseCost + accommodationCost + foodCost + activitiesCost;
        
        plan.put("baseCost", baseCost);
        plan.put("accommodationCost", accommodationCost);
        plan.put("foodCost", foodCost);
        plan.put("activitiesCost", activitiesCost);
        plan.put("totalBudget", totalBudget);
        
        travelPlans.add(plan);
        return plan;
    }
    
    private double getDestinationCost(String destination) {
        for (Destination dest : destinations) {
            if (dest.getName().equalsIgnoreCase(destination)) {
                return dest.getCost();
            }
        }
        return 1000;
    }
    
    private double getAccommodationCost(String type) {
        switch (type.toLowerCase()) {
            case "budget": return 50;
            case "mid-range": return 100;
            case "luxury": return 200;
            default: return 80;
        }
    }
    
    public List<Map<String, Object>> getTravelPlans() {
        return travelPlans;
    }
}