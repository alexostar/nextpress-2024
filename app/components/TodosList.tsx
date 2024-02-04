import axios from 'axios';
import TodoItem from './TodoItem';
import { GET_ALL_TODOS } from '@/lib/graphql/todos';

import { Todo } from '@/lib/generated/graphql';
import { TodoConnectionEdge } from '@/lib/generated/graphql';

export const dynamic = 'force-dynamic';

const TodoList = async () => {
  const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  const headers = {
    'content-type': 'application/json',
  };
  const graphqlQuery = {
    query: GET_ALL_TODOS,
    variables: {},
  };

  const response = await axios({
    url: endpoint,
    method: 'post',
    headers: headers,
    data: graphqlQuery,
  });
  const todos =
    response.data?.data?.todos?.edges?.map(
      (edge: TodoConnectionEdge) => edge.node
    ) || [];

  return (
    <ul className='mt-4 flex flex-col gap-1'>
      {todos?.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  );
};

export default TodoList;
