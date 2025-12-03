# Implementation Plan: Simple Calculator

**Feature Branch**: `001-simple-calculator`
**Created**: 2025-12-03
**Status**: Draft
**Input**: User provided plan in /sp.plan command arguments

## 1. Purpose of the Plan

This plan explains how the calculator will be built, step-by-step, based on the Specification.
It ensures all tasks are clear, sequenced, and aligned with the Constitution.

## 2. High-Level Approach

The calculator will be implemented as a single pure function:

`calculate(operand1, operator, operand2)`

This function will:

*   Validate inputs
*   Validate operator
*   Perform the appropriate arithmetic operation
*   Return either:
    *   A numeric result
    *   OR an error message

All behavior must match the specification exactly.

## 3. Detailed Plan
### 3.1 Input Validation

Before any calculation is done:

*   Check if `operand1` is a valid number
*   Check if `operand2` is a valid number
*   If not valid → return "Error: Invalid number."

Why?

So the function never performs operations on invalid inputs.

### 3.2 Operator Validation

Check that the operator is exactly one of:

`+   -   *   /`

If not:

return "Error: Invalid operator."
Why?

To prevent unsupported operations like %, ^, =, etc.

### 3.3 Division by Zero Check

If operator is `/` and `operand2 == 0`:

return "Error: Division by zero is not allowed."

Why?

Matches acceptance criteria and prevents runtime errors.

### 3.4 Perform the Operation

Once validation passes:

*   For `+` → return `operand1 + operand2`
*   For `-` → return `operand1 - operand2`
*   For `*` → return `operand1 × operand2`
*   For `/` → return `operand1 ÷ operand2`

Rules

*   Output MUST be a number (integer or decimal).
*   No rounding unless JavaScript inherently produces it.
*   No formatting (like commas).
*   No scientific notation formatting.

### 3.5 Edge Case Behavior

The function must correctly handle:

**EC-1: Decimal Inputs**

Use JavaScript’s built-in arithmetic.
No special handling required.

**EC-2: Negative Inputs**

Arithmetic must support negative values naturally.

**EC-3: Large Numbers**

Function must not overflow or crash.
JS may return very large numbers normally.

**EC-4: Extra Whitespace**

Client code (or tests) must trim inputs before passing.
The `calculate()` function itself assumes cleaned inputs.

## 4. Testing Plan
### 4.1 Unit Tests

We will test:

✔ Valid operations

*   `5 + 3 = 8`
*   `10 - 4 = 6`
*   `7 * 2 = 14`
*   `20 / 5 = 4`

✔ Error cases

*   Division by zero
*   Invalid operator
*   Invalid numbers

✔ Edge cases

*   Decimals
*   Negative numbers
*   Very large numbers

Each test must include:

*   Input
*   Expected output
*   Actual output comparison

## 5. Technical Decisions
### 5.1 Programming Language

JavaScript (Node.js or browser-based)
Reason: Simple, readable, easy for tests.

### 5.2 Code Style

*   Single pure function
*   No external libraries
*   No I/O inside the function
*   Only return values—never print inside the core function

### 5.3 File Structure
*   `/src/calculate.js`
*   `/tests/calculate.test.js`

## 6. Risks & Mitigations
*   **Risk**: Ambiguous input formats
    *   **Mitigation**: Inputs must be numbers before passed to `calculate()`.
*   **Risk**: Floating-point precision
    *   **Mitigation**: Accept natural JS behavior; no extra formatting.
*   **Risk**: Students adding extra features
    *   **Mitigation**: Implementation must strictly follow the Specification.

## 7. Final Notes

This plan must be followed exactly during the Tasks and Implementation phases.
No new behavior may be added unless specified.

## Constitution Check

The plan aligns with the project constitution by adhering to:

*   **Clarity**: The plan is unambiguous and easily understandable.
*   **Completeness**: The plan provides sufficient detail for implementation and testing, addressing all aspects of the specification.
*   **Consistency**: Terminology remains consistent with the specification.
*   **Planning Rules**: The plan breaks work into logical, sequential steps, explicitly states assumptions (e.g., client code handling whitespace), and does not contradict the specification.
*   **Testability**: The plan outlines comprehensive unit tests for valid operations, error cases, and edge cases, ensuring all aspects are directly testable.
*   **Implementation Rules**: The plan emphasizes that implementation must follow the specification exactly, and no new features should be added unless specified.
*   **Simplicity**: The plan promotes a single pure function with no external libraries or I/O within the core function, aligning with the principle of simple, readable, and minimal code.