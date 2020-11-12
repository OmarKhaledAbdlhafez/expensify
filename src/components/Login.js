import React from 'react';
const LoginPage =()=>{
    return (
        <div>
            <form>
                <p>mail:</p>
                <input 
                 type='text'
                 />
                <p>password:</p>
                <input
                    type='password'
                 />
                 <button>
                     Login
                 </button>
            </form>
        </div>

    );
}
export default LoginPage;