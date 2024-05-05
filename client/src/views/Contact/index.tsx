import React from 'react'
import ContactFormController from '../../components/ContactFormController'

import './index.scss'
export default function Contact(): React.JSX.Element {
  return (
    <div id="view-contact" className="view view-contact">
      <header className="view__header">
        <h2>Contact Me</h2>
      </header>

      <section>
        <ContactFormController />
      </section>
    </div>
  )
}
