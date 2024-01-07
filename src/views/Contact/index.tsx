import ContactForm from '../../components/ContactForm'

import './index.scss'

export default function Contact(): JSX.Element {
  return (
    <div id="view-contact" className="view view-contact">
      <header className="view__header">
        <h2>.Contact Me.</h2>
        <h5 className="pt-1 text-slate-400">
          Featuring my custom Modal hook with Tailwind CSS (submit the form to view)
        </h5>
      </header>

      <section id="contact-form1" className="contact-form">
        <ContactForm />
      </section>
    </div>
  )
}
