import { test, expect } from "vitest";
import { calculate } from "../calculate";

test('calculate addition', () => {
    let result = calculate(7, 5, '+')
    expect(result).toBe(12)
})
test('calculate subtraction', () => {
    let result = calculate(10, 5, '-')
    expect(result).toBe(5)
})
test('calculate multiplication', () => {
    let result = calculate(10, 5, '*')
    expect(result).toBe(50)
})
test('calculate division', () => {
    let result = calculate(10, 5, '/')
    expect(result).toBe(2)
})
test("Invalid operator", () => {
    expect(() => calculate(10,3,'&')).toThrowError("Invalid operator")
})

test('Divide by zero', () => {
    let result = calculate(10,0,'/')
    expect(result).toBe("Cannot divide by zero");
})

