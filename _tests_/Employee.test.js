const Employee = require('../lib/Employee.js')

test('creates an employee object', () => {
  const employee = new Employee('John');

  // expect(employee.name).toBe('John');
  // expect(employee.id).toEqual(expect.any(Number));

  // expect(employee.id).toBe(expect.any(Number));
  // expect(employee.email).toBe(expect.any(String));
});


describe('Employee', () => {
  describe("get employee name", () => {
    it('should return employee name', () => {
      const testName = '';
      const expected = "John";

      const result = new Employee('John');

      expect(result).toEqual(expected);
      // expect(employee.getName()).toEqual('John');
      // expect(employee.getName()).toBe('John');
    })
  });

  // test('gets employee id', () => {
  //   const employee = new Employee('John');

  //   expect(employee.getId()).toEqual(expect.any(Number));
  // });

  // test('checks employee email', () => {
  //   const employee = new Employee('John');

  //   expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));

  // });

  // test("gets employee role", () => {
  //   const employee = new Employee('John');

  //   expect(employee.getRole()).toEqual(expect.stringContaining(employee.role.toString()));
  // });
});