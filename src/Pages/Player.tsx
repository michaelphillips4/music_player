import { useState, useRef } from 'react'
import { bucketUrl, getFriendlyNameFromUrl, useAPIMusicList } from '../Data';

function Player() {
    const { data, error, loading } = useAPIMusicList(bucketUrl);
    const [song, setSong] = useState<string>(data[0]);
    const audioRef = useRef<HTMLAudioElement>(null);

    const updateSong = (url: string) => {
        setSong(url);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.play();
        }
    }

    return (
        <>
            <p>
                {getFriendlyNameFromUrl(song || '')}
            </p>
            <audio controls ref={audioRef}>
                <source src={song} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <ol>
                {loading ?
                    (<li>Loading... {error?.message}</li>) : (data.map((url, index) => (
                        <li key={index}><a href="#"
                            onClick=
                            {e => { e.preventDefault(); updateSong(url); }}
                        >{getFriendlyNameFromUrl(url)}</a></li>
                    ))

                    )}
            </ol>
        </>

    )
}

export default Player;

