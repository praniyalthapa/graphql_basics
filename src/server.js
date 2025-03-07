import { ApolloServer,gql} from 'apollo-server';

const TODOS = [
   {
    id: 1,
    task: "todo 1",
    completed: true
   },
   {
    id: 2,
    task: "todo 2",
    completed: false
   },
   {
    id:3,
    task: "todo 3",
    completed: true
   }
];

const typeDefs = gql`
  type Todo {
    id: ID!,
    task: String,
    completed: Boolean
  }

  type Query {
    getAllTodo: [Todo],
    getTodo(id:ID!): Todo!
  }

`;

const resolvers = {
  Query: {
    getAllTodo: () => {  
      return TODOS;
    },
    getTodo:(_,params)=>{
    //   console.log(params);
    return TODOS.find(todo=>todo.id == params.id);
    }  }
};

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});

server.listen().then(() => {
  console.log("GraphQL server is running...");
});
