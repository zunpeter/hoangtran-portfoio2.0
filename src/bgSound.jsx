import Sound from "react-sound";

const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying,
) => {
    return (
        <div>
            <Sound url="src/assets/sinnesloschen-beam.mp3"
            playingStatus={Sound.status.PLAYING}
            onLoading={handleSongLoading}
            onPlaying={handleSongPlaying}
            onFinishedPlaying={handleSongFinishedPlaying}
            />
        </div>
    );
};

export default PlaySound;