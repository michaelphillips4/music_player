import { useState, useEffect } from 'react'


const bucketUrl = 'https://jp4xzqcps4.execute-api.eu-west-2.amazonaws.com/v1/listmusic';


function getFriendlyNameFromUrl(url: string): string {
    const lastSlashIndex = url.lastIndexOf('/');
    const fileName = url.substring(lastSlashIndex + 1);
    const friendlyName = fileName.replace(/_/g, ' ').replace('.mp3', '');
    return friendlyName;
}


const useAPIMusicList = (url:string) => {
    const [data, setData] = useState<string[]>([]);
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
            .then((data) => {
                setData(data.data as string[]);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });

    }, []);
    return { error, loading, data };
}


export {useAPIMusicList, getFriendlyNameFromUrl, bucketUrl }; 