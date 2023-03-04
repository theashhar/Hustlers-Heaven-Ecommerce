import { useState, createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { auth } from "../utils/firebase";

const provider = new GoogleAuthProvider();
export const UserContext = createContext({});

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState({});
    const signup = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Signed in 
            const user = userCredential.user;
            setUser(user);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError({ errorCode, errorMessage });
        }
    };

    const signin = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // Signed in 
            const user = userCredential.user;
            setUser(user);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError({ errorCode, errorMessage });
        }
    }

    const withGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            setUser(user);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError({ errorCode, errorMessage });
        }
    }
    const signout = () => {
        auth.signOut();
        setUser({});
        setError({});
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return unsubscribe;
    },[])
    return (
        <UserContext.Provider
         value={{ user, setUser, signup, signin, withGoogle, signout, error, setError }}
        >
         {children}
        </UserContext.Provider>
    );
};

export default UserProvider