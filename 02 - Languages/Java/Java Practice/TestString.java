public class TestString {
    public static void main(String[] args){

        String s = "i am Pratap";
        System.out.println(s.length());
        System.out.println(s.toLowerCase());
        System.out.println(s.split(" "));
        System.out.println(s.replaceAll(" ","-"));
        System.out.println(s.isEmpty());
        System.out.println(s.charAt(7));

        StringBuilder sb = new StringBuilder(s);
        sb.append(" Garud");

    }

}
