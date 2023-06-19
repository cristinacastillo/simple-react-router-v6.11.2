import { useCallback, useEffect, useState } from "react";

//hook
export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [load, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /* console.log('useEffect'); */

    const getData = useCallback(async() => {
        setLoading(true);

        try {
            const res = await fetch(url);

            if (!res.ok) throw Error('Error al conectar con la api');

            const data = await res.json();
            setData(data);
        } catch (error) {
            console.log(error.message)
            setError(error.message)
            setData([])

        } finally {
            setLoading(false)
        }

    }, [url]);

    useEffect(() => {
        getData();
    }, [getData]);

    return { data, load, error }
}