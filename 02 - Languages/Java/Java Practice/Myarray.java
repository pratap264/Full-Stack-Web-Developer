// String[] cars = new String[3]; just declearing arrays in java

class Myarray {

    public static void main(String args[]) {
        String[] cars = { "volvo", "ford", "bmw" };

        int[] num = { 10, 20, 30, 40 };

        System.out.println(cars[0]);

        cars[0] = "opel";

        System.out.println(cars.length);

    }
}
