const Intern = require('../lib/Intern.js')

test('creates an intern object', () => {
  const intern = new Intern('Jane', 9876, 'jane@email.com', 'UTSA');
  expect(intern.name).toBe('Jane');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toStrictEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test("get intern name", () => {
  const intern = new Intern('Jane', 9876, 'jane@email.com', 'UTSA');

  expect(intern.name).toBe('Jane');
});

test("get intern id", () => {
  const intern = new Intern('Jane', 9876, 'jane@email.com', 'UTSA');

  expect(intern.id).toEqual(expect.any(Number));
});

test("get intern email", () => {
  const intern = new Intern('Jane', 9876, 'jane@email.com', 'UTSA');

  expect(intern.email).toStrictEqual(expect.any(String));
});

test("get intern github name", () => {
  const intern = new Intern('Jane', 9876, 'jane@email.com', 'UTSA');

  expect(intern.id).toEqual(expect.any(Number));
});