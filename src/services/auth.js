/* eslint-disable import/no-anonymous-default-export */
import http from "./http-common";

const login = (email, password) => {
  return http
    .post("/api/users/login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data) {
        localStorage.setItem("userData", JSON.stringify(response.data));
        localStorage.setItem(
          "access_token",
          JSON.stringify(response.data.token)
        );
      }

      return response.data;
    });
};

const register = (data) => {
  console.log(data);
  return http.post("/api/users/createCP", data).then((response) => {
    return response.data;
  });
};

const logout = (token) => {
  return http.get("/api/logout", { params: { token } }).then((response) => {
    return response.data;
  });
};

const getAll = (role) => {
  return http.get(`/api/users/?role=${role}`).then((response) => {
    return response.data;
  });
};

const deleteOne = (id) => {
  return http.delete(`/api/users/${id}`).then((response) => {
    return response.data;
  });
};

const updateProfile = (data) => {
  console.log(data);
  return http.put("/api/users/update", data).then((response) => {
    return response.data;
  });
};

export default {
  login,
  register,
  getAll,
  deleteOne,
  updateProfile,
  logout,
};
