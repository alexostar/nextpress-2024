export const GET_ALL_TODOS = `
  query AllTodos {
    todos(first: 10000) {
      edges {
        node {
          title
          name
          isCompleted
          id
          date
          author {
            node {
              username
            }
          }
        }
      }
    }
  }
`;

export const GET_TODO_BY_ID = `
  query TodoById($id: ID!) {
    todo(id: $id) {
      title
      name
      isCompleted
      id
      date
      author {
        node {
          username
        }
      }
    }
  }
`;

export const CREATE_TODO = `
  mutation createTodo(
    $name: String!
  ) {
    createTodo(
      input: {
        name: $name
        status: PUBLISH
      }
    ) {
      todo {
        databaseId
        id
        name
      }
    }
  }
`;

export const UPDATE_TODO = `
  mutation updateTodo(
    $id: ID!
    $isCompleted: Boolean!
  ) {
    updateTodo(
      input: {
        id: $id
        isCompleted: $isCompleted
      }
    ) {
      clientMutationId
      todo {
        databaseId
        id
        name
      }
    }
  }
`;

export const DELETE_TODO = `
  mutation deleteTOdo($id: ID!) {
    deleteTodo(input: { id: $id }) {
      clientMutationId
      deletedId
    }
  }
`;
