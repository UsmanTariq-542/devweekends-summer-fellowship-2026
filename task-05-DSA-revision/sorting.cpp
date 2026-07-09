#include<iostream>
#include<vector>
using namespace std;

/* In Bubble sort, on each pass the largest number reaches its correct position on each inner loop iteration. 
*/
void bubbleSort(vector<int>& nums){
    for(int i = 0; i<nums.size()-1; i++){
        bool swapped = false;
        for(int j = 0; j<nums.size()-i-1; j++){
            if(nums[j]>nums[j+1]){
                swap(nums[j],nums[j+1]);
                swapped = true;
            }
        }

        if(!swapped){
            break;
        }
    }
}

void selectionSort(vector<int>& nums){
    for(int i =0;i<nums.size()-1;i++){
        int minIdx = i;
        for(int j=i+1;j<nums.size();j++){
            if(nums[j]<nums[i]) minIdx=j;
        }

        if(minIdx!=i){
            swap(nums[minIdx],nums[i]);
        }
    }
}

void insertionSort(vector<int>& nums) {
    int n = nums.size();
    for (int i = 1; i < n; i++) {
        int key = nums[i];
        int j = i - 1;
        while (j >= 0 && nums[j] > key) {
            nums[j + 1] = nums[j]; 
            j--;
        }
        nums[j + 1] = key;
    }
}


void printArry(vector<int>& nums){
    for(int i = 0; i<nums.size(); i++){
        cout<<nums[i]<<" ";
    }
}

int main(){
    vector<int> nums = {5,2,3,1,4};
    cout<<"Before sorting: ";
    printArry(nums);
    cout<<endl;

    bubbleSort(nums);

    cout<<"After bubble sorting: ";
    printArry(nums);
    cout<<endl;
    cout<<"----------------------------------------------------------\n";


    nums={2,4,3,1,5};
    cout<<"Before sorting: ";
    printArry(nums);
    cout<<endl;

    selectionSort(nums);

    cout<<"After selection sorting: ";
    printArry(nums);
    cout<<endl;

    cout<<"----------------------------------------------------------\n";
    nums={4,5,3,1,2};
    cout<<"Before sorting: ";
    printArry(nums);
    cout<<endl;

    insertionSort(nums);

    cout<<"After insertion sorting: ";
    printArry(nums);
    cout<<endl;

}

// time complexity of bubble sort, selection sort and insertion sort is O(n^2) in worst case and average case. In best case, time complexity of bubble sort and insertion sort is O(n) and selection sort is O(n^2).

