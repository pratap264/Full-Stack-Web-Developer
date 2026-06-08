public class InsertionSort {
    public static void main(String args[]){
        int[] arr = {4,1,11,7};

        System.out.println("Before sorting : ");
        for (int i : arr){
            System.out.println(i);
        }
        int n = arr.length;

        for (int i=1;i<n;i++){

            int curr = arr[i];


            int j = i-1;

            while (j>=0 && arr[j]>curr){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = curr;
        }

          System.out.println("After sorting : ");
        for (int i : arr){
            System.out.println(i);
        }
    }
}
