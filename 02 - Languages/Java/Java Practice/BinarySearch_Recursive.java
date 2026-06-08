public class BinarySearch_Recursive {
    public static void main(String args[]){

        int[] arr = {2,4,7,11,23};
        int l = 0;
        int h = arr.length-1;
        int key = 23;

        binarySearch(arr,l,h,key);
    }

    public static void binarySearch(int[] arr ,int l, int h, int key){


        //base condition

        if(l>h){
            System.out.println("Key not found");
            return;
        }



        int m = (l+h)/2;

        if(arr[m] == key){
            System.out.println("Key Found at Position : " + m);
            return;
        }
        else if (key>arr[m]){
           binarySearch(arr,m+1,h,key);
        }
        else{
            binarySearch(arr,l,m-1,key);
        }

    }
}
