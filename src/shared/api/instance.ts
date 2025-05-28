import { setCookie } from 'cookies-next';
import { generateToken } from '../utils/generateJWT';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;

export const apiRequest = async <T>(url: string): Promise<T> => {
  const token = generateToken();
  setCookie('token', token);

  const response = await fetch(`${baseURL}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    next: {
      revalidate: 1000 * 60 * 60 * 24,
    },
  });
  return response.json();
};
