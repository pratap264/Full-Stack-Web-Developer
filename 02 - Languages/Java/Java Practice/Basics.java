import java.util.Scanner;

public class Basics{

    public static void main(String args[]){
        System.out.println("Enter your name : ");

        Scanner sc = new Scanner(System.in);

        String name;

        name = sc.nextLine();

        System.out.println("Welcome " + name);



        String str = "5";

        int num = Integer.parseInt(str);
        System.out.println(num);


        int res = 20;

        String ans = String.valueOf(res);
        System.out.println(ans);
    }
}