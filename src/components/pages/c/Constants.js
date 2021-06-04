const Constants = {
    features: [
        'Easy to learn',
        'Structured language',
        'It produces efficient programs.',
        'It can handle low-level activities.',
        'It can be compiled on a variety of computers'
    ],
    facts: [
        'C was invented to write an operating system called UNIX.',
        'C is a successor of B language which was introduced around 1970',
        'The language was formalized in 1988 by the American National Standard Institue (ANSI).',
        'By 1973 UNIX OS almost totally written in C.',
        'Today C is the most widely used System Programming Language.',
        'Most of the state of the art software have been implemented using C'
    ],
    applications: [
        'Operating Systems',
        'Language Compilers',
        'Assemblers',
        'Text Editors',
        'Print Spoolers',
        'Network Drivers',
        'Modern Programs',
        'Databases',
        'Language Interpreters',
        'Utilities'
    ],
    break_and_continue: {
        header: 'break and continue',
        lines: [
            'The break statement makes program jump out of the innermost enclosing loop (while, do, for or switch statements) explicitly.',
            'The continue statement skips the certain statements inside the loop.',
        ],
        code: '' +
            'for (i=1;i<=10;++i)\n' +
            '{\n' +
            '\t\tif (i==3)\n' +
            '\t\t\t\tcontinue;\n' +
            '\t\tif (i==7)\n' +
            '\t\t\t\tbreak;\n' +
            '\t\tprintf("%d ",i);\n' +
            '}',
        output: '1 2 4 5 6',
        description: 'When i is equal to 3, continue statement comes into effect and skips 3. When i is equal to 7, break statement comes into effect and terminates the for loop.'
    },
    switch: {
        header: 'switch, case and default',
        lines: ['The switch and case statement is used when a block of statements has to be executed among many blocks. For example:'],
        code: '' +
            'switch(expression)\n' +
            '{\n' +
            '\t\tcase \'1\': {\n' +
            '\t\t\t\t//some statements to execute when 1\n' +
            '\t\t\t\tbreak;\n' +
            '\t\t}\n' +
            '\t\tcase \'5\': {\n' +
            '\t\t\t\t//some statements to execute when 5\n' +
            '\t\t\t\tbreak;\n' +
            '\t\t}\n' +
            '\t\tdefault:\n' +
            '\t\t\t\t//default statements to execute\n' +
            '}'
    },
    char: {
        header: 'char',
        lines: ['The char keyword declares a character variable. For example:'],
        code: 'char alphabet;',
        description: 'Here, alphabet is a character type variable.'
    },
    const: {
        header: 'const',
        lines: ['An identifier can be declared constant by using const keyword.'],
        code: 'const int a = 5;'
    },
    do_while: {
        header: 'do...while',
        code: '' +
            'int i;\n' +
            'do\n' +
            '{\n' +
            '\t\tprint("%d ",i);\n' +
            '\t\ti++;\n' +
            '}\n' +
            'while (i<10)'
    },
    double: {
        header: 'double and float',
        lines: ['Keywords double and float are used for declaring floating type variables. For example:'],
        code: '' +
            'float number;\n' +
            'double longNumber;',
        description: 'Here, number is single precision floating type variable whereas, longNumber is a double precision floating type variable.'
    },
    if_else: {
        header: 'if and else',
        lines: ['In C programming, if and else are used to make decisions.'],
        code: '' +
            'if (i == 1)\n' +
            '\t\tprintf("i is 1.")\n' +
            'else\n' +
            '\t\tprintf("i is not 1.")',
        description: 'If value of i is other than 1, output will be: i is not 1'
    },
    enum: {
        header: 'enum',
        lines: ['Enumeration types are declared in C programming using keyword enum. For example:'],
        code: '' +
            'enum suit\n' +
            '{\n' +
            '\t\thearts;\n' +
            '\t\tspades;\n' +
            '\t\tclubs;\n' +
            '\t\tdiamonds;\n' +
            '}',
        description: 'Here, a enumerated variable suit is created having tags: hearts,  spades, clubs and  diamonds.'
    },
    extern: {
        header: 'extern',
        lines: ['The extern keyword declares that a variable or a function has external linkage outside of the file it is declared.']
    },
    for: {
        header: 'for',
        lines: ['There are three types of loops in C programming. The for loop is written in C programming using keyword for. For example:'],
        code: '' +
            'for (i=0; i< 9;++i)\n' +
            '{\n' +
            '\t\tprintf("%d ",i);\n' +
            '}',
        output: '0 1 2 3 4 5 6 7 8'
    },
    goto: {
        header: 'goto',
        lines: ['The goto keyword is used for unconditional jump to a labeled statement inside a function. For example:'],
        code: '' +
            'for(i=1; i<5; ++i)\n' +
            '{\n' +
            '\t\tif (i==10)\n' +
            '\t\t\t\tgoto error;\n' +
            '}\n' +
            'printf("i is not 10");\n' +
            'error:\n' +
            '\t\tprintf("Error, count cannot be 10.");',
        output: 'Error, count cannot be 10.'
    },
    int: {
        header: 'int',
        lines: ['The int keyword declares integer type variable. For example:'],
        code: 'int count;',
        description: 'Here, count is a integer variable.'
    },
    short: {
        header: 'short, long, signed and unsigned',
        lines: ['The short, long, signed and unsigned keywodrs are type modifiers that alters the meaning of a base data type to yield a new type.'],
        code: '' +
            'short int smallInteger;\n' +
            'long int bigInteger;\n' +
            'signed int normalInteger;\n' +
            'unsigned int positiveInteger;'
    },
    int_ranges: {
        header: [
            "Data type",
            "Range"
        ],
        data: [
            ["short int", "-32768 to 32767"],
            ["long int", "-2147483648 to 214743648"],
            ["signed int", "-32768 to 32767"],
            ["unsigned int", "0 to 65535"]
        ]
    },
    return: {
        header: 'return',
        lines: ['The return keyword terminates the function and returns the value.'],
        code: '' +
            'int func()\n' +
            '{\n' +
            '\t\tint b = 5;\n' +
            '\t\treturn b;\n' +
            '}',
        description: 'This function func() returns 5 to the calling function.'
    },
    sizeof: {
        header: 'sizeof',
        lines: ['The sizeof keyword evaluates the size of data (a variable or a constant).'],
        code: '' +
            '#include <stdio.h>\n' +
            '\n' +
            'int main()\n' +
            '{\n' +
            '\t\tprintf("%u bytes.",sizeof(char));\n' +
            '}'
    },
    void: {
        header: 'void',
        lines: ['The void keyword indicates that a function doesn\'t return any value.'],
        code: '' +
            'void testFunction(int a)\n' +
            '{\n' +
            '\t\t.....\n' +
            '}',
        description: 'Here, function testFunction( ) cannot return a value because the return type is void.'
    }
}

export default Constants
