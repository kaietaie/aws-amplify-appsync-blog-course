"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "../../../configureAmplify";


function Profile({  signOut, user }) {
  
  return (
    <div >
      <h1 className="text-3xl font-bold">Your profile</h1>

      <p className="text-sm text-gray-500 mb6">{user? user.attributes.email : "null"}</p>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}
export default  withAuthenticator(Profile);
