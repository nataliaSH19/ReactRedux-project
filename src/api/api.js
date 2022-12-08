import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  params: {
    API_KEY: '6d5507d2-af10-40d4-8b56-d689867bd53e',
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data;
    });
  },
  getFollowUser(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  getUnfollowUser(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  getProfile(userId) {
    return instance.get(`/profile/` + userId);
  },

};

export const authAPI = {
  me() {
    return instance.get(`/auth/me`);
  },
 
};