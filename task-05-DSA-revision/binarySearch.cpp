#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

// binary search is used to find the position of an element in a sorted array in O(log n) time.
int binarySearch(vector<int>& nums,int target){
    // to ensure it works, we sort the array first
    int size = nums.size();
    int l=0,r=size-1;
    while(l<=r){
        int mid = l+(r-l)/2;
        if(nums[mid]==target){
            return mid;
        }
        else if(nums[mid]>target){
            r=mid-1;
        }
        else{
            l=mid+1;
        }
    }

    return -1; // in case target not present in our array.
}

void printArry(vector<int>& nums){
    for(int i = 0; i<nums.size(); i++){
        cout<<nums[i]<<" ";
    }
}

int main(){
    vector<int> nums = {4,8,2,9,1,-7,6};
    int target;
    sort(nums.begin(),nums.end());
    printArry(nums);
    cout<<"\nEnter target to know its position: ";
    cin>> target;
    cout<<"Position of "<< target<< " is "<< binarySearch(nums,target); // 0 based indexing.
}