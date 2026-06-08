public class BubbleSort {
    public static void main(String args[]) {
        System.out.println("Hello Bubble sort");

        int[] arr = { 8, 2, 7, 1, 3 };

        for (int i : arr) {
            System.out.print(i);
        }

        bubbleSort(arr);

        System.out.println(" after sorting : ");

        for (int i : arr) {
            System.out.print(i);
        }

    }

    public static int[] bubbleSort(int[] arr) {

        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {

            for (int j = 0; j < n - 1 - i; j++) {

                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }

        return arr;
    }
}
