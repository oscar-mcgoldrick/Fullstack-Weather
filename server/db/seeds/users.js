/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id:55501, username: 'oscarlykscats', email: 'oscar.mcgoldrick99@mgila.com', dob: 30011999, hash: 'mmm brownies', phone: '0225045351'},
    {id:55502, username: 'oscarlykscats', email: 'oscar.mcgoldrick99@mgila.com', dob: 30011999, hash: 'mmm brownies', phone: '0225045351'},
    {id:55503, username: 'oscarlykscats', email: 'oscar.mcgoldrick99@mgila.com', dob: 30011999, hash: 'mmm brownies', phone: '0225045351'}
  ]);
};
