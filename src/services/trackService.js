import api from './api';

export const getTracks = async () => {
  const response = await api.get('/tracks');
  return response.data;
};

export const getTrackById = async (id) => {
  const response = await api.get(`/tracks/${id}`);
  return response.data;
};
