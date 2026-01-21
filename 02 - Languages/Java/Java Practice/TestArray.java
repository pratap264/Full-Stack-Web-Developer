import java.util.Arrays;
public class TestArray {
    public static void main(String[] args) {
//        int[] array = {4, 5, 6, 3};
//        System.out.println(array.length);
//        Arrays.sort(array);
//        System.out.println(Arrays.toString(array));

        int[][] array ={{3,5,3},{1,1},{5,6,2,3}};

        for(int i=0;i<array.length;i++){
            for(int j=0;j<array[i].length;j++){
                System.out.print(array[i][j]);
            }
            System.out.println();
        }









    }
}
