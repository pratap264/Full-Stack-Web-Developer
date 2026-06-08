public class BinarySearch {

    public static void main(String args[]){

        int[] arr = {1,4,7,11,24,56};
        int key = 56;

        int l = 0;
        int h = arr.length-1;

        while(l<=h){

            int m = (l+h)/2;

            if(arr[m] == key){
                System.out.println("Key found at position : " + m);
                break;
            }
            else if(arr[m]<key){
                l = m+1;
            }
            else{
                h = m-1;
            }
        }
    }
    
}
