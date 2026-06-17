#include <iostream>
using namespace std;

double add(double a, double b) { return a + b; }
double subtract(double a, double b) { return a - b; }

int main() {
    cout << "=== Calculator ===" << endl;
    cout << "Add(5,3) = " << add(5, 3) << endl;
    cout << "Subtract(5,3) = " << subtract(5, 3) << endl;
    return 0;
}