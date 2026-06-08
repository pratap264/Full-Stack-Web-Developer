public class QuickSort {

    public static void main(String args[]) {
        int[] arr = { 2, 11, 4, 0, 9, 1, 5 };

        int n = arr.length;

        System.out.println("Before sorting : ");
        for (int i : arr) {
            System.out.println(i);
        }

        quickSort(arr, 0, n - 1);

        System.out.println("After sorting : ");
        for (int i : arr) {
            System.out.println(i);
        }
    }

    public static void quickSort(int[] arr, int l, int h) {
        if (l < h) {
            int p = partition(arr, l, h);

            quickSort(arr, l, p - 1);
            quickSort(arr, p + 1, h);
        }
    }

    public static int partition(int[] arr, int l, int h) {

        int pvt = arr[h];

        int i = l - 1;

        for (int j = l; j < h; j++) {
            if (arr[j] < pvt) {

                i++;

                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[h];
        arr[h] = temp;

        return i + 1;
    }
}
