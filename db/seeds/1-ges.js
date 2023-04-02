export const seed = function (knex) {
  return knex("ges").insert([
    {
      id: "d7b59317-28ae-4d41-84e5-d2223b30eb2d",
      name: "QA",
      url: "http://ge.api.qa.reelmotiongames.com:9480",
    },
    {
      id: "638bf7bf-3d41-4a28-9ac4-ecb4f58cda11",
      name: "DEV",
      url: "http://ge.api.dev.reelmotiongames.com:9480",
    },
    {
      id: "a42c5b53-466f-430a-9933-709b5ba59c81",
      name: "NEWDEV",
      url: "http://ge.api.newdev.reelmotiongames.com:9480",
    },
  ]);
};
