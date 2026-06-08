public class Stringswork {

    public static void main(String args[]) {
        String str = " Hello";
        char res = str.charAt(1);
        System.out.println(res);
        System.out.println(str.contains("llo"));
        System.out.println(str.replace("l","m"));

         String myStr = "Split a string by spaces, and also punctuation.";
         String[] split = myStr.split(" ");

         for(String i : split){
            System.out.println(i);
         }


        
    }
}
