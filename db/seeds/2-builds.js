export const seed = function (knex) {
  return knex("builds").insert([
    {
      id: "6728",
      name: "igs-hardware-FruitCocktail",
      vendor: "igs-hardware",
    },
    {
      id: "6729",
      name: "igs-hardware-CrazyMonkey",
      vendor: "igs-hardware",
    },
    {
      id: "6386",
      name: "nvm-coolfire1-BookOfRa",
      vendor: "nvm-coolfire1",
    },
    {
      id: "6376",
      name: "nvm-coolfire1-AlwaysHot",
      vendor: "nvm-coolfire1",
    },
  ]);
};
