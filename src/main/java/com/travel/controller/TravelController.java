package com.travel.controller;

import com.travel.service.TravelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
public class TravelController {
    
    @Autowired
    private TravelService travelService;
    
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("destinations", travelService.getDestinations());
        model.addAttribute("plans", travelService.getTravelPlans());
        return "index";
    }
    
    @PostMapping("/createPlan")
    public String createPlan(@RequestParam String planName,
                           @RequestParam int travelers,
                           @RequestParam int days,
                           @RequestParam String destination,
                           @RequestParam String accommodation,
                           Model model) {
        
        Map<String, Object> plan = travelService.createTravelPlan(planName, travelers, days, destination, accommodation);
        
        model.addAttribute("plan", plan);
        model.addAttribute("destinations", travelService.getDestinations());
        model.addAttribute("plans", travelService.getTravelPlans());
        model.addAttribute("message", "Travel plan created successfully!");
        
        return "index";
    }
}