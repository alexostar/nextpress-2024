'use server';

import axios from 'axios';

import { revalidatePath } from 'next/cache';
import { CREATE_ISSUE } from '../graphql/issues';

interface ValidationError {
  message: string;
  errors: Record<string, string[]>;
}

export async function createIssueAction(title: string) {
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
    query: CREATE_ISSUE,
    variables: { title: title },
  };

  console.log('GraphqlMutation: ', graphqlMutation);

  try {
    const response = await axios({
      url: url,
      method: 'post',
      headers: headers,
      data: graphqlMutation,
    });
    console.log(response.data);
  } catch (error) {
    if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
      console.log('Error status: ', error.status);
      console.error('Error message: ', error.response);
      // Do something with this error...
    } else {
      console.error(error);
    }
  }

  revalidatePath('/');
}
