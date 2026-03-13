import { useState, useEffect } from "react";

interface FetchState<T> {
    data: T | null
    loading: boolean
    error: string | null
}

export function useFetch<T>(fetchFn: () => Promise<T>, deps: any[] = []): FetchState<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const result = await fetchFn()
                setData(result)
            } catch (e) {
                setError("Failed to load data")
            } finally {
                setLoading(false)
            }
        }

        load();
    }, deps)

    return { data, loading, error };
}