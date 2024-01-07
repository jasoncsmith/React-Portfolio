import { IContactModel } from '.';

interface IErrors {
    firstName: string;
    lastName: string;
    email: string;
    comments: string;
}

export const validateForm = (values: IContactModel): IErrors => {
    const errors = {} as IErrors;

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
        errors.email = 'Please enter a valid email address';
    }

    if (!values.comments) {
        errors.comments = 'Required';
    } else if (values.comments.length < 5) {
        errors.comments = 'Please enter at least 5 characters';
    }

    return errors;
};
