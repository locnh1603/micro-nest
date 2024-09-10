import { useRouter } from 'next/navigation';

export function useAuth() {
  const router = useRouter();

  const isAuthenticated = !!localStorage.getItem('token');

  const checkAuthorization = () => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  };

  return { isAuthenticated, checkAuthorization };
}