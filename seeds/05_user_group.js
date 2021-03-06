exports.seed = function (knex) {
  // Inserts seed entries
  return knex('user_group').insert([
    { user_id: "c1ad74ae-b651-4fa0-9820-833193797964", group_id: 1, is_admin: true },
    { user_id: "0e5639ea-8868-4bf6-ab5f-cb8a8d470785", group_id: 2, is_admin: true },
    { user_id: "a4e73f0d-60c2-4c30-8e7a-d54f637a8760", group_id: 1 },
    { user_id: "1c1543a6-9cdd-4616-a5d7-3021b0bf40ad", group_id: 1 },
    { user_id: "325353e8-dac3-4e3d-bbc0-8d02de38d1ff", group_id: 2 },
    { user_id: "7c8c5100-544d-45f3-9cee-3fed3d1a9a5d", group_id: 2 },
    { user_id: "e8c00cd6-4077-470f-8b61-17a4a1386959", group_id: 3 }
  ]).onConflict(['user_id', 'group_id']).ignore();
};
