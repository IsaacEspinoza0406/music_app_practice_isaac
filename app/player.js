import audioController from  "../domain/audioController"
import createPlaylist from "../utils/playlist";
export default{
    _progress_bar:document.getElementById("progress"),
    _play_btn : document.getElementById("play"),
    _last_btn : document.getElementById("lastest"),
    _forwd_btn : document.getElementById("forward"),
    audioController:audioController,
    player(songs){
        const media_controller = document.getElementById("media");
        const playlist = createPlaylist(songs, null)
        this.audioController.AudioController(playlist, media_controller);
    },
    eventListeners(){
        this._audioController._controller.addEventListener('timeupdate', function(){
            progress_value = (player._audioController.currentTime / player.audioController.duration) * 100;
            player._progress_bar.value = progress_value;
        });
        this._progress_bar.addEventListener('input',function(){
            player._audioController._controller.currentTime = (this.value/100)* player._audioController-_controller.duration;
        });
        this._forwd_btn.addEventListener('click', function(){
            audioController._nextStong();
        });
        this._last_btn.addEventListener('click', function(){
            audioController.prevSoung();
        });
    }

}