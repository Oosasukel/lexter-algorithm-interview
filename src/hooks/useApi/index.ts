export const useApi = () => {
  const getConvert = async (payload: Object) => {
    const baseUrl = window.location.origin;
    const url = new URL(`${baseUrl}/api/convert`);
    url.searchParams.append('data', JSON.stringify(payload));

    const response = await fetch(url.href);
    const responseJSON = await response.json();
    if (!response.ok) {
      throw new Error(responseJSON.message);
    }

    return responseJSON;
  };

  return {
    getConvert,
  };
};
