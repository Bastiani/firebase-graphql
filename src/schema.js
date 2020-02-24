const { GraphQLSchema } = require("graphql");

const QueryType = require("./type/QueryType");
// import MutationType from "./type/MutationType";
// import SubscriptionType from "./type/SubscriptionType";

const schema = new GraphQLSchema({
  query: QueryType
  // mutation: MutationType,
  // subscription: SubscriptionType
});

module.exports = schema;
