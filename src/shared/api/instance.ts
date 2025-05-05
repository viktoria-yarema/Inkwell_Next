const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;

export const apiRequest = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
  const response = await fetch(`${baseURL}${url}`, options ?? {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
