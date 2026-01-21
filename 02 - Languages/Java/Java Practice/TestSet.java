import java.util.HashSet;
import java.util.Iterator;

public class TestSet {
    public static void main(String[] args) {
        HashSet<String> sh = new HashSet<>();
        sh.add("test");
        sh.add("dgdf");
        sh.add("vdx");

        System.out.println(sh.isEmpty());
        System.out.println();
        Iterator<String> itr = sh.iterator();
        while (itr.hasNext())
            System.out.println(itr.next());
        System.out.println();
        System.out.println(sh.contains("est"));
    }
}
