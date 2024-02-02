// 'use client';

import NewTodoForm from './components/NewTodoForm';
import TodosList from './components/TodosList';

export const dynamic = 'force-dynamic';

const Home = () => {
  return (
    <section className='py-20'>
      <div className='container'>
        <h1 className='mb-10 w-fit bg-slate-100 px-2 text-3xl font-bold text-slate-800'>
          Todos
        </h1>
        <NewTodoForm />
        <h2 className='mt-10 border-b pb-2 text-xl font-semibold'>
          Previous todos:
        </h2>
        <TodosList />
      </div>
    </section>
  );
};

export default Home;
