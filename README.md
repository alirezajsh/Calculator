# Simple Calculator

A basic calculator built with HTML, CSS, and JavaScript.  
Supports addition (`+`), subtraction (`-`), multiplication (`×`), and division (`÷`).  
This calculator includes **operator precedence** (multiplication and division are performed before addition and subtraction).

## Features

- Addition (`+`)
- Subtraction (`-`)
- Multiplication (`×`)
- Division (`÷`)
- Percentage (`%`) – converts a number to a percentage (e.g., `50%` becomes `0.5`)
- Clear all (`C`) – resets the display
- Delete last character (`⌫`) – removes the last digit or operator
- **Operator precedence** – multiplication and division are evaluated before addition and subtraction
- Displays the current expression and the result in real-time

## How It Works

### Input Handling
When a user clicks a button, the corresponding value (number, operator, or symbol) is appended to the `operationString`. The current expression is displayed in the `#operation` element, and the result is updated in the `#result` element.

### Calculation Process

1. **Tokenization**: The expression string is parsed into an array containing numbers and operators.
   ```javascript
   // Example: "12+34÷2" → [12, "+", 34, "÷", 2]
