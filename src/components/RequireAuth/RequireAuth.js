import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './RequireAuth.css'

const RequireAuth = ({ children }) => {
    let location = useLocation()
    const [user, loading] = useAuthState(auth)
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    
    if (loading) {
        return <Loading />
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    if (user.providerData[0]?.providerId ==='password' && !user.emailVerified) {
        return (
            <div className=' mt-5 mx-auto text-center'>
            <h3 className='text-primary fw-bold'> Please Verify your email</h3>
            <button
            className='button p-3'
                onClick={async () => {
                    await sendEmailVerification();
                    toast.success('Sent email');
                }}
            >Send Email
            </button>
           
        </div>
        )
    }

    return children
};

export default RequireAuth;