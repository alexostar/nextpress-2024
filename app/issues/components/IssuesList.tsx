import axios from 'axios';
import IssueItem from './IssueItem';
import { GET_ALL_ISSUES } from '@/lib/graphql/issues';

import { Issue } from '@/lib/generated/graphql';
import { IssueConnectionEdge } from '@/lib/generated/graphql';

export const dynamic = 'force-dynamic';

const IssueList = async () => {
  const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  const headers = {
    'content-type': 'application/json',
  };
  const graphqlQuery = {
    query: GET_ALL_ISSUES,
    variables: {},
  };

  const response = await axios({
    url: endpoint,
    method: 'post',
    headers: headers,
    data: graphqlQuery,
  });
  const issues =
    response.data?.data?.issues?.edges?.map(
      (edge: IssueConnectionEdge) => edge.node
    ) || [];

  return (
    <ul className='mt-4 flex flex-col gap-1'>
      {issues?.map((issue: Issue) => (
        <IssueItem key={issue.id} issue={issue} />
      ))}
    </ul>
  );
};

export default IssueList;
