import java.time.LocalDate;
import java.time.LocalTime;

public class TestDates {
    public static void main(String[] args) {
        LocalDate lD = LocalDate.now();
        LocalTime lT = LocalTime.now();
        System.out.println(lD+" "+lT);
    }
}
