const baseUrl = 'https://covid19.mathdro.id/api';

const apiCall = async (url, option = {}) => {
  try {
    console.log('[request[', { url, option });
    const response = await fetch(url, option);
    const result = await response.json();

    console.log('[response]', { response, result });
    return result;
  } catch (err) {
    console.log('[error]', { err });
    throw err;
  }
};

const apiUrl = {
  globalSummary: `${baseUrl}`,
  countrySummary: `${baseUrl}/countries`,
  daily: `${baseUrl}/daily`,
};

export const getGlobalSummary = async () => {
  try {
    const result = await apiCall(apiUrl.globalSummary);
    return result;
  } catch (err) {
    throw err;
  }
};

export const getGlobalSummaryDetail = async (detail = 'confirmed') => {
  try {
    const result = await apiCall(`${apiUrl.globalSummary}/${detail}`);
    return result;
  } catch (err) {
    throw err;
  }
};

export const getGlobalDaily = async () => {
  try {
    const result = await apiCall(`${apiUrl.daily}`);
    return result;
  } catch (err) {
    throw err;
  }
};

export const getCountrySummary = async (country = 'id') => {
  try {
    const result = await apiCall(`${apiUrl.globalSummary}/${country}`);
    return result;
  } catch (err) {
    throw err;
  }
};

export const getCountrySummaryDetail = async (
  country = 'id',
  detail = 'confirmed',
) => {
  try {
    const result = await apiCall(
      `${apiUrl.countrySummary}/${country}/${detail}`,
    );
    return result;
  } catch (err) {
    throw err;
  }
};
