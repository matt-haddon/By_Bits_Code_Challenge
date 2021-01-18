import React, { useState, useEffect } from 'react';

import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { IoIosCar } from 'react-icons/io';
import { RiCompassDiscoverFill } from 'react-icons/ri';
import { BiBarcode } from 'react-icons/bi';
import { FaAddressCard } from 'react-icons/fa';
import Car from '../Assets/car.gif';

const MyPolicy = ({ setData, data, setError }) => {
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const logOut = () => {
        setData('');
        setError(false);
        history.push('/');
    };

    if (loading) {
        return (
            <div className="loading">
                <img src={Car} alt="loading" />
                <p data-testid="loading">Loading...</p>
            </div>
        );
    } else {
        return (
            <div className="policy">
                <h1>My Policy</h1>
                <section className="data">
                    <div>
                        <BiBarcode />
                        <section>
                            <h6>Policy reference</h6>
                            <p data-testid="policy-ref">
                                {data.policy.policy_ref}
                            </p>
                        </section>
                    </div>
                    <div>
                        {' '}
                        <RiCompassDiscoverFill />
                        <section>
                            <h6>Cover type</h6>
                            <p data-testid="policy-cover">
                                {data.policy.cover}
                            </p>
                        </section>
                    </div>
                    <div>
                        <IoIosCar />
                        <section>
                            <h6>Car</h6>
                            <p data-testid="car">{`${
                                data.vehicle.make.charAt(0).toUpperCase() +
                                data.vehicle.make.slice(1)
                            } ${data.vehicle.model} ${
                                data.vehicle.colour.charAt(0).toUpperCase() +
                                data.vehicle.colour.slice(1)
                            } - ${data.vehicle.reg}`}</p>
                        </section>
                    </div>
                    <div>
                        <FaAddressCard />
                        <section>
                            <h6>Address</h6>
                            <p data-testid="address">{`${data.policy.address.line_1}, ${data.policy.address.line_2}, ${data.policy.address.postcode}`}</p>
                        </section>
                    </div>
                    <Button
                        data-testid="log-out"
                        onClick={logOut}
                        color="primary"
                    >
                        Log Out
                    </Button>
                </section>
            </div>
        );
    }
};

export default MyPolicy;
