import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;

public class TestList {

    public static void main(String[] args) {
        ArrayList<String> cars = new ArrayList<String>();
        cars.add("supra");
        cars.add("mustang");
        cars.add("Tata");
        System.out.println(cars.size());

        //to access item cars.get(2);
        //to chnage a item cars.set(0,"hundai");
        cars.remove(1);
        cars.add(2,"Nano");
        for(String i:cars)
            System.out.println(i);
        //cars.clear();
        //sort cars arraylist
        System.out.println();
        Collections.sort(cars);
        for(String i:cars)
            System.out.println(i);

        System.out.println();
        Iterator<String> itr = cars.iterator();
        while (itr.hasNext())
            System.out.println(itr.next());
    }
}

// Same for Linkedlist , Vector , Stack (push , pop)