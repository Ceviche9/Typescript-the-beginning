import React from 'react';

interface IUser {
  name: string;
  email: string;

}

interface Props {
  user: IUser
}

export const User: React.FC<Props> = ({ user }) => {

  return (
    <div>
      <strong>Name: {user.name}</strong> <br />
      <strong>E-mail: {user.email}</strong> <br />
    </div>

  );

};
