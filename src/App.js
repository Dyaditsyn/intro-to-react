import React from 'react';
import Post from './components/posts';

const ANAKIN_ICON = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const FB_ICON = "https://upload.wikimedia.org/wikipedia/commons/f/fb/Facebook_icon_2013.svg";
const FB_IMAGE = "https://static01.nyt.com/images/2021/07/12/business/11facebookcreators/11facebookcreators-superJumbo.jpg?quality=90&auto=webp";

const TWITTER_ICON = "https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg";
const TWITTER_IMAGE = "https://www.tadviser.ru/images/thumb/0/0f/Twitter_HQ.jpg/840px-Twitter_HQ.jpg";


const postList = [
  {
    id: 0,
    name: "Anakin skywalker",
    icon: ANAKIN_ICON,
    nickname: "@dart_vader",
    iconAlt: "Anakin skywalker icon",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "26 февр.",
    imageAlt: "Ray with ligth sward image"
  },
  {
    id: 1,
    name: "Facebook",
    icon: FB_ICON,
    nickname: "@facebook",
    iconAlt: "facebook icon",
    content: "Hurray! Facebook now connected too!!!",
    image: FB_IMAGE,
    date: "26 июнь",
    imageAlt: "facebook image"
  },
  {
    id: 2,
    name: "Twitter",
    icon: TWITTER_ICON,
    nickname: "@twitter",
    iconAlt: "twitter icon",
    content: "Greetings from twitter !!!",
    image: TWITTER_IMAGE,
    date: "27 июль",
    imageAlt: "twwiter image"
  },

]

function App() {
  return (
    <div>
      { postList.map( post => <Post {...post} key = {post.id}/>) }
    </div>

  );
}

export default App;
