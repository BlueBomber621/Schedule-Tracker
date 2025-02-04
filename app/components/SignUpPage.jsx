import React, { useContext } from 'react';
import { authContext } from '../lib/store/auth-context';

import { FcGoogle } from 'react-icons/fc';

const SignUpPage = () => {
    const { googleLoginHandler } = useContext(authContext);

    return (
        <div className='mx-auto p-6 max-w-2xl w-full h-full'>
            <div className='p-6 shadow-sm bg-gray-100 rounded-2xl border-b-2'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <div className='p-6 mb-10'>
                        <h2 className='title-style text-outline text-6xl'>-ClipTrack-</h2>
                    </div>
                    <h3 className='text-3xl'>Sign In To Continue</h3>
                    <button className='btn-basic flex gap-2' onClick={googleLoginHandler}><FcGoogle /> Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;