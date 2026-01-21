import java.io.*;
import java.util.Scanner;

public class TestFiles {
    public static void main(String[] args) {
        File f = new File("files\\sample.txt");
//        f.getParentFile().mkdir();
//        try{
//            if(f.createNewFile())
//                System.out.println("file created with Name - "+f.getName());
//            else
//                System.out.println("file already exists");
//        }catch (IOException e){
//            System.out.println("an error occured");
//            e.printStackTrace();
//        }

//        try{
//            FileWriter fr = new FileWriter(f);
//            if(f.isFile()){
//                fr.write("Hi i am new to this \n text file. ");
//                fr.close();
//                System.out.println("successfully wrote in file");
//            }
//            else
//                System.out.println("file not found");
//        }catch (IOException e){
//            System.out.println("error occured while writing file");
//            e.printStackTrace();
//        }

        System.out.println(f.canRead());
        System.out.println(f.length());
        System.out.println(f.exists());
        System.out.println(f.getAbsoluteFile());
        System.out.println(f.getName());
        System.out.println();
        try{
            Scanner sc =  new Scanner(f);
            while(sc.hasNextLine()){
                String data = sc.nextLine();
                System.out.println(data);
            }
            sc.close();
        }catch (FileNotFoundException e){
            System.out.println("file not found");
            e.printStackTrace();
        }
    }
}
