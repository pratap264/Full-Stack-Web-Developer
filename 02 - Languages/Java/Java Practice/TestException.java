public class TestException {

    static void checkAge(int age){
        if(age<18){
            throw new ArithmeticException("Acces Denied - you must be 18+");
        }
        else
            System.out.println("Access Granted");
    }


    void fun() throws ArithmeticException{
        throw new ArithmeticException("Not valid");
    }

    public static void main(String[] args) {

        try{
            TestException te = new TestException();
            te.fun();
        }catch (Exception e){
            System.out.println("exception handled");
        }



        //checkAge(15);

        int[] array = {1,4,2};
        try{
            System.out.println(array[5]);
        }catch (Exception e){
            System.out.println("Something wrong hapened");
            System.out.println(e);
        }
        finally {
            System.out.println("try catch code finished");
        }
    }
}
