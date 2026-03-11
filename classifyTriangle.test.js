
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

     // ── ROBUST BOUNDARY VALUE TESTS (BVT) ──────────────────────

    // Varying side A (b=100, c=100)
    test('BVT: a below minimum (a=0) returns error', () => {
        expect(classifyTriangle(0, 100, 100)).toMatch(/Error/);
    });
    test('BVT: a at minimum (a=1)', () => {
        expect(classifyTriangle(1, 100, 100)).toBe('Isosceles');
    });
    test('BVT: a just above minimum (a=2)', () => {
        expect(classifyTriangle(2, 100, 100)).toBe('Isosceles');
    });
    test('BVT: a at nominal (a=100)', () => {
        expect(classifyTriangle(100, 100, 100)).toBe('Equilateral');
    });
    test('BVT: a just below maximum (a=199)', () => {
        expect(classifyTriangle(199, 100, 100)).toBe('Isosceles');
    });
    test('BVT: a at maximum (a=200)', () => {
        expect(classifyTriangle(200, 100, 100)).toBe('Not a Triangle');
    });
    test('BVT: a above maximum (a=201) returns error', () => {
        expect(classifyTriangle(201, 100, 100)).toMatch(/Error/);
    });

    // Varying side B (a=100, c=100)
    test('BVT: b below minimum (b=0) returns error', () => {
        expect(classifyTriangle(100, 0, 100)).toMatch(/Error/);
    });
    test('BVT: b at minimum (b=1)', () => {
        expect(classifyTriangle(100, 1, 100)).toBe('Isosceles');
    });
    test('BVT: b just above minimum (b=2)', () => {
        expect(classifyTriangle(100, 2, 100)).toBe('Isosceles');
    });
    test('BVT: b at nominal (b=100)', () => {
        expect(classifyTriangle(100, 100, 100)).toBe('Equilateral');
    });
    test('BVT: b just below maximum (b=199)', () => {
        expect(classifyTriangle(100, 199, 100)).toBe('Isosceles');
    });
    test('BVT: b at maximum (b=200)', () => {
        expect(classifyTriangle(100, 200, 100)).toBe('Not a Triangle');
    });
    test('BVT: b above maximum (b=201) returns error', () => {
        expect(classifyTriangle(100, 201, 100)).toMatch(/Error/);
    });

    // Varying side C (a=100, b=100)
    test('BVT: c below minimum (c=0) returns error', () => {
        expect(classifyTriangle(100, 100, 0)).toMatch(/Error/);
    });
    test('BVT: c at minimum (c=1)', () => {
        expect(classifyTriangle(100, 100, 1)).toBe('Isosceles');
    });
    test('BVT: c just above minimum (c=2)', () => {
        expect(classifyTriangle(100, 100, 2)).toBe('Isosceles');
    });
    test('BVT: c at nominal (c=100)', () => {
        expect(classifyTriangle(100, 100, 100)).toBe('Equilateral');
    });
    test('BVT: c just below maximum (c=199)', () => {
        expect(classifyTriangle(100, 100, 199)).toBe('Isosceles');
    });
    test('BVT: c at maximum (c=200)', () => {
        expect(classifyTriangle(100, 100, 200)).toBe('Not a Triangle');
    });
    test('BVT: c above maximum (c=201) returns error', () => {
        expect(classifyTriangle(100, 100, 201)).toMatch(/Error/);
    });

    // ── WEAK NORMAL EQUIVALENCE CLASS TESTS (ECP) ──────────────

    test('ECP: Equilateral - all sides equal (5,5,5)', () => {
        expect(classifyTriangle(5, 5, 5)).toBe('Equilateral');
    });
    test('ECP: Isosceles - a equals b (6,6,4)', () => {
        expect(classifyTriangle(6, 6, 4)).toBe('Isosceles');
    });
    test('ECP: Isosceles - a equals c (6,4,6)', () => {
        expect(classifyTriangle(6, 4, 6)).toBe('Isosceles');
    });
    test('ECP: Isosceles - b equals c (4,6,6)', () => {
        expect(classifyTriangle(4, 6, 6)).toBe('Isosceles');
    });
    test('ECP: Scalene - no sides equal (3,4,5)', () => {
        expect(classifyTriangle(3, 4, 5)).toBe('Scalene');
    });
    test('ECP: Not a Triangle - a too long (10,3,4)', () => {
        expect(classifyTriangle(10, 3, 4)).toBe('Not a Triangle');
    });
    test('ECP: Not a Triangle - b too long (3,10,4)', () => {
        expect(classifyTriangle(3, 10, 4)).toBe('Not a Triangle');
    });
    test('ECP: Not a Triangle - c too long (3,4,10)', () => {
        expect(classifyTriangle(3, 4, 10)).toBe('Not a Triangle');
    });
    test('ECP: Error - a out of range (0,100,100)', () => {
        expect(classifyTriangle(0, 100, 100)).toMatch(/Error/);
    });
    test('ECP: Error - b out of range (100,0,100)', () => {
        expect(classifyTriangle(100, 0, 100)).toMatch(/Error/);
    });
    test('ECP: Error - c out of range (100,100,0)', () => {
        expect(classifyTriangle(100, 100, 0)).toMatch(/Error/);
    });
  });
  