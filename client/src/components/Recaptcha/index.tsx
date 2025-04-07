import config from '../../config'

const RecaptchaButton = () => {
  const key = config.recaptchaKeyClient
  return (
    <button className="g-recaptcha" data-sitekey={key} data-callback="onSubmit" data-action="submit">
      Submit
    </button>
  )
}

export default RecaptchaButton
