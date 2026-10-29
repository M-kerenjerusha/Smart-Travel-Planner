public class Booking {
    User user;
    Trip trip;
    public Booking(User user, Trip trip) {
        this.user = user;
        this.trip = trip;
    }
    public String getDetails() {
        return user.getName() + " booked " + trip.getDestination();
    }
}
