export const API_BASE_URL = "http://localhost:3000"

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