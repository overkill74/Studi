#include <theclass.h>
#include <iostream>

using namespace std;

int main(int argc, char *argv[])
{
	TheClass myclass(3);
	cout << "The class value is: " << myclass.getVal() << endl;
	myclass.incVal();
	cout << "The class value is: " << myclass.getVal() << endl;
	return 0;
}

