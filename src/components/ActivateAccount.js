import React from 'react';

export default function ActivateAccount({ setIsConfirmed }) {
  return (
    <div>
      <h1 className="my-4">ACTIVATE YOUR ACCOUNT</h1>
      <p className="my-3">We've sent you an email with an activation link inclosed. You will need to activate your <br/>account before you can login.</p>

      <button type="button" className="btn btn-secondary">RESEND EMAIL</button>

      <p className="mt-5">After you have activated your account please re-open your app and sign in.</p>
      <button type="button" className="btn btn-primary" onClick={() => setIsConfirmed(true)}>SIGN IN</button>
    </div>
  )
}
