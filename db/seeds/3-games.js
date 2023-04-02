export const seed = function (knex) {
  return knex("games").insert([
    {
      id: "4884eb59-55d6-47a7-b4b2-0733bc8bebea",
      name: "FruitCocktail",
      buildId: "6728",
      geId: "d7b59317-28ae-4d41-84e5-d2223b30eb2d",
    },
    {
      id: "f4140146-9f7d-4f9f-8e9b-6d5530af19f6",
      name: "CrazyMonkey",
      buildId: "6729",
      geId: "d7b59317-28ae-4d41-84e5-d2223b30eb2d",
    },
    {
      id: "3ca05c8d-c39b-47f1-8f08-cb6dd5c6f450",
      name: "BookOfRa",
      buildId: "6386",
      geId: "d7b59317-28ae-4d41-84e5-d2223b30eb2d",
    },
    {
      id: "05bfe6bf-8a7b-4957-8e04-d36c1743cf42",
      name: "AlwaysHot",
      buildId: "6376",
      geId: "d7b59317-28ae-4d41-84e5-d2223b30eb2d",
    },
  ]);
};
