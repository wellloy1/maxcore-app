export const seed = function (knex) {
  return knex("casinos").insert([
    {
      id: "rmg-1",
      name: "ReelMotionGames",
      url: "http://192.168.77.173:3355/play",
      pubKey:
        "MIGJAoGBAMw6tmF8JpId7GHkR3ieqxi9LQafxhTpTgktVJyHE58Gvm1m3eWTI9xf1r1fD39Ls3c5RVfPJ4MA3YxEhMPWG0DELlEnMTuhCC93t/UxswZP4movGHO7/gqv8DAfubH5yzIvY/x/gmBFQGW60ShPH61lwPDsI7d3gZZXQ2Grx2Q7AgMBAAE=",
      providerPubKey:
        "MIGJAoGBALn2vUFIFm1leXe5GJcDLqjmr3dnY3ZWwlalTCzYwy1RPIQCyL+qhBUaQ+Yxpn8/46Ou7CC77dDQer+ndph66N1hxD4qmo5OJkdAkabnxoPZ+baFjbw89dqtPevLlUbA1r/HnO4Dr86RKmp0cQPQwFr2SgpQ8BfwNxgrZWYoR1KLAgMBAAE=",
      providerPrivateKey:
        "MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBALn2vUFIFm1leXe5GJcDLqjmr3dnY3ZWwlalTCzYwy1RPIQCyL+qhBUaQ+Yxpn8/46Ou7CC77dDQer+ndph66N1hxD4qmo5OJkdAkabnxoPZ+baFjbw89dqtPevLlUbA1r/HnO4Dr86RKmp0cQPQwFr2SgpQ8BfwNxgrZWYoR1KLAgMBAAECgYEAhzkS3zBzFnNOQy914QFwYWL1PocQfRGTWPvzizzHl+FVdsyreyubxdiGfRGndypW9kQQ8bCVulyOlWRJSZE+V9YGgRZvQ+n0LoQxbxuxkS2u4FEEW3M5IvJqgAreNGq1nW+7h7o5037uFji+iz3kAHrH6hvL2heou13+5fGaXsECQQDs5nwRQSONFdZt0f7ZoLUN6D5hKqmrraB97+PFpKn6w/4yeJLhCm7/jp9I4RNtZddW3jO/PfP+TFP6gxsA/JwrAkEAyPTywifF41TSsrMtApxJZlFlO8R3/1hBmbh6tPTdjfEQBDfHSj1XfD3AZnumNb/0uY26+DmZlnttZH2lKGATIQJAaP9y59beIe8W3g/gC6cN+D8CPuDA2OWYp5jGdFgaOpnZtZb5SqLsNXqKIKwZhzhHLCpJ9y5HUWOVKQgo1NQhhwJAKJ6SfzpI3qWjnSlofLGYiI0FWGpjEwME54yJiRBBxFIouaGIr/HsQBm/TTfLJewyDFugolIKQIecWgannpyk4QJBALiCFiqIZuPKl6gRAEzsndy7aYk3/7KRfW6qvvhNJ7oa+NcQkP1bY/j192HehMtOlaSr2WueWICeRaM7lIr1PU8=",
    },
    {
      name: "SexyMotionGames",
      url: "http://sexymotiongames.com:9480/api",
      pubKey: "885ad8d7-e267-4af7-96d8-44ce40cacba7",
      providerPubKey: "814ecf65-2c46-4f7f-9a63-40d90c0e3a29",
      providerPrivateKey: "4f3f755b-6077-4a6d-b172-a275992745df",
    },
    {
      name: "SuperMotionGames",
      url: "http://supermotiongames.com:9480/api",
      pubKey: "8f6a7181-b0fe-416c-ba9d-d3c4aa31c57c",
      providerPubKey: "2d6bd794-e655-4d7a-a62c-bf8e44e90ab9",
      providerPrivateKey: "8ad38d9b-6b4b-4af4-9d22-b7672008a2f4",
    },
  ]);
};
