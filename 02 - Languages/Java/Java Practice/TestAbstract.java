//abstract class TestClass {
//    abstract void fun();
//    void fun2(){
//        System.out.println("i am fun2");
//    }
//}

interface TestA{
   public void fun();
   public void fun2();

   enum Level{
       low,high,med
    }
}

class  TestAbstract implements TestA{
    public void fun(){
        System.out.println("i am fun");
    }
    public void fun2(){
        System.out.println("i am fun2");
    }

    public static void main(String[] args) {
        TestAbstract op = new TestAbstract();
        op.fun();
        op.fun2();
        System.out.println(Level.med);
    }
}