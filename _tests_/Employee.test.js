const Employee = require('../lib/Employee.js')
// jest.mock('../lib/employee.js');

test('creates an employee object', () => {
  const employee = new Employee('John', 1234, 'email@email.com');

  expect(employee.name).toBe('John');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toStrictEqual(expect.any(String));
});

test("get employee name", () => {
  const employee = new Employee('John', 1234, 'email@email.com');

  expect(employee.name).toBe('John');
});

test("get employee id", () => {
  const employee = new Employee('John', 1234, 'email@email.com');

  expect(employee.id).toEqual(expect.any(Number));
});

test("get employee email", () => {
  const employee = new Employee('John', 1234, 'email@email.com');

  expect(employee.email).toStrictEqual(expect.any(String));
});



