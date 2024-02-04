'use server';

import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { UPDATE_TODO } from '../graphql/todos';

export async function updateTodoAction(id: string, isCompleted: boolean) {
  const url = process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string;

  // Set username and password
  const username = process.env.NEXT_PUBLIC_WORDPRESS_USERNAME;
  const password = process.env.NEXT_PUBLIC_WORDPRESS_APPLICATION_PASSWORD;
  // Encode username and password in base64
  const encoded = Buffer.from(username + ':' + password).toString('base64');

  const headers = {
    'content-type': 'application/json',
    Authorization: 'Basic ' + encoded,
  };

  const graphqlMutation = {
    query: UPDATE_TODO,
    variables: {
      id: id,
      isCompleted: isCompleted,
    },
  };

  const response = await axios({
    url: url,
    method: 'post',
    headers: headers,
    data: graphqlMutation,
  });
  console.log(response);

  revalidatePath('/');
}
