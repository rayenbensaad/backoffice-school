/* eslint-disable import/no-anonymous-default-export */
import http from "./http-common"

const create = (data) => {
  console.log(data)
  return http
    .post("/api/addArchive", data)
    .then((response) => {
      return response.data
    })
}

const getAll = (role) => {
  return http
    .get(`/api/archives/`)
    .then((response) => {
      return response.data
    })
}

const getAllDocs = (role) => {
  return http
    .get(`/api/archives/docs`)
    .then((response) => {
      return response.data
    })
}

const getAllTeachers = (role) => {
  return http
    .get(`/api/archives/teachers`)
    .then((response) => {
      return response.data
    })
}

const getAllStudents = (role) => {
  return http
    .get(`/api/archives/students`)
    .then((response) => {
      return response.data
    })
}

const getAllAdmins = (role) => {
  return http
    .get(`/api/archives/admins`)
    .then((response) => {
      return response.data
    })
}

const deleteOne = (id) => {
  return http
    .delete(`/api/archives/${id}`)
    .then((response) => {
      return response.data
    })
}

const deleteAll = () => {
  return http
    .delete(`/api/archives/`)
    .then((response) => {
      return response.data
    })
}

const getOne = (id) => {
  return http
    .get(`/api/archives/${id}`)
    .then((response) => {
      return response.data
    })
}

const update = (id, data) => {
  return http
    .put(`/api/archives/${id}`, data)
    .then((response) => {
      return response.data
    })
}

export default {
  create,
  getAll,
  getAllAdmins,
  getAllDocs,
  getAllStudents,
  getAllTeachers,
  deleteOne,
  deleteAll,
  getOne,
  update,
}