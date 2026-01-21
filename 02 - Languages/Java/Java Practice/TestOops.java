class Test {
    void fun(){
        System.out.println("i am fun");
    }
    private int rollNo = 69;

    int getRollNo(){
        return rollNo;
    }
    public void setRollNo(int rollNo) {
        this.rollNo = rollNo;
    }
}

class TestOops extends Test{
    String s = "i am string";
    void fun(){
        System.out.println("i am new fun");
    }
    public static void main(String[] args) {
        Test op = new TestOops();
        op.fun();
        //System.out.println(op.s);
        System.out.println(op.getRollNo());
    }
}
