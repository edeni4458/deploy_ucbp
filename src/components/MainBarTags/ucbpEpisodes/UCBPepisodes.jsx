import React from 'react'
import { Container } from 'react-bootstrap'

import './ucbpEpisodes.css'

const UCBPepisodes = () => {


    return (
        <div className='main-episode-container'>
            <div className="ucbp-container">
                <h2>Most recent episodes</h2>
                <hr />
                <div className="embeded-container1">
                    <Container>
                        <iframe title="Episode 70" src="https://open.spotify.com/embed/episode/5n3MTA3UWClN5QeWlfXfC1?utm_source=generator" width="85%" height="152" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </Container>
                    <Container>
                        <iframe title="Episode 69" src="https://open.spotify.com/embed/episode/6gZBDUQVrw3PJ37rwcoeDz?utm_source=generator&theme=0" width="85%" height="152" allowFullScreen="allow" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </Container>
                </div>
                <div className="embeded-container2">
                    <Container>
                        <iframe title="Episode 68" src="https://open.spotify.com/embed/episode/4UhoPvZOAVQs3Wr08al1t1?utm_source=generator" width="85%" height="152" allowFullScreen="allow" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </Container>
                    <Container>
                        <iframe title="Episode 67" src="https://open.spotify.com/embed/episode/3doNZgQmChRyEtCALzVwkN?utm_source=generator&theme=0" width="85%" height="152"  allowfullscreen="allow" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </Container>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default UCBPepisodes