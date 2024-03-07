import instagram from '../../../images/instagram.png'
import facebook from '../../../images/fb-icon.png'
import twitter from '../../../images/twitter.png'
import { Link } from 'react-router-dom';
import React from 'react'

import '../botBar/botBar.css'

const BotBar = () => {
    return (
        <div>
            <div className="bottom-bar">
                <nav class="">
                    <div class="">
                        <div class="bottom-bar_nav">
                            <div class="bottom-nav">
                                <p><Link reloadDocument className='nav-link_bottom' to={"/deploy_ucbp"}>Home</Link></p>
                                <p><Link reloadDocument to={"/about"} className='nav-link_bottom'>About</Link></p>
                                <p><Link reloadDocument to={"/UCBP"} className='nav-link_bottom'>Episodes</Link></p>
                            </div>
                        </div>
                    </div>
                </nav>
                <hr />
                <div className="social-mediaB">
                    <a href="https://twitter.com/UCBPodcast" target='_blank' rel="noreferrer">
                        <img className='bot-social-logo' src={twitter} alt='Facebook Logo' />
                    </a>
                    <a href="https://www.facebook.com/groups/UnderTheCardBoardBox/?fref=nf" target='_blank' rel="noreferrer">
                        <img className='bot-social-logo' src={facebook} alt='Facebook Logo' />
                    </a>
                    <a href="https://www.instagram.com/ucbpodcast/" target='_blank' rel="noreferrer">
                        <img className='bot-social-logo' src={instagram} alt='Instagram Logo' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BotBar