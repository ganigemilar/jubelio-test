import { httpClient, resolve } from "./APIUtils";


export async function create(data) {
    return await resolve(httpClient().post(`/product`, data))
}

export async function getById(id) {
    return await resolve(httpClient().get(`/product/by-id/${id}`))
}

export async function update(data) {
    return await resolve(httpClient().put(`/product`, data))
}

export async function deleteById(id) {
    return await resolve(httpClient().delete(`/product/by-id/${id}`))
}

export async function getList(page, limit) {
    return await resolve(httpClient().get(`/product/list?page=${page}&limit=${limit}`))
}