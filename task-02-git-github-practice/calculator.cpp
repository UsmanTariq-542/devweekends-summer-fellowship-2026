#include <iostream>
using namespace std;

double add(double a, double b) { return a + b; }
double subtract(double a, double b) { return a - b; }
double multiply(double a, double b) { return a * b; }
double divide(double a, double b) {
    if (b == 0) { cout << "Error: division by zero" << endl; return 0; }
    return a / b;
}

int main() {
    cout << "=== Best Calculator ===" << endl;
    cout << "Add(5,3) = " << add(5, 3) << endl;
    cout << "Subtract(5,3) = " << subtract(5, 3) << endl;
    cout << "Multiply(5,3) = " << multiply(5, 3) << endl;
    cout << "Divide(9,3) = " << divide(9, 3) << endl;
    return 0;
}