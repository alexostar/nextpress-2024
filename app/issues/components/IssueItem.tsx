'use client';

import { useTransition } from 'react';

import { Issue } from '@/lib/generated/graphql';
import { updateIssueAction } from '@/lib/actions/updateIssueAction';

type IssueItemProps = {
  issue: Issue;
};

const IssueItem = ({ issue }: IssueItemProps) => {
  const [isPending, startTransition] = useTransition();

  console.log('Issue:', issue);

  return (
    <li className='flex items-center gap-3'>
      <input
        id={issue.id}
        type='checkbox'
        // @ts-ignore
        defaultChecked={issue.issueFields.isCompleted}
        onChange={(e) =>
          startTransition(() => updateIssueAction(issue.id, e.target.checked))
        }
        className='peer h-4 w-4 cursor-pointer rounded border-gray-300 text-slate-600 focus:ring-slate-600'
      />
      <label
        htmlFor={issue.id}
        className='cursor-pointer peer-checked:text-slate-500 peer-checked:line-through'>
        {issue.title}
      </label>
      <span className='ml-auto text-sm text-slate-500 peer-checked:line-through'>
        WordPress Todo
      </span>
    </li>
  );
};

export default IssueItem;
