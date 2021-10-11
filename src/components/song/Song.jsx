import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Song.scss'

function Song() {
    return (
        <div className="relative top-44">
            <div className="absolute left-96 top-32 w-96 h-20">
                <AudioPlayer 
                    src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
                    customProgressBarSection={
                        [
                        RHAP_UI.CURRENT_TIME,
                        RHAP_UI.PROGRESS_BAR,
                        RHAP_UI.CURRENT_LEFT_TIME,
                        ]
                    }  
                    showJumpControls={false}
                    customAdditionalControls={[]}
                    customVolumeControls={[]}
                    layout="horizontal-reverse"
                    className="numba-1"
                />
            </div>
            <div className="left-96 top-52 absolute pt-.5 w-96 h-20">
                <AudioPlayer 
                    src='https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3'
                    customProgressBarSection={
                        [
                        RHAP_UI.CURRENT_TIME,
                        RHAP_UI.PROGRESS_BAR,
                        RHAP_UI.CURRENT_LEFT_TIME,
                        ]
                    }
                    showJumpControls={false}
                    customAdditionalControls={[]}
                    customVolumeControls={[]}
                    layout="horizontal-reverse"
                    className="numba-2"
                />
            </div>
            <div className="left-96 top-72 absolute pt-2 w-96 h-20">
                <AudioPlayer  
                    src='https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3' 
                    customProgressBarSection={
                        [
                        RHAP_UI.CURRENT_TIME,
                        RHAP_UI.PROGRESS_BAR,
                        RHAP_UI.CURRENT_LEFT_TIME,
                        ]
                    }
                    showJumpControls={false}
                    customAdditionalControls={[]}
                    customVolumeControls={[]}
                    layout="horizontal-reverse"
                    className="numba-3"
                />
            </div>
        </div>
    )
}

export default Song