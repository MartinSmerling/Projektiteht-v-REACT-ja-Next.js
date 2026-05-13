'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [error, setError] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });

    if (res.ok) {
      window.location.href = '/dashboard';
    } else {
      setError('Virheellinen käyttäjätunnus tai salasana');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />

      <button type="submit">Kirjaudu</button>

      {error && <p>{error}</p>}
    </form>
  );
}