public class TestThread extends Thread {

//   public void run(){
//        System.out.println("Thread is running");
//    }

    public void run(){
        for (int i = 1; i < 5; i++) {
            try{
                Thread.sleep(500);
            }catch (InterruptedException e){
                System.out.println(e);
            }
            System.out.println(i);

        }
    }

    public static void main(String[] args) {
        TestThread t1 = new TestThread();
        TestThread t2 = new TestThread();
        t1.start();
        t2.start();
    }
}
