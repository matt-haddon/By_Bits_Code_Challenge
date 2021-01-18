import MyPolicy from '../MyPolicy';
import { render, cleanup, act } from '@testing-library/react';

afterEach(cleanup);

test('policy details and log out button should render', async () => {
    const data = {
        policy: {
            cover: 'comprehensive',
            policy_ref: 'fakeRef',
            address: {
                line_1: 'line 1',
                line_2: 'line 2',
                postcode: 'postcode',
            },
        },
        vehicle: {
            make: 'fakeMake',
            model: 'fakeModel',
            reg: 'fakeReg',
            colour: 'black',
        },
    };

    const container = document.createElement('div');

    const { getByTestId } = render(<MyPolicy data={data} />, container);
    const promise = new Promise((r) => setTimeout(r, 2000));
    await act(() => promise);
    const policyRef = getByTestId('policy-ref');
    const policyCover = getByTestId('policy-cover');
    const car = getByTestId('car');
    const signOut = getByTestId('log-out');

    expect(policyRef).toBeInTheDocument();
    expect(policyCover).toBeInTheDocument();
    expect(car).toBeInTheDocument();
    expect(signOut).toBeInTheDocument();
});

test('snapshot', () => {
    const { container } = render(<MyPolicy />);

    expect(container.firstChild).toMatchSnapshot();
});
