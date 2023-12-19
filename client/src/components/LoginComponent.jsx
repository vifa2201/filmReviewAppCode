import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";


export function LoginComponent() {
    // const { setAuth } = useContext(AuthContext);

    // const userRef = useRef();
    // const errRef = useRef();

    // const [user, setUser] = useState('');
    // const [pwd, setPwd] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [user, pwd])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await axios.post(URL,
    //             JSON.stringify({ user, pwd }),
    //             {
    //                 headers: { 'Content-Type': 'application/jsin' },
    //                 withCredentials: true
    //             }
    //         )
    //         console.log(JSON.stringify(response?.data));

    //         const accessToken = response?.data?.accessToken;
    //         const roles = response?.data?.roles;

    //         setAuth({ user, pwd, roles, accessToken });
    //         setUser('');
    //         setPwd('');
    //         setSuccess(true);
    //     }catch (err) {
    //         if (!err?.response) {
    //             setErrMsg('No Server Response');
    //         } else if (err.response?.status === 400) {
    //             setErrMsg('Missing Username or Password');
    //         } else if (err.response?.status === 401) {
    //             setErrMsg('Unauthorized');
    //         } else {
    //             setErrMsg('Login Failed');
    //         }
    //         errRef.current.focus();
        

                
    //     }

    // }
    return (
        <>
            {success ? (
                <section>
                    <h1>Hej du är inloggad</h1>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className="error"></p>
                    <h1>Logga in</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Användarnamn:</label>
                        <input type="text"
                            id='username'
                            ref={userRef}

                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required />

                        <label htmlFor="password">Lösenord</label>
                        <input type="password"
                            id='password'
                            ref={userRef}
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button type='submit'>Logga in</button>
                    </form>


                </section>
            )}
        </>
    )
}
