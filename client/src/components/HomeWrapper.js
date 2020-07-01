import React from 'react';
import Jumbo from "../components/Jumbo";
import Actus from "../components/Actus/Actus";
import Videos from "../components/Videos";
import Photos from "../components/Photos/Photos";
import Shows from "../components/Shows";
import Lyrics from "../components/Lyrics/Lyrics";
import Bio from "../components/Bio";
import Contact from "../components/Contact/Contact";

function HomeWrapper() {
    return (
        <div>
            <Jumbo />
            <Actus />
            <Shows />
            <Videos />
            <Lyrics />
            <Photos />
            <Bio />
            <Contact />
        </div>
    );
}

export default HomeWrapper;