import { useState, useEffect } from 'react'
import { getFriendlyNameFromUrl } from './Data';

const useAPIMusicList = (url: string) => {
    const [data, setData] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((d) => {
               let record: Record<string, string> = {};
                d.data.forEach((item: string) => {
                    let key = getFriendlyNameFromUrl(item);
                    record[key] = item;
                });
                setData(record);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });

    }, []);
    return { error, loading, data };
}


export default useAPIMusicList ; 