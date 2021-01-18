async function postUser(username, password) {
    try {
        const response = await fetch('https://api.bybits.co.uk/auth/token', {
            method: 'POST',
            mode: 'cors',
            headers: {
                environment: 'mock',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
                type: 'USER_PASSWORD_AUTH',
            }),
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

async function userPolicy(token) {
    try {
        const response = await fetch(
            'https://api.bybits.co.uk/policys/details',
            {
                headers: {
                    environment: 'mock',
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export { postUser, userPolicy };
