import React from 'react'
import ContactFormController from '../../components/ContactFormController'
import Page from '../../components/Layout/Page'

import styles from './index.module.scss'

export default function Contact(): React.JSX.Element {
  return (
    <Page className={styles.page}>
      <Page.Header title="Contact Me" />
      <Page.Content>
        <ContactFormController />
      </Page.Content>
    </Page>
  )
}
