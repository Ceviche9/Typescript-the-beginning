import React, { useEffect } from 'react';
import { useState } from 'react';
import api from './Services/api';
import {User} from './components/User';

interface IUser {
  name: string;
  email: string;

}

function App() {

  const [user, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get<IUser[]>('/users').then(response => {
      setUsers(response.data);
    });

  },[])

  return (
    <div className="App">
      {user.map(user => <User key={user.email} user={user}/>)}
    </div>
  );
}

export default App;
