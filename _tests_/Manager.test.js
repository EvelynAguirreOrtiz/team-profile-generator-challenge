const Manager = require('../lib/Manager.js')
// jest.mock('../lib/employee.js');

test('creates a manager object', () => {
  const manager = new Manager('Joe', 1357, 'joe@email.com', 210-123-4567);

  expect(manager.name).toBe('Joe');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toStrictEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));

});

// test("get manager name", () => {
//   const manager = new Manager('Joe', 1357, 'joe@email.com', 210-123-4567);

//   expect(manager.name).toBe('Joe');
// });

// test("get manager id", () => {
//   const manager = new Manager('Joe', 1357, 'joe@email.com', 210-123-4567);

//   expect(manager.id).toEqual(expect.any(Number));
// });

// test("get manager email", () => {
//   const manager = new Manager('Joe', 1357, 'joe@email.com', 210-123-4567);

//   expect(manager.email).toStrictEqual(expect.any(String));
// });

// test("get manager office number", () => {
//   const manager = new Manager('Joe', 1357, 'joe@email.com', 210-123-4567);

//   expect(manager.id).toEqual(expect.any(Number));
// });
