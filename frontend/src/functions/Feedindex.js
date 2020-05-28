import React,{ useState, useEffect } from "react";
import axios from "axios";
import { apiURL} from '../util/apiURL'

export default function UserIndex(){
    const [users, setUsers] = useState([]);
    const API = apiURL()

    useEffect(() => {
        const fetchUser = async () => {
            let res = await axios.get(`${API}/posts/`)
            console.log(res)
            setUsers(res.data.payload);
        }
        fetchUser();
    },[])

    return (
        <div>
            <h1>Bitter Posts</h1>
            <ul>
                {users.map(user => {
                    return <li key= {user.id}>{user.tweet}</li>
                })}
                {/* <h3>{users.firstname}</h3> */}
            </ul>
        </div>
    )
}

// const Feedindex = () => {


// }


// export default Feedindex
