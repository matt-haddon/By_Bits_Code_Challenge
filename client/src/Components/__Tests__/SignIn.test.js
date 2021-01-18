import React from 'react';

import { render, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SignIn from '../SignIn';

afterEach(cleanup);

test('calls handleSubmit with the username and password when submitted', () => {
    const fakeUser = { username: 'fakeuser', password: 'password' };
    const handleSubmit = jest.fn();

    const container = document.createElement('div');
    const { getByLabelText, getByTestId } = render(
        <SignIn handleSubmit={handleSubmit} />,
        container
    );

    const usernameNode = getByLabelText('Username');
    const passwordNode = getByLabelText('Password');
    const submit = getByTestId('submit');

    userEvent.type(usernameNode, fakeUser.username);
    userEvent.type(passwordNode, fakeUser.password);

    fireEvent.click(submit);
    handleSubmit();

    expect(handleSubmit).toHaveBeenCalledTimes(1);
});

test('snapshot', () => {
    const { container } = render(<SignIn />);
    expect(container.firstChild).toMatchSnapshot();
});
