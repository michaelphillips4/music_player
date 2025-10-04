import { useState, useRef } from 'react'
import { bucketUrl,getFriendlyNameFromUrl} from '../Data';
import useAPIMusicList from '../useAPIMusicList';    

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
                    (<li>Loading... {error?.message}</li>) :
                    (Object.keys(data).map((key, index) => (
                        <li key={index}><a href="#"
                            onClick=
                            {e => { e.preventDefault(); updateSong(data[key]); }}
                        >{getFriendlyNameFromUrl(data[key])}</a></li>
                    ))

                    )}
            </ol>
        </>

    )
}

export default Player;