import axios from "axios";
import { API_BASE_URL, resolve } from "./APIUtils";

export async function create(data) {
    return await resolve(axios.post(`${API_BASE_URL}/product`, data))
}

export async function getById(id) {
    return await resolve(axios.get(`${API_BASE_URL}/product/by-id/${id}`))
}

export async function update(data) {
    return await resolve(axios.put(`${API_BASE_URL}/product`, data))
}

export async function deleteById(id) {
    return await resolve(axios.delete(`${API_BASE_URL}/product/by-id/${id}`))
}

export async function getList(page, limit) {
    return await resolve(axios.get(`${API_BASE_URL}/product/list?page=${page}&limit=${limit}`))
}