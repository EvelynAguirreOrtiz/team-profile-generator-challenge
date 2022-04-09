const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
  const engineer = new Engineer('Mary', 1480, 'mary@email.com', 'MaryGitHub');
  expect(engineer.name).toBe('Mary');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toStrictEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test("get engineer name", () => {
  const engineer = new Engineer('Mary', 1480, 'mary@email.com', 'MaryGitHub');

  expect(engineer.name).toBe('Mary');
});

test("get engineer id", () => {
  const engineer = new Engineer('Mary', 1480, 'mary@email.com', 'MaryGitHub');

  expect(engineer.id).toEqual(expect.any(Number));
});

test("get engineer email", () => {
  const engineer = new Engineer('Mary', 1480, 'mary@email.com', 'MaryGitHub');

  expect(engineer.email).toStrictEqual(expect.any(String));
});

test("get engineer github name", () => {
  const engineer = new Engineer('Mary', 1480, 'mary@email.com', 'MaryGitHub');

  expect(engineer.id).toEqual(expect.any(Number));
});
