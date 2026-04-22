'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './useAuth';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

function validate(form) {
  const errors = {};
  if (!form.email) errors.email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = 'Enter a valid email';
  if (!form.password) errors.password = 'Password is required';
  else if (form.password.length < 8) errors.password = 'Minimum 8 characters';
  return errors;
}

export default function LoginForm() {
  const { login, loading, error } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) setFieldErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    try {
      await login(form);
      router.push('/dashboard');
    } catch {
      // surfaced via AuthContext.error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <Input
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        error={fieldErrors.email}
        placeholder="you@example.com"
        autoComplete="email"
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        error={fieldErrors.password}
        placeholder="••••••••"
        autoComplete="current-password"
      />
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Signing in…' : 'Sign In'}
      </Button>
    </form>
  );
}
