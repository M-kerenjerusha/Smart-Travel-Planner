import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Booking> bookings = new ArrayList<>();

        System.out.print("Enter your name: ");
        String name = sc.nextLine();
        User user = new User(name);

        System.out.print("Enter trip destination: ");
        String destination = sc.nextLine();
        Trip trip = new Trip(destination);

        bookings.add(new Booking(user, trip));

        System.out.println("\nBookings:");
        for (Booking b : bookings) {
            System.out.println(b.getDetails());
        }
    }
}
