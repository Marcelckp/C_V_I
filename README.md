# Translators

## Compiler

This program is a translator that takes an entire code file `(python, typescript)` and translates/compiles it down to machine code the the computer understand before executing the program.

For example it translating the entire story book from one language `ts` to machine code before reading the book.

It creates an executable and is common in languages like C, C++, Java

### Types of compilers

#### JIT - Just-in-time Compilation

This means the code is turned into machine code while the program is running, not before.

If some parts of the code are never used (for example, functions that are never called), the JIT compiler may never translate those parts into machine code. Only the code that is actually executed gets compiled, which can save time and resources.

**Example:**  
When you run JavaScript in your browser, the engine quickly translates parts of your code into machine code as needed, making it run faster than interpreting each line one by one.

#### AOT - Ahead-of-time Compilation

This is when the code is compiled into machine code before it is run.

**Example:**  
When you write a C program, the compiler translates the entire source code into machine code before you ever run it. The result is an executable file (like `a.out` or `.exe`) that can be run directly by the operating system.

## Interpreter

This program is like a language teacher that instead of translating the book entirely will read the lines of the book line by line and translate them as we go.

### Difference between Interpreter and Compiler

Interpreters allow us to receive feedback during runtime of the application allowing us to type and check our application but will slow down the code execution.

While compilers offer faster execution speeds and error checking at compile time but will not catch all crashing or bad errors until the application is run and during runtime these bugs that could have been caught with interpreters can potentially crash the application.

## Transpiler

This is a source-to-source compiler that is used to translate source code from one programming language to another.

**Example:**
Converting `JS/TS` code into go code this will for example allow us to use packages written in `JS/TS` to be used in languages like `py` and maybe even `go` the options are endless.

## Polyfills

These are methods and code added to objects and classes some on the prototypical change **proto** to suppliment any missing logic that needs to be added to support functionality that is not available in old versions or not supported environments.
