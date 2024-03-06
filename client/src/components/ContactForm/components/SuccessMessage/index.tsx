const SuccessMessage = ({ name = 'Visitor' }: { name: string }) => {
  return (
    <>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        Hello <strong style={{ color: '#eabb00', fontWeight: 'bold' }}>{name}</strong>,
      </p>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm leading-5">
        This form is wired up to a 🔥 <code>Firebase Firestore</code> NoSQL database on the backend and uses
        the <strong style={{ color: '#eabb00', fontWeight: 'bold' }}>formik</strong> validation library on the
        client. Source code is available at my{' '}
        <strong style={{ color: '#eabb00', fontWeight: 'bold' }}>GitHub</strong> repo.{' '}
        <a
          className="text-blue-500"
          href="https://github.com/jasoncsmith/React-Portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Check it out
        </a>
      </p>
    </>
  )
}

export default SuccessMessage
