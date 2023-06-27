/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cities').del()
  await knex('cities').insert([
    {id: 88801, name: 'Gore', country: 'NZ', lat: 23.048, long: 10.230},
    {id: 88802, name: 'Amsterdam', country: 'NZ', lat: 11.241, long: 30.417},
    {id: 88803, name: 'Chicago', country: 'NZ', lat: 2.455, long: 10.230}
  ]);
};
