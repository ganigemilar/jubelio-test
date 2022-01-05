import axios from "axios"

export const API_BASE_URL = "http://localhost:3000"

export function httpClient() {
    const instance = axios.create({
        baseURL: API_BASE_URL,
        auth: {
            username: 'jubelio_test_app',
            password: '$2b$10$DkuvsPJVCB.NUilWeih7WuLru0tlKndhcezS/CjX4M2zuQh9PaRDi'
        }
    })

    return instance
}

export async function resolve(promise) {
    const resolved = {
        data: null,
        error: null
    }

    try {
        const result = await promise
        resolved.data = result.data
    } catch (e) {
        resolved.error = e
    }

    return resolved
}