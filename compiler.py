import operator

class ArrowKeyCompiler:
    """
    A simple compiler that interprets arrow keys as math operators:
    - '↑' (up arrow): addition
    - '↓' (down arrow): subtraction
    - '→' (right arrow): multiplication
    - '←' (left arrow): division
    Example expression: '3↑4→2' means (3 + 4) * 2
    """
    OPERATORS = {
        '↑': operator.add,
        '↓': operator.sub,
        '→': operator.mul,
        '←': operator.truediv,
    }

    def __init__(self):
        pass

    def parse(self, expression):
        """
        Parses the expression into numbers and operators.
        Example: '3↑4→2' -> [3, '↑', 4, '→', 2]
        """
        tokens = []
        num = ''
        for char in expression:
            if char.isdigit() or char == '.':
                num += char
            elif char in self.OPERATORS:
                if num:
                    tokens.append(float(num) if '.' in num else int(num))
                    num = ''
                tokens.append(char)
        if num:
            tokens.append(float(num) if '.' in num else int(num))
        return tokens

    def evaluate(self, tokens):
        """
        Evaluates the parsed tokens left to right (no operator precedence).
        """
        if not tokens:
            return None
        result = tokens[0]
        i = 1
        while i < len(tokens):
            op = tokens[i]
            val = tokens[i + 1]
            func = self.OPERATORS[op]
            result = func(result, val)
            i += 2
        return result

    def compile_and_run(self, expression):
        tokens = self.parse(expression)
        print("Current tokens after parsing -> ", tokens)
        return self.evaluate(tokens)

if __name__ == "__main__":
    compiler = ArrowKeyCompiler()
    expr = "3↑4→2"
    result = compiler.compile_and_run(expr)
    print(f"{expr} -> {result}")
