import React from 'react';

import { render, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SignIn from '../SignIn';

afterEach(cleanup);

test('calls handleSubmit with the username and password when submitted', () => {
    // Arrange
    const fakeUser = { username: 'fakeuser', password: 'password' };
    const handleSubmit = jest.fn();
    const container = document.createElement('div');
    const { getByLabelText, getByTestId } = render(
        <SignIn handleSubmit={handleSubmit} error={false} />,
        container
    );

    const usernameNode = getByLabelText('Username');
    const passwordNode = getByLabelText('Password');

    // Act
    userEvent.type(usernameNode, fakeUser.username);
    userEvent.type(passwordNode, fakeUser.password);
    // usernameNode.value = fakeUser.username;
    // passwordNode.value = fakeUser.password;
    fireEvent.submit(getByTestId('form'));

    // Assert
    expect(handleSubmit()).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(fakeUser);
});

test('snapshot', () => {
    const { container } = render(<SignIn />);
    expect(container.firstChild).toMatchSnapshot();
});
