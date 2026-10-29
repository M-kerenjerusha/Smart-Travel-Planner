package com.travel.model;

public class Destination {
    private String name;
    private String description;
    private String type;
    private double cost;
    
    public Destination() {}
    
    public Destination(String name, String description, String type, double cost) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.cost = cost;
    }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public double getCost() { return cost; }
    public void setCost(double cost) { this.cost = cost; }
}