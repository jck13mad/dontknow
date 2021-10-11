import React from 'react';
import singles from '../../data';
import './Home.scss';
import Scroll from '../scroll/Scroll';
import Picture from '../picture/Picture';
import Song from '../song/Song';


function Home() {
    return (
        <div className="justify-center content-center cursor-none overflow-hidden h-full">
            <div className="justify-center absolute content-center top-20 left-20 w-40 h-20 title">
                <img className="justify-center content-center w-96" 
                    src="https://see.fontimg.com/api/renderfont4/oYDV/eyJyIjoiZnMiLCJoIjoyNDYsInciOjIwMDAsImZzIjoxMjMsImZnYyI6IiM1NjRFOTgiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/RG9uJ3QgS25vdw/reza-zulmi-sans.png" 
                    alt="Metal fonts" />
            </div>
            <div className="static top-80 left-20 relative w-20 h-20">
                <h2 className="static w-20 h-20 font-mono"><b>Singles</b></h2>
                <div className="top-96 left-80">
                    {singles.map((s) => (
                        <div className="block w-80 h-20 font-mono text-left static">
                            <h3 className=""><b>{s.number}</b>    {s.name}       {s.time}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="links">
                    <a href="https://open.spotify.com/album/7mqcItrwEn9rrDZS6x3x0X?si=9SMLBXEeQiWH3fFKItXCFQ&dl_branch=1">
                        <img src="../../spotify.png" alt="spotify" className="spotify hover:scale-125"/>
                    </a>
                    <a href="https://music.apple.com/us/album/dont-know-single/1586423160">
                        <img src="../../apple.png" alt="apple music" className="apple hover:scale-125"/>
                    </a>
                    <a href="https://twitter.com/samisyoungish?lang=en">
                        <img src="../../twitter.png" alt="twitter" className="twitter hover:scale-125"/>
                    </a>
                    <a href="/">
                        <img src="../../instagram.png" alt="instagram" className="insta hover:scale-125"/>
                    </a>
            </div>
            <Song />
            <Picture />
            <Scroll />
        </div>
    )
}

export default Home;