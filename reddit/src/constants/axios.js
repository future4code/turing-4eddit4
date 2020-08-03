const token = window.localStorage.getItem('token');

export const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/';

export const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    Authorization : token
  }
}
