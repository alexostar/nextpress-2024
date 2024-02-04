import NewIssueForm from './components/NewIssueForm';
import IssuesList from './components/IssuesList';

export const dynamic = 'force-dynamic';

const IssueHome = () => {
  return (
    <section className='py-20'>
      <div className='container'>
        <h1 className='mb-10 w-fit bg-slate-100 px-2 text-3xl font-bold text-slate-800'>
          Issues
        </h1>
        <NewIssueForm />
        <h2 className='mt-10 border-b pb-2 text-xl font-semibold'>
          Previous Issues:
        </h2>
        <IssuesList />
      </div>
    </section>
  );
};

export default IssueHome;
