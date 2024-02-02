'use server';
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

  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query: UPDATE_TODO,
      variables: {
        id: id,
        isCompleted: isCompleted,
      },
    }),
  };

  const fetchAPI = async () => {
    try {
      const result = await fetch(url, options);
      const data = await result.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  await fetchAPI();
  revalidatePath('/');
}
