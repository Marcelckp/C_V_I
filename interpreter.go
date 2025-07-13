package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// Simple interpreter for arithmetic expressions: +, -, *, /
func eval(expr string) (int, error) {
	tokens := strings.Fields(expr)
	if len(tokens) != 3 {
		return 0, fmt.Errorf("expected format: <int> <op> <int>")
	}
	a, err := strconv.Atoi(tokens[0])
	if err != nil {
		return 0, err
	}
	b, err := strconv.Atoi(tokens[2])
	if err != nil {
		return 0, err
	}
	switch tokens[1] {
	case "plus":
		return a + b, nil
	case "minus":
		return a - b, nil
	case "times":
		return a * b, nil
	case "divide":
		if b == 0 {
			return 0, fmt.Errorf("division by zero")
		}
		return a / b, nil
	default:
		return 0, fmt.Errorf("unknown operator: %s", tokens[1])
	}
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	fmt.Println("Simple Interpreter (format: <int> <op> <int>, e.g., 2 + 3)")

	// This loop reads input from the user until "exit" is entered
	for {
		// Prompt the user for input
		fmt.Print("> ")
		// Read a line of input
		if !scanner.Scan() {
			break
		}
		line := scanner.Text()

		// Check for exit command
		if line == "exit" {
			break
		}

		// Evaluate the expression
		result, err := eval(line)
		if err != nil {
			fmt.Println("Error:", err)
		} else {
			fmt.Println(result)
		}
	}
}

// When you run this program, you can enter expressions like:
/**
	Simple Interpreter (format: <int> <op> <int>, e.g., 2 + 3)
	> 2 + 2
	Error: unknown operator: +
	> 2 plus 5
	7
	> x = 2 plus 5 
	Error: expected format: <int> <op> <int>
	> 
*/
// Note that as the lines are being read they are are being evaluated immediately.
// The program will continue to prompt for input until "exit" is entered.
// An interpreter allows us to run commands interactively, which is useful for testing and debugging. where as a compiler would translate the entire program into machine code before execution.
// For python the interpreter is the Python shell which is written in C which mean C is where the interpreter is implemented in a similar manner to this Go program.
// ============================ So when you run a Python script, C code is executed that interprets the Python code line by line. ===============================