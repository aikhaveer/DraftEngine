import LoginForm from '@/features/auth/LoginForm';

export const metadata = {
  title: 'Sign In',
};

export default function LoginPage() {
  return (
    <div className="container flex min-h-[80vh] items-center justify-center py-12">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-100">Sign In</h1>
          <p className="mt-2 text-gray-400">Enter your credentials to continue</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
