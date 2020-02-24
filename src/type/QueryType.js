const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID
} = require("graphql");
const { connectionArgs, fromGlobalId } = require("graphql-relay");

const UserType = require("../modules/user/UserType");

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root of all... queries",
  fields: () => ({
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID)
        }
      },
      resolve: (obj, args, context) => {
        const { id } = fromGlobalId(args.id);
        return {
          id,
          name: "Rafael"
        };
      }
    }
  })
});

module.exports = QueryType;
