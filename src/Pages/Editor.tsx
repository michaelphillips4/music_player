import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
// @ts-ignore
import outputs from '/amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

export default function Editor() {
  return (<>
   <p>Either Login or Create a new Account below</p>
    <Authenticator>
     
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
         
        </main>
      )}
    </Authenticator></>)}

