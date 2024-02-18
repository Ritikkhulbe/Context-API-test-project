import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setUser({username, password})
    }

    return (
        <div className="bg-gray-400 flex flex-col text-center p-4 max-w-[400px] items-center m-10">
            <h1 className="text-white p-4">
                Login
            </h1>
            <input className="p-4 m-4 rounded-md text-black" type='text' placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input className="p-4 m-4 rounded-md text-black" type='text' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit} className="rounded-md bg-black w-50 p-4 m-4">Submit</button>
        </div>
    )
}

export default Login;