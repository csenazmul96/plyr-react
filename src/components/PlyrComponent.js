'use client';

import  {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import dynamic from 'next/dynamic';

const Plyr = dynamic(() => import('plyr-react'), {
    ssr: false,
});


const TimerComponent = forwardRef(function TimerComponent({ }, ref) {
    const [time, setTime] = useState(0);
    useImperativeHandle(ref, () => {
        return {
            setNewTime(sec) {
                const minutes = Math.floor(sec / 60);
                const seconds = Math.floor(sec % 60);
                const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                setTime(formatted);
            },
        };
    }, []);

    return (
        <h1 ref={ref}>{time}</h1>
    );
});


export default function PlyrComponent() {

    const playerRef = useRef(null);
    const timerRef = useRef(null);
    useEffect(() => {
        if (playerRef.current?.plyr) {
            setTimeout(() => {
            const plyrInstance = playerRef.current.plyr;
                plyrInstance.on('timeupdate', (e)=>{
                    timerRef.current.setNewTime(plyrInstance.currentTime)
                })

            }, 50)
        }
    }, []);

    const videoSource = {
        type: "video",
        sources: [
            {
                src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
                type: "video/mp4",
            }
        ],
        tracks: [
            {
                kind: 'subtitles',
                label: 'English',
                srcLang: 'en',
                src: '/WebVTT.vtt',
                default: true
            }
        ],
    };

    return (
        <div className="relative player-wrapper">
            <TimerComponent ref={timerRef} />
            <Plyr
                ref={playerRef}
                source={videoSource}
                crossOrigin="anonymous"
                options={{
                    controls: [
                        'play-large',
                        'play',
                        'progress',
                        'mute',
                        'volume',
                        'captions',
                        'settings',
                        'fullscreen',
                    ]
                }}
            />
        </div>
    )
}


