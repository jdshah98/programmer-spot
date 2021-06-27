export const hello_world = {
    key: 1,
    title: 'C "Hello, World!" Program',
    program: [
        '#include <stdio.h>',
        '',
        'int main() {',
        '\t\t/* my first program in C */',
        '\t\tprintf("Hello, World! \\n");',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        '$ gcc hello.c',
        '$ ./a.out',
        'Hello, World! '
    ],
    description: 'The #include <stdio.h> is a preprocessor command. This command tells compiler to include the contents of stdio.h (standard input and output) file in the program.\nThe stdio.h file contains functions such as scanf() and print() to take input and display output respectively.\nIf you use printf() function without writing #include <stdio.h>, the program will not be compiled.\nThe execution of a C program starts from the main() function.\nThe printf() is a library function to send formatted output to the screen. In this program, the printf() displays Hello, World! text on the screen.\nThe return 0; statement is the "Exit status" of the program. In simple terms, program ends with this statement.'
}

export const data_types_limit = {
    key: 2,
    title: 'C Program to display size of various data types on machine using different constants defined in "limits.h" header file',
    program: [
        '#include <stdio.h>',
        '#include <limits.h>',
        '',
        'int main(int argc, char** argv) {',
        '',
        '\t\tprintf("CHAR_BIT    :   %d\\n", CHAR_BIT);',
        '\t\tprintf("CHAR_MAX    :   %d\\n", CHAR_MAX);',
        '\t\tprintf("CHAR_MIN    :   %d\\n", CHAR_MIN);',
        '\t\tprintf("INT_MAX     :   %d\\n", INT_MAX);',
        '\t\tprintf("INT_MIN     :   %d\\n", INT_MIN);',
        '\t\tprintf("LONG_MAX    :   %ld\\n", (long) LONG_MAX);',
        '\t\tprintf("LONG_MIN    :   %ld\\n", (long) LONG_MIN);',
        '\t\tprintf("SCHAR_MAX   :   %d\\n", SCHAR_MAX);',
        '\t\tprintf("SCHAR_MIN   :   %d\\n", SCHAR_MIN);',
        '\t\tprintf("SHRT_MAX    :   %d\\n", SHRT_MAX);',
        '\t\tprintf("SHRT_MIN    :   %d\\n", SHRT_MIN);',
        '\t\tprintf("UCHAR_MAX   :   %d\\n", UCHAR_MAX);',
        '\t\tprintf("UINT_MAX    :   %u\\n", (unsigned int) UINT_MAX);',
        '\t\tprintf("ULONG_MAX   :   %lu\\n", (unsigned long) ULONG_MAX);',
        '\t\tprintf("USHRT_MAX   :   %d\\n", (unsigned short) USHRT_MAX);',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'CHAR_BIT    :   8',
        'CHAR_MAX    :   127',
        'CHAR_MIN    :   -128',
        'INT_MAX     :   2147483647',
        'INT_MIN     :   -2147483648',
        'LONG_MAX    :   9223372036854775807',
        'LONG_MIN    :   -9223372036854775808',
        'SCHAR_MAX   :   127',
        'SCHAR_MIN   :   -128',
        'SHRT_MAX    :   32767',
        'SHRT_MIN    :   -32768',
        'UCHAR_MAX   :   255',
        'UINT_MAX    :   4294967295',
        'ULONG_MAX   :   18446744073709551615',
        'USHRT_MAX   :   65535'
    ],
    description: 'To get the size of various type on a machine using different constant defined in limits.h header file'
}

export const data_types_float = {
    key: 3,
    title: 'C Program to display size of various data types on machine using different constants defined in "float.h" header file',
    program: [
        '#include <stdio.h>',
        '#include <stdlib.h>',
        '#include <limits.h>',
        '#include <float.h>',
        '',
        'int main(int argc, char** argv) {',
        '',
        '\t\tprintf("Storage size for float :   %d\\n", sizeof(float));',
        '\t\tprintf("FLT_MAX                :   %g\\n", (float) FLT_MAX);',
        '\t\tprintf("FLT_MIN                :   %g\\n", (float) FLT_MIN);',
        '\t\tprintf("-FLT_MAX               :   %g\\n", (float) -FLT_MAX);',
        '\t\tprintf("-FLT_MIN               :   %g\\n", (float) -FLT_MIN);',
        '\t\tprintf("DBL_MAX                :   %g\\n", (double) DBL_MAX);',
        '\t\tprintf("DBL_MIN                :   %g\\n", (double) DBL_MIN);',
        '\t\tprintf("-DBL_MAX               :   %g\\n", (double) -DBL_MAX);',
        '\t\tprintf("Precision value        :   %d\\n", FLT_DIG );',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'Storage size for float :   4',
        'FLT_MAX                :   3.40282e+38',
        'FLT_MIN                :   1.17549e-38',
        '-FLT_MAX               :   -3.40282e+38',
        '-FLT_MIN               :   -1.17549e-38',
        'DBL_MAX                :   1.79769e+308',
        'DBL_MIN                :   2.22507e-308',
        '-DBL_MAX               :   -1.79769e+308',
        'Precision value        :   6'
    ],
    description: 'The header file float.h defines macros that allow you to use these values and other details about the binary representation of real numbers in your programs.'
}

export const variable_declaration = {
    key: 4,
    program: [
        '#include <stdio.h>',
        '',
        '// Variable declaration:',
        'extern int a, b;',
        'extern int c;',
        'extern float f;',
        '',
        'int main () {',
        '',
        '\t\t/* variable definition: */',
        '\t\tint a, b;',
        '\t\tint c;',
        '\t\tfloat f;',
        '',
        '\t\t/* actual initialization */',
        '\t\ta = 10;',
        '\t\tb = 20;',
        '',
        '\t\tc = a + b;',
        '\t\tprintf("value of c : %d \\n", c);',
        '',
        '\t\tf = 70.0/3.0;',
        '\t\tprintf("value of f : %f \\n", f);',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'value of c :  30',
        'value of f :  23.33333'
    ]
}

export const function_declaration = {
    program: [
        '// function declaration',
        'int func();',
        '',
        'int main() {',
        '',
        '\t\t// function call',
        '\t\tint i = func();',
        '}',
        '',
        '// function definition',
        'int func() {',
        '\t\treturn 0;',
        '}'
    ]
}

export const lvalue_rvalue = {
    program: [
        'int g = 20; // valid statement',
        '',
        '10 = 20; // invalid statement; would generate compile-time error'
    ]
}

export const escape_constants = {
    program: [
        '#include <stdio.h>',
        '',
        'int main() {',
        '\t\tprintf("Hello\tWorld\\n\\n");',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: ['Hello World']
}

export const define_ex = {
    program: [
        '#include <stdio.h>',
        '',
        '#define LENGTH 10',
        '#define WIDTH  5',
        '#define NEWLINE \'\\n\'',
        '',
        'int main() {',
        '\t\tint area;',
        '',  
        '\t\tarea = LENGTH * WIDTH;',
        '\t\tprintf("value of area : %d", area);',
        '\t\tprintf("%c", NEWLINE);',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'value of area : 50'
    ]
}

export const const_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main() {',
        '\t\tconst int  LENGTH = 10;',
        '\t\tconst int  WIDTH = 5;',
        '\t\tconst char NEWLINE = \'\\n\';',
        '\t\tint area;',
        '',
        '\t\tarea = LENGTH * WIDTH;',
        '\t\tprintf("value of area : %d", area);',
        '\t\tprintf("%c", NEWLINE);',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'value of area : 50'
    ]
}

export const static_ex = {
    program: [
        '#include <stdio.h>',
        '',
        '/* function declaration */',
        'void func(void);',
        '',
        'static int count = 5; /* global variable */',
        '',
        'main() {',
        '',
        '\t\twhile(count--) {',
        '\t\t\t\tfunc();',
        '\t\t}',
        '',
        '\t\treturn 0;',
        '}',
        '',
        '/* function definition */',
        'void func( void ) {',
        '',
        '\t\tstatic int i = 5; /* local static variable */',
        '\t\ti++;',
        '',
        '\t\tprintf("i is %d and count is %d\\n", i, count);',
        '}'
    ],
    output: [
        'i is 6 and count is 4',
        'i is 7 and count is 3',
        'i is 8 and count is 2',
        'i is 9 and count is 1',
        'i is 10 and count is 0'
    ]
}

export const extern_ex = {
    program1: [
        '#include <stdio.h>',
        '',
        'int count;',
        'extern void write_extern();',
        '',
        'void main() {',
        '\t\tcount = 5;',
        '\t\twrite_extern();',
        '}'
    ],
    program2: [
        '#include <stdio.h>',
        '',
        'extern int count;',
        '',
        'void write_extern(void) {',
        '\t\tprintf("count is %d\\n", count);',
        '}'
    ],
    output: [
        '$ gcc main.c support.c',
        'count is 5'
    ]
}

export const arithmetic_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'void main() {',
        '',
        '\t\tint a = 21;',
        '\t\tint b = 10;',
        '\t\tint c;',
        '',
        '\t\tc = a + b;',
        '\t\tprintf("Line 1 - Value of c is %d\\n", c );',
        '',
        '\t\tc = a - b;',
        '\t\tprintf("Line 2 - Value of c is %d\\n", c );',
        '',
        '\t\tc = a * b;',
        '\t\tprintf("Line 3 - Value of c is %d\\n", c );',
        '',
        '\t\tc = a / b;',
        '\t\tprintf("Line 4 - Value of c is %d\\n", c );',
        '',
        '\t\tc = a % b;',
        '\t\tprintf("Line 5 - Value of c is %d\\n", c );',
        '',
        '\t\tc = a++;',
        '\t\tprintf("Line 6 - Value of c is %d\\n", c );',
        '',
        '\t\tc = a--;',
        '\t\tprintf("Line 7 - Value of c is %d\\n", c );',
        '}'
    ],
    output: [
        'Line 1 - Value of c is 31',
        'Line 2 - Value of c is 11',
        'Line 3 - Value of c is 210',
        'Line 4 - Value of c is 2',
        'Line 5 - Value of c is 1',
        'Line 6 - Value of c is 21',
        'Line 7 - Value of c is 22'
    ]
}

export const relational_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'void main() {',
        '',
        '\t\tint a = 21;',
        '\t\tint b = 10;',
        '\t\tint c;',
        '',
        '\t\tif( a == b ) {',
        '\t\t\t\tprintf("Line 1 - a is equal to b\\n" );',
        '\t\t} else {',
        '\t\t\t\tprintf("Line 1 - a is not equal to b\\n" );',
        '\t\t}',
        '',
        '\t\tif ( a < b ) {',
        '\t\t\t\tprintf("Line 2 - a is less than b\\n" );',
        '\t\t} else {',
        '\t\t\t\tprintf("Line 2 - a is not less than b\\n" );',
        '\t\t}',
        '\t\t',
        '\t\tif ( a > b ) {',
        '\t\t\t\tprintf("Line 3 - a is greater than b\\n" );',
        '\t\t} else {',
        '\t\t\t\tprintf("Line 3 - a is not greater than b\\n" );',
        '\t\t}',
        '',
        '\t\t/* Lets change value of a and b */',
        '\t\ta = 5;',
        '\t\tb = 20;',
        '',
        '\t\tif ( a <= b ) {',
        '\t\t\t\tprintf("Line 4 - a is either less than or equal to  b\\n" );',
        '\t\t}',
        '',
        '\t\tif ( b >= a ) {',
        '\t\t\t\tprintf("Line 5 - b is either greater than  or equal to b\\n" );',
        '\t\t}',
        '}'
    ],
    output: [
        'Line 1 - a is not equal to b',
        'Line 2 - a is not less than b',
        'Line 3 - a is greater than b',
        'Line 4 - a is either less than or equal to  b',
        'Line 5 - b is either greater than  or equal to a'
    ]
}

export const logical_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'void main() {',
        '',
        '\t\tint a = 5;',
        '\t\tint b = 20;',
        '\t\tint c ;',
        '',
        '\t\tif ( a && b ) {',
        '\t\t   printf("Line 1 - Condition is true\\n" );',
        '\t\t}',
        '',
        '\t\tif ( a || b ) {',
        '\t\t   printf("Line 2 - Condition is true\\n" );',
        '\t\t}',
        '',
        '\t\t/* lets change the value of  a and b */',
        '\t\ta = 0;',
        '\t\tb = 10;',
        '',
        '\t\tif ( a && b ) {',
        '\t\t   printf("Line 3 - Condition is true\\n" );',
        '\t\t} else {',
        '\t\t   printf("Line 3 - Condition is not true\\n" );',
        '\t\t}',
        '',
        '\t\tif ( !(a && b) ) {',
        '\t\t   printf("Line 4 - Condition is true\\n" );',
        '\t\t}',
        '',
        '}'
    ],
    output: [
        'Line 1 - Condition is true',
        'Line 2 - Condition is true',
        'Line 3 - Condition is not true',
        'Line 4 - Condition is true'
    ]
}

export const bitwise_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'void main() {',
        '',
        '\t\tunsigned int a = 60;	/* 60 = 0011 1100 */',
        '\t\tunsigned int b = 13;	/* 13 = 0000 1101 */',
        '\t\tint c = 0;',
        '',
        '\t\tc = a & b;       /* 12 = 0000 1100 */',
        '\t\tprintf("Line 1 - Value of c is %d\\n", c );',
        '',
        '\t\tc = a | b;       /* 61 = 0011 1101 */',
        '\t\tprintf("Line 2 - Value of c is %d\\n", c );',
        '',
        '\t\tc = a ^ b;       /* 49 = 0011 0001 */',
        '\t\tprintf("Line 3 - Value of c is %d\\n", c );',
        '',
        '\t\tc = ~a;          /*-61 = 1100 0011 */',
        '\t\tprintf("Line 4 - Value of c is %d\\n", c );',
        '',
        '\t\tc = a << 2;     /* 240 = 1111 0000 */',
        '\t\tprintf("Line 5 - Value of c is %d\\n", c );',
        '',
        '\t\tc = a >> 2;     /* 15 = 0000 1111 */',
        '\t\tprintf("Line 6 - Value of c is %d\\n", c );',
        '}'
    ],
    output: [
        'Line 1 - Value of c is 12',
        'Line 2 - Value of c is 61',
        'Line 3 - Value of c is 49',
        'Line 4 - Value of c is -61',
        'Line 5 - Value of c is 240',
        'Line 6 - Value of c is 15'
    ]
}

export const assignment_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'void main() {',
        '',
        '\t\tint a = 21;',
        '\t\tint c ;',
        '',
        '\t\tc =  a;',
        '\t\tprintf("Line 1 - =  Operator Example, Value of c = %d\\n", c );',
        '',
        '\t\tc +=  a;',
        '\t\tprintf("Line 2 - += Operator Example, Value of c = %d\\n", c );',
        '',
        '\t\tc -=  a;',
        '\t\tprintf("Line 3 - -= Operator Example, Value of c = %d\\n", c );',
        '',
        '\t\tc *=  a;',
        '\t\tprintf("Line 4 - *= Operator Example, Value of c = %d\\n", c );',
        '',
        '\t\tc /=  a;',
        '\t\tprintf("Line 5 - /= Operator Example, Value of c = %d\\n", c );',
        '',
        '\t\tc  = 200;',
        '\t\tc %=  a;',
        '\t\tprintf("Line 6 - %= Operator Example, Value of c = %d\\n", c );',
        '',
        '\t\tc <<=  2;',
        '\t\tprintf("Line 7 - <<= Operator Example, Value of c = %d\\n", c );',
        '',
        '\t\tc >>=  2;',
        '\t\tprintf("Line 8 - >>= Operator Example, Value of c = %d\\n", c );',
        '',
        '\t\tc &=  2;',
        '\t\tprintf("Line 9 - &= Operator Example, Value of c = %d\\n", c );',
        '',
        '\t\tc ^=  2;',
        '\t\tprintf("Line 10 - ^= Operator Example, Value of c = %d\\n", c );',
        '',
        '\t\tc |=  2;',
        '\t\tprintf("Line 11 - |= Operator Example, Value of c = %d\\n", c );',
        '}'
    ],
    output: [
        'Line 1 - =  Operator Example, Value of c = 21',
        'Line 2 - += Operator Example, Value of c = 42',
        'Line 3 - -= Operator Example, Value of c = 21',
        'Line 4 - *= Operator Example, Value of c = 441',
        'Line 5 - /= Operator Example, Value of c = 21',
        'Line 6 - %= Operator Example, Value of c = 11',
        'Line 7 - <<= Operator Example, Value of c = 44',
        'Line 8 - >>= Operator Example, Value of c = 11',
        'Line 9 - &= Operator Example, Value of c = 2',
        'Line 10 - ^= Operator Example, Value of c = 0',
        'Line 11 - |= Operator Example, Value of c = 2'
    ]
}

export const misc_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'void main() {',
        '',
        '\t\tint a = 4;',
        '\t\tshort b;',
        '\t\tdouble c;',
        '\t\tint* ptr;',
        '',
        '\t\t/* example of sizeof operator */',
        '\t\tprintf("Line 1 - Size of variable a = %d\\n", sizeof(a) );',
        '\t\tprintf("Line 2 - Size of variable b = %d\\n", sizeof(b) );',
        '\t\tprintf("Line 3 - Size of variable c= %d\\n", sizeof(c) );',
        '',
        '\t\t/* example of & and * operators */',
        '\t\tptr = &a;	/* \'ptr\' now contains the address of \'a\'*/',
        '\t\tprintf("value of a is  %d\\n", a);',
        '\t\tprintf("*ptr is %d.\\n", *ptr);',
        '',
        '\t\t/* example of ternary operator */',
        '\t\ta = 10;',
        '\t\tb = (a == 1) ? 20: 30;',
        '\t\tprintf( "Value of b is %d\\n", b );',
        '',
        '\t\tb = (a == 10) ? 20: 30;',
        '\t\tprintf( "Value of b is %d\\n", b );',
        '}'
    ],
    output: [
        'Line 1 - Size of variable a = 4',
        'Line 2 - Size of variable b = 2',
        'Line 3 - Size of variable c= 8',
        'value of a is  4',
        '*ptr is 4.',
        'Value of b is 30',
        'Value of b is 20'
    ]
}

export const operator_precedence_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'main() {',
        '',
        '\t\tint a = 20;',
        '\t\tint b = 10;',
        '\t\tint c = 15;',
        '\t\tint d = 5;',
        '\t\tint e;',
        '',
        '\t\te = (a + b) * c / d;      // ( 30 * 15) / 5',
        '\t\tprintf("Value of (a + b) * c / d is : %d\\n",  e );',
        '',
        '\t\te = ((a + b) * c) / d;    // (30 * 15) / 5',
        '\t\tprintf("Value of ((a + b) * c) / d is  : %d\\n" ,  e );',
        '',
        '\t\te = (a + b) * (c / d);   // (30) * (15/5)',
        '\t\tprintf("Value of (a + b) * (c / d) is  : %d\\n",  e );',
        '',
        '\t\te = a + (b * c) / d;     //  20 + (150/5)',
        '\t\tprintf("Value of a + (b * c) / d is  : %d\\n" ,  e );',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'Value of (a + b) * c / d is : 90',
        'Value of ((a + b) * c) / d is  : 90',
        'Value of (a + b) * (c / d) is  : 90',
        'Value of a + (b * c) / d is  : 50'
    ]
}

export const if_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\t/* local variable definition */',
        '\t\tint a = 10;',
        '',
        '\t\t/* check the boolean condition using if statement */',
        '',
        '\t\tif( a < 20 ) {',
        '\t\t\t\t/* if condition is true then print the following */',
        '\t\t\t\tprintf("a is less than 20\\n");',
        '\t\t}',
        '',
        '\t\tprintf("value of a is : %d\\n", a);',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'a is less than 20;',
        'value of a is : 10'
    ]
}

export const if_else_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\t/* local variable definition */',
        '\t\tint a = 100;',
        '',
        '\t\t/* check the boolean condition */',
        '\t\tif( a < 20 ) {',
        '\t\t\t\t/* if condition is true then print the following */',
        '\t\t\t\tprintf("a is less than 20\\n");',
        '\t\t} else {',
        '\t\t\t\t/* if condition is false then print the following */',
        '\t\t\t\tprintf("a is not less than 20\\n");',
        '\t\t}',
        '',           
        '\t\tprintf("value of a is : %d\\n", a);',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'a is not less than 20;',
        'value of a is : 100'
    ]
}

export const if_else_if_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\t/* local variable definition */',
        '\t\tint a = 100;',
        '',
        '\t\t/* check the boolean condition */',
        '\t\tif( a == 10 ) {',
        '\t\t\t\t/* if condition is true then print the following */',
        '\t\t\t\tprintf("Value of a is 10\\n");',
        '\t\t} else if( a == 20 ) {',
        '\t\t\t\t/* if else if condition is true */',
        '\t\t\t\tprintf("Value of a is 20\\n");',
        '\t\t} else if( a == 30 ) {',
        '\t\t\t\t/* if else if condition is true  */',
        '\t\t\t\tprintf("Value of a is 30\\n");',
        '\t\t} else {',
        '\t\t\t\t/* if none of the conditions is true */',
        '\t\t\t\tprintf("None of the values is matching\\n");',
        '\t\t}',
        '',
        '\t\tprintf("Exact value of a is: %d\\n", a);',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'None of the values is matching',
        'Exact value of a is: 100'
    ]
}

export const nested_if_else_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\t/* local variable definition */',
        '\t\tint a = 100;',
        '\t\tint b = 200;',
        '', 
        '\t\t/* check the boolean condition */',
        '\t\tif( a == 100 ) {',
        '',
        '\t\t\t\t/* if condition is true then check the following */',
        '\t\t\t\tif( b == 200 ) {',
        '\t\t\t\t\t\t/* if condition is true then print the following */',
        '\t\t\t\t\t\tprintf("Value of a is 100 and b is 200\\n");',
        '\t\t\t\t}',
        '\t\t}',
        '',
        '\t\tprintf("Exact value of a is : %d\\n", a);',
        '\t\tprintf("Exact value of b is : %d\\n", b);',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'Value of a is 100 and b is 200',
        'Exact value of a is : 100',
        'Exact value of b is : 200'
    ]
}

export const switch_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\t/* local variable definition */',
        '\t\tchar grade = \'B\';',
        '',
        '\t\tswitch(grade) {',
        '\t\t\t\tcase \'A\':',
        '\t\t\t\t\t\tprintf("Excellent!\\n");',
        '\t\t\t\t\t\tbreak;',
        '\t\t\t\tcase \'B\':',
        '\t\t\t\tcase \'C\':',
        '\t\t\t\t\t\tprintf("Well done\\n");',
        '\t\t\t\t\t\tbreak;',
        '\t\t\t\tcase \'D\':',
        '\t\t\t\t\t\tprintf("You passed\\n");',
        '\t\t\t\t\t\tbreak;',
        '\t\t\t\tcase \'F\':',
        '\t\t\t\t\t\tprintf("Better try again\\n");',
        '\t\t\t\t\t\tbreak;',
        '\t\t\t\tdefault:',
        '\t\t\t\t\t\tprintf("Invalid grade\\n");',
        '\t\t}',
        '',
        '\t\tprintf("Your grade: %c\\n", grade);',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'Well done',
        'Your grade is B'
    ]
}

export const nested_switch_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\t/* local variable definition */',
        '\t\tint a = 100;',
        '\t\tint b = 200;',
        '',
        '\t\tswitch(a) {',
        '',
        '\t\t\t\tcase 100:',
        '\t\t\t\t\t\tprintf("This is part of outer switch\\n", a );',
        '',
        '\t\t\t\t\t\tswitch(b) {',
        '\t\t\t\t\t\t\t\tcase 200:',
        '\t\t\t\t\t\t\t\t\t\tprintf("This is part of inner switch\\n", a );',
        '\t\t\t\t\t\t}',
        '\t\t}',
        '',           
        '\t\tprintf("Exact value of a is : %d\\n", a);',
        '\t\tprintf("Exact value of b is : %d\\n", b);',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'This is part of outer switch',
        'This is part of inner switch',
        'Exact value of a is : 100',
        'Exact value of b is : 200'
    ]
}

export const while_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\t/* local variable definition */',
        '\t\tint a = 10;',
        '',
        '\t\t/* while loop execution */',
        '\t\twhile( a < 20 ) {',
        '\t\t\t\tprintf("value of a: %d\\n", a);',
        '\t\t\t\ta++;',
        '\t\t}',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'value of a: 10',
        'value of a: 11',
        'value of a: 12',
        'value of a: 13',
        'value of a: 14',
        'value of a: 15',
        'value of a: 16',
        'value of a: 17',
        'value of a: 18',
        'value of a: 19'
    ]
}

export const for_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\tint a;',
        '',
        '\t\t/* for loop execution */',
        '\t\tfor( a = 10; a < 20; a = a + 1 ){',
        '\t\t\t\tprintf("value of a: %d\\n", a);',
        '\t\t}',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'value of a: 10',
        'value of a: 11',
        'value of a: 12',
        'value of a: 13',
        'value of a: 14',
        'value of a: 15',
        'value of a: 16',
        'value of a: 17',
        'value of a: 18',
        'value of a: 19'
    ]
}

export const do_while_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\t/* local variable definition */',
        '\t\tint a = 10;',
        '',
        '\t\t/* do loop execution */',
        '\t\tdo {',
        '\t\t\t\tprintf("value of a: %d\\n", a);',
        '\t\t\t\ta = a + 1;',
        '\t\t}while( a < 20 );',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'value of a: 10',
        'value of a: 11',
        'value of a: 12',
        'value of a: 13',
        'value of a: 14',
        'value of a: 15',
        'value of a: 16',
        'value of a: 17',
        'value of a: 18',
        'value of a: 19'
    ]
}

export const nested_for_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\t/* local variable definition */',
        '\t\tint i, j;',
        '',
        '\t\tfor(i = 2; i<100; i++) {',
        '',
        '\t\t\t\tfor(j = 2; j <= (i/j); j++) {',
        '',
        '\t\t\t\t\t\tif(!(i%j))',
        '\t\t\t\t\t\t\t\tbreak; // if factor found, not prime',
        '\t\t\t\t}',
        '\t\t\t\tif(j > (i/j))',
        '\t\t\t\t\t\tprintf("%d is prime\\n", i);',
        '\t\t}',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        '2 is prime',
        '3 is prime',
        '5 is prime',
        '7 is prime',
        '11 is prime',
        '13 is prime',
        '17 is prime',
        '19 is prime',
        '23 is prime',
        '29 is prime',
        '31 is prime',
        '37 is prime',
        '41 is prime',
        '43 is prime',
        '47 is prime',
        '53 is prime',
        '59 is prime',
        '61 is prime',
        '67 is prime',
        '71 is prime',
        '73 is prime',
        '79 is prime',
        '83 is prime',
        '89 is prime',
        '97 is prime'
    ]
}

export const break_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\t/* local variable definition */',
        '\t\tint a = 10;',
        '',
        '\t\t/* while loop execution */',
        '\t\twhile( a < 20 ) {',
        '',
        '\t\t\t\tprintf("value of a: %d\\n", a);',
        '\t\t\t\ta++;',
        '',
        '\t\t\t\tif( a > 15) {',
        '\t\t\t\t\t\t/* terminate the loop using break statement */',
        '\t\t\t\t\t\tbreak;',
        '\t\t\t\t}',
        '\t\t}',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'value of a: 10',
        'value of a: 11',
        'value of a: 12',
        'value of a: 13',
        'value of a: 14',
        'value of a: 15'
    ]
}

export const continue_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\t/* local variable definition */',
        '\t\tint a = 10;',
        '',
        '\t\t/* do loop execution */',
        '\t\tdo {',
        '',
        '\t\tif( a == 15) {',
        '\t\t\t\t/* skip the iteration */',
        '\t\t\t\ta = a + 1;',
        '\t\t\t\tcontinue;',
        '\t\t}',
        '',
        '\t\tprintf("value of a: %d\\n", a);',
        '\t\ta++;',
        '',
        '\t\t} while( a < 20 );',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'value of a: 10',
        'value of a: 11',
        'value of a: 12',
        'value of a: 13',
        'value of a: 14',
        'value of a: 16',
        'value of a: 17',
        'value of a: 18',
        'value of a: 19'
    ]
}

export const goto_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\t/* local variable definition */',
        '\t\tint a = 10;',
        '',
        '\t\t/* do loop execution */',
        '\t\tLOOP:do {',
        '',
        '\t\t\t\tif( a == 15) {',
        '\t\t\t\t\t\t/* skip the iteration */',
        '\t\t\t\t\t\ta = a + 1;',
        '\t\t\t\t\t\tgoto LOOP;',
        '\t\t\t\t}',
        '',
        '\t\t\t\tprintf("value of a: %d\\n", a);',
        '\t\t\t\ta++;',
        '',
        '\t\t}while( a < 20 );',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'value of a: 10',
        'value of a: 11',
        'value of a: 12',
        'value of a: 13',
        'value of a: 14',
        'value of a: 16',
        'value of a: 17',
        'value of a: 18',
        'value of a: 19'
    ]
}

export const infinite_loop = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\tfor( ; ; ) {',
        '\t\t\t\tprintf("This loop will run forever.\\n");',
        '\t\t}',
        '',
        '\t\treturn 0;',
        '}'
    ]
}

export const function_ex1 = {
    program: [
        '/* function returning the max between two numbers */',
        'int max(int num1, int num2) {',
        '',
        '\t\t/* local variable declaration */',
        '\t\tint result;',
        '',
        '\t\tif (num1 > num2)',
        '\t\t\t\tresult = num1;',
        '\t\telse',
        '\t\t\t\tresult = num2;',
        '',         
        '\t\treturn result;',
        '}'
    ]
}

export const function_ex2 = {
    program: [
        '#include <stdio.h>',
        '',
        '/* function declaration */',
        'int max(int num1, int num2);',
        '',
        'int main () {',
        '',
        '\t\t/* local variable definition */',
        '\t\tint a = 100;',
        '\t\tint b = 200;',
        '\t\tint ret;',
        '',
        '\t\t/* calling a function to get max value */',
        '\t\tret = max(a, b);',
        '',
        '\t\tprintf( "Max value is : %d\\n", ret);',
        '',
        '\t\treturn 0;',
        '}',
        '',
        '/* function returning the max between two numbers */',
        'int max(int num1, int num2) {',
        '',
        '\t\t/* local variable declaration */',
        '\t\tint result;',
        '',
        '\t\tif (num1 > num2)',
        '\t\t\t\tresult = num1;',
        '\t\telse',
        '\t\t\t\tresult = num2;',
        '',
        '\t\treturn result;',
        '}'
    ],
    output: ['Max value is : 200']
}

export const call_by_value_ex1 = {
    program: [
        '/* function definition to swap the values */',
        'void swap(int x, int y) {',
        '',
        '\t\tint temp;',
        '',
        '\t\ttemp = x; /* save the value of x */',
        '\t\tx = y;    /* put y into x */',
        '\t\ty = temp; /* put temp into y */',
        '',
        '\t\treturn;',
        '}'
    ]
}

export const call_by_value_ex2 = {
    program: [
        '#include <stdio.h>',
        '',
        '/* function declaration */',
        'void swap(int x, int y);',
        '',
        'int main () {',
        '',
        '\t\t/* local variable definition */',
        '\t\tint a = 100;',
        '\t\tint b = 200;',
        '',
        '\t\tprintf("Before swap, value of a : %d\\n", a );',
        '\t\tprintf("Before swap, value of b : %d\\n", b );',
        '',
        '\t\t/* calling a function to swap the values */',
        '\t\tswap(a, b);',
        '',
        '\t\tprintf("After swap, value of a : %d\\n", a );',
        '\t\tprintf("After swap, value of b : %d\\n", b );',
        '',
        '\t\treturn 0;',
        '}',
        '',
        'void swap(int x, int y) {',
        '',
        '\t\tint temp;',
        '',
        '\t\ttemp = x; /* save the value of x */',
        '\t\tx = y;    /* put y into x */',
        '\t\ty = temp; /* put temp into y */',
        '',  
        '\t\treturn;',
        '}'
    ],
    output: [
        'Before swap, value of a : 100',
        'Before swap, value of b : 200',
        'After swap, value of a : 100',
        'After swap, value of b : 200'
    ]
}

export const call_by_reference_ex1 = {
    program: [
        '/* function definition to swap the values */',
        '',
        'void swap(int *x, int *y) {',
        '',
        '\t\tint temp;',
        '\t\ttemp = *x;    /* save the value at address x */',
        '\t\t*x = *y;      /* put y into x */',
        '\t\t*y = temp;    /* put temp into y */',
        '',
        '\t\treturn;',
        '}'
    ]
}

export const call_by_reference_ex2 = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\t/* local variable definition */',
        '\t\tint a = 100;',
        '\t\tint b = 200;',
        '',
        '\t\tprintf("Before swap, value of a : %d\\n", a );',
        '\t\tprintf("Before swap, value of b : %d\\n", b );',
        '',
        '\t\t/* calling a function to swap the values */',
        '\t\tswap(&a, &b);',
        '',
        '\t\tprintf("After swap, value of a : %d\\n", a );',
        '\t\tprintf("After swap, value of b : %d\\n", b );',
        '',
        '\t\treturn 0;',
        '}',
        '',
        'void swap(int *x, int *y) {',
        '',
        '\t\tint temp;',
        '',
        '\t\ttemp = *x; /* save the value of x */',
        '\t\t*x = *y;    /* put y into x */',
        '\t\t*y = temp; /* put temp into y */',
        '',
        '\t\treturn;',
        '}'
    ],
    output: [
        'Before swap, value of a : 100',
        'Before swap, value of b : 200',
        'After swap, value of a : 200',
        'After swap, value of b : 100'
    ]
}

export const local_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\t/* local variable declaration */',
        '\t\tint a, b;',
        '\t\tint c;',
        '',
        '\t\t/* actual initialization */',
        '\t\ta = 10;',
        '\t\tb = 20;',
        '\t\tc = a + b;',
        '',
        '\t\tprintf ("value of a = %d, b = %d and c = %d\\n", a, b, c);',
        '',
        '\t\treturn 0;',
        '}'
    ]
}

export const global_ex1 = {
    program: [
        '#include <stdio.h>',
        '',
        '/* global variable declaration */',
        'int g;',
        '',
        'int main () {',
        '',
        '\t\t/* local variable declaration */',
        '\t\tint a, b;',
        '',
        '\t\t/* actual initialization */',
        '\t\ta = 10;',
        '\t\tb = 20;',
        '\t\tg = a + b;',
        '',
        '\t\tprintf ("value of a = %d, b = %d and g = %d\\n", a, b, g);',
        '',
        '\t\treturn 0;',
        '}'
    ]
}

export const global_ex2 = {
    program: [
        '#include <stdio.h>',
        '',
        '/* global variable declaration */',
        'int g = 20;',
        '',
        'int main () {',
        '',
        '\t\t/* local variable declaration */',
        '\t\tint g = 10;',
        '',
        '\t\tprintf ("value of g = %d\\n",  g);',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: ['value of g = 10']
}

export const formal_ex = {
    program: [
        '#include <stdio.h>',
        '',
        '/* global variable declaration */',
        'int a = 20;',
        '',
        'int main () {',
        '',
        '\t\t/* local variable declaration in main function */',
        '\t\tint a = 10;',
        '\t\tint b = 20;',
        '\t\tint c = 0;',
        '',
        '\t\tprintf ("value of a in main() = %d\\n",  a);',
        '\t\tc = sum( a, b);',
        '\t\tprintf ("value of c in main() = %d\\n",  c);',
        '',
        '\t\treturn 0;',
        '}',
        '',
        '/* function to add two integers */',
        'int sum(int a, int b) {',
        '',
        '\t\tprintf ("value of a in sum() = %d\\n",  a);',
        '\t\tprintf ("value of b in sum() = %d\\n",  b);',
        '',
        '\t\treturn a + b;',
        '}'
    ],
    output: [
        'value of a in main() = 10',
        'value of a in sum() = 10',
        'value of b in sum() = 20',
        'value of c in main() = 30'
    ]
}

export const arrays_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\tint n[10]; /* n is an array of 10 integers */',
        '\t\tint i,j;',
        '',
        '\t\t/* initialize elements of array n to 0 */',
        '\t\tfor (i = 0; i < 10; i++) {',
        '\t\t\t\tn[i] = i + 100; /* set element at location i to i + 100 */',
        '\t\t}',
        '',
        '\t\t/* output each array element\'s value */',
        '\t\tfor (j = 0; j < 10; j++) {',
        '\t\t\t\tprintf("Element[%d] = %d\\n", j, n[j]);',
        '\t\t}',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'Element[0] = 100',
        'Element[1] = 101',
        'Element[2] = 102',
        'Element[3] = 103',
        'Element[4] = 104',
        'Element[5] = 105',
        'Element[6] = 106',
        'Element[7] = 107',
        'Element[8] = 108',
        'Element[9] = 109'
    ]
}

export const two_dimensional_array_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\t/* an array with 5 rows and 2 columns*/',
        '\t\tint a[5][2] = { {0,0}, {1,2}, {2,4}, {3,6},{4,8} };',
        '\t\tint i, j;',
        '',
        '\t\t/* output each array element\'s value */',
        '\t\tfor (i = 0; i < 5; i++) {',
        '',
        '\t\t\t\tfor (j = 0; j < 2; j++) {',
        '\t\t\t\t\t\tprintf("a[%d][%d] = %d\\n", i,j, a[i][j]);',
        '\t\t\t\t}',
        '\t\t}',
        '',           
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'a[0][0]: 0',
        'a[0][1]: 0',
        'a[1][0]: 1',
        'a[1][1]: 2',
        'a[2][0]: 2',
        'a[2][1]: 4',
        'a[3][0]: 3',
        'a[3][1]: 6',
        'a[4][0]: 4',
        'a[4][1]: 8'
    ]
}

export const array_argument_ex = {
    program: [
        'double getAverage(int arr[], int size) {',
        '',
        '\t\tint i;',
        '\t\tdouble avg;',
        '\t\tdouble sum = 0;',
        '',
        '\t\tfor (i = 0; i < size; ++i) {',
        '\t\t\t\tsum += arr[i];',
        '\t\t}',
        '',
        '\t\tavg = sum / size;',
        '',
        '\t\treturn avg;',
        '}'
    ],
    output: ['Average value is: 214.400000']
}

export const array_return_ex = {
    program: [
        '#include <stdio.h>',
        '',
        '/* function to generate and return random numbers */',
        'int* getRandom() {',
        '',
        '\t\tstatic int  r[10];',
        '\t\tint i;',
        '',
        '\t\t/* set the seed */',
        '\t\tsrand((unsigned)time(NULL));',
        '',
        '\t\tfor (i = 0; i < 10; ++i) {',
        '\t\t\t\tr[i] = rand();',
        '\t\t\t\tprintf("r[%d] = %d\\n", i, r[i]);',
        '\t\t}',
        '',
        '\t\treturn r;',
        '}',
        '',
        '/* main function to call above defined function */',
        'int main () {',
        '',
        '\t\t/* a pointer to an int */',
        '\t\tint *p;',
        '\t\tint i;',
        '',
        '\t\tp = getRandom();',
        '',
        '\t\tfor ( i = 0; i < 10; i++ ) {',
        '\t\t\t\tprintf( "*(p + %d) : %d\\n", i, *(p + i));',
        '\t\t}',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'r[0] = 313959809',
        'r[1] = 1759055877',
        'r[2] = 1113101911',
        'r[3] = 2133832223',
        'r[4] = 2073354073',
        'r[5] = 167288147',
        'r[6] = 1827471542',
        'r[7] = 834791014',
        'r[8] = 1901409888',
        'r[9] = 1990469526',
        '*(p + 0) : 313959809',
        '*(p + 1) : 1759055877',
        '*(p + 2) : 1113101911',
        '*(p + 3) : 2133832223',
        '*(p + 4) : 2073354073',
        '*(p + 5) : 167288147',
        '*(p + 6) : 1827471542',
        '*(p + 7) : 834791014',
        '*(p + 8) : 1901409888',
        '*(p + 9) : 1990469526'
    ]
}

export const pointer_to_array_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\t/* an array with 5 elements */',
        '\t\tdouble balance[5] = {1000.0, 2.0, 3.4, 17.0, 50.0};',
        '\t\tdouble *p;',
        '\t\tint i;',
        '',
        '\t\tp = balance;',
        '',
        '\t\t/* output each array element\'s value */',
        '\t\tprintf( "Array values using pointer\\n");',
        '',
        '\t\tfor (i = 0; i < 5; i++) {',
        '\t\t\t\tprintf("*(p + %d) : %f\\n", i, *(p + i));',
        '\t\t}',
        '',
        '\t\tprintf( "Array values using balance as address\\n");',
        '',
        '\t\tfor ( i = 0; i < 5; i++ ) {',
        '\t\t\t\tprintf("*(balance + %d) : %f\\n", i, *(balance + i));',
        '\t\t}',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'Array values using pointer',
        '*(p + 0) : 1000.000000',
        '*(p + 1) : 2.000000',
        '*(p + 2) : 3.400000',
        '*(p + 3) : 17.000000',
        '*(p + 4) : 50.000000',
        'Array values using balance as address',
        '*(balance + 0) : 1000.000000',
        '*(balance + 1) : 2.000000',
        '*(balance + 2) : 3.400000',
        '*(balance + 3) : 17.000000',
        '*(balance + 4) : 50.000000'
    ]
}

export const pointer_ex1 = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\tint  var1;',
        '\t\tchar var2[10];',
        '',
        '\t\tprintf("Address of var1 variable: %x\\n", &var1);',
        '\t\tprintf("Address of var2 variable: %x\\n", &var2);',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'Address of var1 variable: bff5a400',
        'Address of var2 variable: bff5a3f6'
    ]
}

export const pointer_ex2 = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\tint  var = 20;   /* actual variable declaration */',
        '\t\tint  *ip;        /* pointer variable declaration */',
        '',
        '\t\tip = &var;  /* store address of var in pointer variable*/',
        '',
        '\t\tprintf("Address of var variable: %x\\n", &var);',
        '',
        '\t\t/* address stored in pointer variable */',
        '\t\tprintf("Address stored in ip variable: %x\\n", ip);',
        '',
        '\t\t/* access the value using the pointer */',
        '\t\tprintf("Value of *ip variable: %d\\n", *ip);',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'Address of var variable: bffd8b3c',
        'Address stored in ip variable: bffd8b3c',
        'Value of *ip variable: 20'
    ]
}

export const null_pointer_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\tint  *ptr = NULL;',
        '',
        '\t\tprintf("The value of ptr is : %x\\n", ptr);',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: ['The value of ptr is 0']
}

export const pointer_incr_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'const int MAX = 3;',
        '',
        'int main () {',
        '',
        '\t\tint  var[] = {10, 100, 200};',
        '\t\tint  i, *ptr;',
        '',
        '\t\t/* let us have array address in pointer */',
        '\t\tptr = var;',
        '',
        '\t\tfor ( i = 0; i < MAX; i++) {',
        '',
        '\t\t\t\tprintf("Address of var[%d] = %x\\n", i, ptr);',
        '\t\t\t\tprintf("Value of var[%d] = %d\\n", i, *ptr);',
        '',
        '\t\t\t\t/* move to the next location */',
        '\t\t\t\tptr++;',
        '\t\t}',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'Address of var[0] = bf882b30',
        'Value of var[0] = 10',
        'Address of var[1] = bf882b34',
        'Value of var[1] = 100',
        'Address of var[2] = bf882b38',
        'Value of var[2] = 200'
    ]
}

export const pointer_decr_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'const int MAX = 3;',
        '',
        'int main () {',
        '',
        '\t\tint  var[] = {10, 100, 200};',
        '\t\tint  i, *ptr;',
        '',
        '\t\t/* let us have array address in pointer */',
        '\t\tptr = &var[MAX-1];',
        '',
        '\t\tfor ( i = MAX; i > 0; i--) {',
        '',
        '\t\t\t\tprintf("Address of var[%d] = %x\\n", i-1, ptr );',
        '\t\t\t\tprintf("Value of var[%d] = %d\\n", i-1, *ptr );',
        '',
        '\t\t\t\t/* move to the previous location */',
        '\t\t\t\tptr--;',
        '\t\t}',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'Address of var[2] = bfedbcd8',
        'Value of var[2] = 200',
        'Address of var[1] = bfedbcd4',
        'Value of var[1] = 100',
        'Address of var[0] = bfedbcd0',
        'Value of var[0] = 10'
    ]
}

export const pointer_cmp_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'const int MAX = 3;',
        '',
        'int main () {',
        '',
        '\t\tint  var[] = {10, 100, 200};',
        '\t\tint  i, *ptr;',
        '',
        '\t\t/* let us have address of the first element in pointer */',
        '\t\tptr = var;',
        '\t\ti = 0;',
        '',
        '\t\twhile ( ptr <= &var[MAX - 1] ) {',
        '',
        '\t\t\t\tprintf("Address of var[%d] = %x\\n", i, ptr);',
        '\t\t\t\tprintf("Value of var[%d] = %d\\n", i, *ptr);',
        '',
        '\t\t\t\t/* point to the next location */',
        '\t\t\t\tptr++;',
        '\t\t\t\ti++;',
        '\t\t}',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'Address of var[0] = bfdbcb20',
        'Value of var[0] = 10',
        'Address of var[1] = bfdbcb24',
        'Value of var[1] = 100',
        'Address of var[2] = bfdbcb28',
        'Value of var[2] = 200'
    ]
}

export const array_of_pointers_ex1 = {
    program: [
        '#include <stdio.h>',
        '',
        'const int MAX = 3;',
        '',
        'int main () {',
        '',
        '\t\tint  var[] = {10, 100, 200};',
        '\t\tint i;',
        '',
        '\t\tfor (i = 0; i < MAX; i++) {',
        '\t\t\t\tprintf("Value of var[%d] = %d\\n", i, var[i]);',
        '\t\t}',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'Value of var[0] = 10',
        'Value of var[1] = 100',
        'Value of var[2] = 200'
    ]
}

export const array_of_pointers_ex2 = {
    program: [
        '#include <stdio.h>',
        '',
        'const int MAX = 3;',
        '',
        'int main () {',
        '',
        '\t\tint  var[] = {10, 100, 200};',
        '\t\tint i, *ptr[MAX];',
        '',
        '\t\tfor ( i = 0; i < MAX; i++) {',
        '\t\t\t\tptr[i] = &var[i]; /* assign the address of integer. */',
        '\t\t}',
        '',
        '\t\tfor ( i = 0; i < MAX; i++) {',
        '\t\tprintf("Value of var[%d] = %d\\n", i, *ptr[i]);',
        '\t\t}',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'Value of var[0] = 10',
        'Value of var[1] = 100',
        'Value of var[2] = 200'
    ]
}

export const array_of_pointers_ex3 = {
    program: [
        '#include <stdio.h>',
        '',
        'const int MAX = 4;',
        '',
        'int main () {',
        '',
        '\t\tchar *names[] = {',
        '\t\t\t\t"Zara Ali",',
        '\t\t\t\t"Hina Ali",',
        '\t\t\t\t"Nuha Ali",',
        '\t\t\t\t"Sara Ali"',
        '\t\t};',
        '',
        '\t\tint i = 0;',
        '',
        '\t\tfor ( i = 0; i < MAX; i++) {',
        '\t\t\t\tprintf("Value of names[%d] = %s\\n", i, names[i]);',
        '\t\t}',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'Value of names[0] = Zara Ali',
        'Value of names[1] = Hina Ali',
        'Value of names[2] = Nuha Ali',
        'Value of names[3] = Sara Ali'
    ]
}

export const pointer_to_pointer_ex = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\tint  var;',
        '\t\tint  *ptr;',
        '\t\tint  **pptr;',
        '',
        '\t\tvar = 3000;',
        '',
        '\t\t/* take the address of var */',
        '\t\tptr = &var;',
        '',
        '\t\t/* take the address of ptr using address of operator & */',
        '\t\tpptr = &ptr;',
        '',
        '\t\t/* take the value using pptr */',
        '\t\tprintf("Value of var = %d\\n", var);',
        '\t\tprintf("Value available at *ptr = %d\\n", *ptr);',
        '\t\tprintf("Value available at **pptr = %d\\n", **pptr);',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'Value of var = 3000',
        'Value available at *ptr = 3000',
        'Value available at **pptr = 3000'
    ]
}

export const passing_pointer_ex1 = {
    program: [
        '#include <stdio.h>',
        '#include <time.h>',
        '',
        'void getSeconds(unsigned long *par);',
        '',
        'int main () {',
        '',
        '\t\tunsigned long sec;',
        '\t\tgetSeconds(&sec);',
        '',
        '\t\t/* print the actual value */',
        '\t\tprintf("Number of seconds: %ld\\n", sec);',
        '',
        '\t\treturn 0;',
        '}',
        '',
        'void getSeconds(unsigned long *par) {',
        '\t\t/* get the current number of seconds */',
        '\t\t*par = time( NULL );',
        '\t\treturn;',
        '}'
    ],
    output: ['Number of seconds: 1294450468']
}

export const passing_pointer_ex2 = {
    program: [
        '#include <stdio.h>',
        '',
        '/* function declaration */',
        'double getAverage(int *arr, int size);',
        '',
        'int main () {',
        '',
        '\t\t/* an int array with 5 elements */',
        '\t\tint balance[5] = {1000, 2, 3, 17, 50};',
        '\t\tdouble avg;',
        '',
        '\t\t/* pass pointer to the array as an argument */',
        '\t\tavg = getAverage(balance, 5);',
        '',
        '\t\t/* output the returned value  */',
        '\t\tprintf("Average value is: %f\\n", avg);',
        '\t\treturn 0;',
        '}',
        '',
        'double getAverage(int *arr, int size) {',
        '',
        '\t\tint  i, sum = 0;',
        '\t\tdouble avg;',
        '',
        '\t\tfor (i = 0; i < size; ++i) {',
        '\t\t\t\tsum += arr[i];',
        '\t\t}',
        '',
        '\t\tavg = (double)sum / size;',
        '\t\treturn avg;',
        '}'
    ],
    output: [
        'Average value is: 214.40000'
    ]
}

export const return_pointer_ex = {
    program: [
        '#include <stdio.h>',
        '#include <time.h>',
        '',
        '/* function to generate and return random numbers. */',
        'int* getRandom() {',
        '',
        '\t\tstatic int  r[10];',
        '\t\tint i;',
        '',
        '\t\t/* set the seed */',
        '\t\tsrand( (unsigned)time( NULL ) );',
        '',
        '\t\tfor ( i = 0; i < 10; ++i) {',
        '\t\t\t\tr[i] = rand();',
        '\t\t\t\tprintf("%d\\n", r[i]);',
        '\t\t}',
        '',
        '\t\treturn r;',
        '}',
        '',
        '/* main function to call above defined function */',
        'int main () {',
        '',
        '\t\t/* a pointer to an int */',
        '\t\tint *p;',
        '\t\tint i;',
        '',
        '\t\tp = getRandom();',
        '',
        '\t\tfor ( i = 0; i < 10; i++ ) {',
        '\t\t\t\tprintf("*(p + [%d]) : %d\\n", i, *(p + i));',
        '\t\t}',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        '1523198053',
        '1187214107',
        '1108300978',
        '430494959',
        '1421301276',
        '930971084',
        '123250484',
        '106932140',
        '1604461820',
        '149169022',
        '*(p + [0]) : 1523198053',
        '*(p + [1]) : 1187214107',
        '*(p + [2]) : 1108300978',
        '*(p + [3]) : 430494959',
        '*(p + [4]) : 1421301276',
        '*(p + [5]) : 930971084',
        '*(p + [6]) : 123250484',
        '*(p + [7]) : 106932140',
        '*(p + [8]) : 1604461820',
        '*(p + [9]) : 149169022'
    ]
}

export const string_ex1 = {
    program: [
        '#include <stdio.h>',
        '',
        'int main () {',
        '',
        '\t\tchar greeting[6] = {\'H\', \'e\', \'l\', \'l\', \'o\', \'\0\'};',
        '\t\tprintf("Greeting message: %s\\n", greeting );',
        '\t\treturn 0;',
        '}'
    ],
    output: ['Greeting message: Hello']
}

export const string_ex2 = {
    program: [
        '#include <stdio.h>',
        '#include <string.h>',
        '',
        'int main () {',
        '',
        '\t\tchar str1[12] = "Hello";',
        '\t\tchar str2[12] = "World";',
        '\t\tchar str3[12];',
        '\t\tint len;',
        '',
        '\t\t/* copy str1 into str3 */',
        '\t\tstrcpy(str3, str1);',
        '\t\tprintf("strcpy(str3, str1): %s\\n", str3);',
        '',
        '\t\t/* concatenates str1 and str2 */',
        '\t\tstrcat(str1, str2);',
        '\t\tprintf("strcat(str1, str2): %s\\n", str1);',
        '',
        '\t\t/* total lenghth of str1 after concatenation */',
        '\t\tlen = strlen(str1);',
        '\t\tprintf("strlen(str1): %d\\n", len);',
        '',
        '\t\treturn 0;',
        '}'
    ],
    output: [
        'strcpy(str3, str1): Hello',
        'strcat(str1, str2): HelloWorld',
        'strlen(str1): 10'
    ]
}


