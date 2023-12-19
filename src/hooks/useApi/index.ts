export const useApi = () => {
  const getConvert = async (payload: Object) => {
    const baseUrl = window.location.origin;
    const url = new URL(`${baseUrl}/api/convert`);
    url.searchParams.append('data', JSON.stringify(payload));

    const response = await fetch(url.href);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const responseJSON = await response.json();

    return responseJSON;
  };

  return {
    getConvert,
  };
};
