import { getFriendlyNameFromUrl } from "./Data"

function Song({url}:{url: string}){

    return (
      <>
            <p>{getFriendlyNameFromUrl(url)}</p>
            <audio controls>
                <source src={url} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
    </>
    )
}


export default Song
