import { BASE_URL } from '../config/config.js'

export async function getData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error making GET request: ${error}`);
  }
}

export async function putData(data, endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
    return response;
  } catch (error) {
    throw new Error(`Error making PUT request: ${error}`);
  }
}

export async function updateData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error making UPDATE request: ${error}`);
  }
}

export async function postData(data, endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    throw new Error(`Error making POST request: ${error}`);
  }
}
