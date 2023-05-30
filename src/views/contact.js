import { useState } from 'react';
import { useFormik } from 'formik';
import useModal from '../hooks/useModal';
import './contact.scss';

const ContactModel = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    comments: '',
};

const Message = ({ firstName }) => {
    return (
        <>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                Hello,{' '}
                <span style={{ color: '#eabb00', fontWeight: 'bold' }}>
                    {firstName}
                </span>
                .
            </p>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm leading-5">
                This form is not hooked up to a backend api. It is a demo for my{' '}
                <strong style={{ color: '#eabb00', fontWeight: 'bold' }}>
                    custom modal hook
                </strong>{' '}
                styled with{' '}
                <strong style={{ color: '#eabb00', fontWeight: 'bold' }}>
                    tailwindCSS
                </strong>{' '}
                and uses the{' '}
                <strong style={{ color: '#eabb00', fontWeight: 'bold' }}>
                    formik
                </strong>{' '}
                validation library. Source code is available in my{' '}
                <strong style={{ color: '#eabb00', fontWeight: 'bold' }}>
                    GitHub
                </strong>{' '}
                repo here:
            </p>
        </>
    );
};

export default function Contact() {
    const modal = useModal();

    const [msg, setMessage] = useState({
        title: '',
        content: '',
    });

    const validate = (values) => {
        const errors = {};

        if (values.firstName.length < 2) {
            errors.firstName = 'Required';
        } else if (values.firstName.length > 25) {
            errors.firstName = 'Must be 25 characters or less';
        }

        if (values.lastName.length < 2) {
            errors.lastName = 'Required';
        } else if (values.lastName.length > 25) {
            errors.lastName = 'Must be 25 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }

        if (!values.comments) {
            errors.comments = 'Required';
        } else if (values.comments.length < 5) {
            errors.comments = 'Must be at least 5 characters';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: ContactModel,
        validate,
        onSubmit: (values) => {
            send(values);
        },
    });

    const handleSuccess = ({ firstName }) => {
        setMessage({
            title: 'Thanks for Visiting',
            content: <Message firstName={firstName} />,
        });
        modal.toggleIsVisible(true);
        reset();
    };

    const send = (data) => {
        // send to api when done
        // JSON.stringify(data);
        handleSuccess(data);
    };

    const reset = () => formik.handleReset();

    return (
        <div
            id="view-contact"
            className="view view-contact"
        >
            <header className="view__header">
                <h2>.Contact Me.</h2>
                <h5 className="pt-1 text-slate-400">
                    Featuring my custom Modal hook with Tailwind CSS (submit the form
                    to view)
                </h5>
            </header>

            <section
                id="contact-form1"
                className="contact-form"
            >
                <form
                    // action="/webservices/form.php"
                    method="post"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="form-lcol">
                        <div className="group">
                            <div className="control-input">
                                <label htmlFor="input-firstName">
                                    First Name
                                </label>
                                <input
                                    id="input-firstName"
                                    name="firstName"
                                    className={
                                        formik.touched.firstName &&
                                        formik.errors.firstName
                                            ? 'input--is-invalid'
                                            : ''
                                    }
                                    type="text"
                                    maxLength="25"
                                    tabIndex="1"
                                    placeholder="First name*"
                                    value={formik.values.firstName}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.firstName &&
                                formik.errors.firstName ? (
                                    <span className="validation-meassage--is-error">
                                        {formik.errors.firstName}
                                    </span>
                                ) : null}
                            </div>

                            <div className="control-input">
                                <label htmlFor="input-lastName">
                                    Last Name
                                </label>
                                <input
                                    id="input-lastName"
                                    name="lastName"
                                    className={
                                        formik.touched.lastName &&
                                        formik.errors.lastName
                                            ? 'input--is-invalid'
                                            : ''
                                    }
                                    type="text"
                                    maxLength="25"
                                    tabIndex="2"
                                    placeholder="Last name*"
                                    value={formik.values.lastName}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.lastName &&
                                formik.errors.lastName ? (
                                    <span className="validation-meassage--is-error">
                                        {formik.errors.lastName}
                                    </span>
                                ) : null}
                            </div>
                        </div>

                        <div className="control-input">
                            <label htmlFor="input-email">Email</label>
                            <input
                                id="input-email"
                                name="email"
                                className={
                                    formik.touched.email && formik.errors.email
                                        ? 'input--is-invalid'
                                        : ''
                                }
                                type="email"
                                maxLength="40"
                                tabIndex="3"
                                placeholder="Email*"
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <span className="validation-meassage--is-error">
                                    {formik.errors.email}
                                </span>
                            ) : null}
                        </div>

                        <div className="control-input">
                            <label htmlFor="input-company">Company</label>
                            <input
                                id="input-company"
                                name="company"
                                type="text"
                                maxLength="40"
                                tabIndex="4"
                                placeholder="Company"
                                value={formik.values.company}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </div>

                        <div className="confirmEmail">
                            <label htmlFor="input-confirmEmail">
                                Honeytrap
                            </label>
                            <input
                                id="input-confirmEmail"
                                name="confirmEmail"
                                type="text"
                                maxLength="40"
                                tabIndex="4"
                            />
                        </div>
                    </div>

                    <div className="form-rcol">
                        <div className="control-textarea">
                            <label htmlFor="textarea-comments">Comments</label>
                            <textarea
                                id="textarea-comments"
                                name="comments"
                                className={
                                    formik.touched.comments &&
                                    formik.errors.comments
                                        ? 'input--is-invalid'
                                        : ''
                                }
                                rows="7"
                                cols="37"
                                placeholder="Greetings, questions, comments... *"
                                tabIndex="5"
                                maxLength="275"
                                value={formik.values.comments}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.comments &&
                            formik.errors.comments ? (
                                <span className="validation-meassage--is-error">
                                    {formik.errors.comments}
                                </span>
                            ) : null}
                        </div>

                        <button
                            className="btn-submit"
                            type="submit"
                        >
                            Transmit
                        </button>
                        <div className="loader"></div>
                    </div>
                </form>
            </section>

            <modal.Modal
                isVisible={modal.isVisible}
                hideModal={modal.toggleIsVisible}
                title={msg.title}
                content={msg.content}
            />
        </div>
    );
}
