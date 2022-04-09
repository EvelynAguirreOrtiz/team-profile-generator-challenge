const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
  const engineer = new Engineer('name');

  // expect(engineer.name).toBe('John');
  // expect(engineer.id).toEqual(expect.any(Number));

  // expect(engineer.id).toBe(expect.any(Number));
  // expect(engineer.email).toBe(expect.any(String));
});

// describe('Engineer', () => {
//   decribe('', () => { 
//     it('', () => { 

//       const test = '';
//       const expected = '';
//       const result = new Engineer('');
//       expect(result).toEqual(expected);
//     })
//   })
  
// });