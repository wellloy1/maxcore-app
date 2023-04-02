export default ({ services, actions, models }) => ({
  async test() {
    console.log("example.controller", { services, actions, models });
  },
});
