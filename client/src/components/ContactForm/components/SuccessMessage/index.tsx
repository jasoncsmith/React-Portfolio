const SuccessMessage = ({ name = 'Visitor' }: { name: string }) => {
  return (
    <>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        Hello <strong style={{ color: '#eabb00', fontWeight: 'bold' }}>{name}</strong>,
      </p>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm leading-5">
        This form is wired up to a 🔥 <code>Firebase Firestore</code>.
      </p>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm leading-5">
        Thank you for taking the time to reach out. I will be in touch within 2 business days.
      </p>
    </>
  )
}

export default SuccessMessage
