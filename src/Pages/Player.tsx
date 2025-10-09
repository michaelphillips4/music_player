import { useState, useRef, useEffect } from 'react'
import { bucketUrl } from '../Data';
import useAPIMusicList from '../useAPIMusicList';

function Player() {
    const { data, error, loading } = useAPIMusicList(bucketUrl);
    const [currentSong, setCurrentSong] = useState<string>("");
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.play();
        }
    }, [currentSong]);

    useEffect(() => {
        if (!loading && Object.keys(data).length > 0) {
            console.log("Setting current song to first in list");
            setCurrentSong(Object.keys(data)[0]);
        }

    }, [loading]);

    const playNextSong = () => {
        if (Object.keys(data).length === 0) return;
        let keys = Object.keys(data);
        let currentIndex = keys.indexOf(currentSong);
        let nextIndex = (currentIndex + 1) % keys.length;
        setCurrentSong(keys[nextIndex]);
    }

    if (loading) {
        return <p>Loading...</p>
    }
    else if (error) {
        return <p>Error: {error.message}</p>
    }
    return (
        <>

            <p>
                {currentSong}
            </p>
            <audio controls ref={audioRef} onEnded={playNextSong}>

                <source src={data[currentSong]} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <ol>
                {Object.keys(data).map((key, index) => (
                    <li key={index}><a href="#"
                        onClick={() => { setCurrentSong(key) }}
                    >{key}</a></li>
                ))

                }
            </ol>
        </>
    )
}

export default Player;