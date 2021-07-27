import React from 'react';
import './posts.css';
import { FaRegComment} from 'react-icons/fa';
import { BiRepost, BiBadgeCheck} from 'react-icons/bi';
import { IoShareOutline} from 'react-icons/io5';
import { FcLike} from 'react-icons/fc';

const Post = (props) => {

    return (
    
        <div className="post">
            <header className="header">
                <div className="header__icon">
                    <img src={props.icon} alt={props.iconAlt}/>
                </div>
                <div className="header__content">
                    <div>
                        <span className="header__content__name">{props.name}</span>
                        <span className="header__content__badge"><BiBadgeCheck /></span>
                        <span className="header__content__nick-date">{props.nickname} &#183; {props.date}</span>
                        <div className="header__content__open"> &#8249; </div>
                    </div>
                    <p className="header__content__text">{props.content}</p>
                </div>
            </header>

            <main className="main">
                <div className="main__img">
                    <img src={props.image} alt={props.imageAlt}/>
                </div>
            </main>

            <footer className="footer">
                <div className="footer__icons">
                    <div className="footer__icons__icon">
                        <FaRegComment />
                        <span className="footer__icons__text">482</span>
                    </div>
                    <div className="footer__icons__icon">
                        <BiRepost />
                        <span className="footer__icons__text">146</span>
                    </div>
                    <div className="footer__icons__icon">
                        <FcLike />
                        <span className="footer__icons__text">887</span>
                    </div>
                    <div className="footer__icons__icon">
                        <IoShareOutline />
                    </div>
                </div>
            </footer>
        </div>
        
    )
}

export default Post;

