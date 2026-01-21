import java.util.HashMap;
import java.util.HashSet;

public class TestMap {
    public static void main(String[] args) {
        HashMap<String,Integer> sh = new HashMap<String,Integer>();
        sh.put("vxfd",1);
        sh.put("fd",4);
        sh.put("sss",6);

        System.out.println(sh.size());
        System.out.println(sh.get("fd"));

        System.out.println();
        for(String i:sh.keySet())
            System.out.println(i);

        System.out.println();
        for(Integer i:sh.values())
            System.out.println(i);

        System.out.println();

        for (String i:sh.keySet())
            System.out.println("key-"+i+" & values-"+sh.get(i));

    }
}
