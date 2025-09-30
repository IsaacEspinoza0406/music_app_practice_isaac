export default{
    AudioController(playlist){
        this._nextStong = playlist;
        this._actualStong = this._nextStong.pop();
    },
    _lastStongs: [],
    _nextStongs: [],
    _actualStong:null,
    _controller:document.getElementById("media"),
    _nextStong(){
        if(this._nextStongs.length !==0){
            this._lastStongs.push(this._actualStong);
            this._actualStong = this._nextStongs.pop();
        }
    },
    prevSoung: function(){
        if(this._lastStong.length!==0){
            this._nextStongs.push(this._actualStong),
            this._actualStong = this._lastStongs.pop();
        }
    },
    loadSoung(){
        this._controller.src
    },
    playPause(action){
        if(action == 'play'){
            this._controller.play()
        }
    }

}