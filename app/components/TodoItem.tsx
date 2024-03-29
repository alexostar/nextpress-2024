'use client';

import { useTransition } from 'react';

import { Todo } from '@/lib/generated/graphql';
import { updateTodoAction } from '@/lib/actions/updateTodoAction';

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isPending, startTransition] = useTransition();

  return (
    <li className='flex items-center gap-3'>
      <input
        id={todo.id}
        type='checkbox'
        // @ts-ignore
        defaultChecked={todo.isCompleted}
        onChange={(e) =>
          startTransition(() => updateTodoAction(todo.id, e.target.checked))
        }
        className='peer h-4 w-4 cursor-pointer rounded border-gray-300 text-slate-600 focus:ring-slate-600'
      />
      <label
        htmlFor={todo.id}
        className='cursor-pointer peer-checked:text-slate-500 peer-checked:line-through'>
        {todo.title}
      </label>
      <span className='ml-auto text-sm text-slate-500 peer-checked:line-through'>
        WordPress Todo
      </span>
    </li>
  );
};

export default TodoItem;
