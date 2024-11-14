export const fetchWithToken = async (url: string, token: unknown) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      token: `${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
