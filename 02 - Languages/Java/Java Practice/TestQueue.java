import java.util.ArrayDeque;
import java.util.Iterator;
import java.util.PriorityQueue;

public class TestQueue {
    public static void main(String[] args) {
        PriorityQueue<String> pq = new PriorityQueue<String>();  //automaitcally sort strings
        pq.add("rohit");
        pq.add("virat");
        pq.add("pratap");
        pq.add("yourname");

        System.out.println(pq.peek()); //peek and element both returns top/first priority
        System.out.println(pq.element());
        System.out.println(pq.size());
        //pq.remove();
        //pq.poll(); // poll(); also remove from end

        System.out.println();
        Iterator<String> itr = pq.iterator();
        while (itr.hasNext())
            System.out.println(itr.next());


        System.out.println();
        ArrayDeque<String> ad = new ArrayDeque<String>();
        ad.add("rogit");
        ad.add("vxdb");
        ad.add("gvgdf");
        ad.addFirst("Pratap");
        ad.removeLast();
        // peek first peek last , poll first poll last

        for(String i:ad)
            System.out.println(i);
    }
}
