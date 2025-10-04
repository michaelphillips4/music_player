

function Song({ url, name }: { url: string, name: string }) {

    return (
        <>
            <p>{name}</p>
            <audio controls>
                <source src={url} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </>
    )
}


export default Song
