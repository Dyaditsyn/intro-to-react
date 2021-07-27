import React from 'react';
import Post from './components/posts';

const ANAKIN_ICON = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

function App() {
  return (
    <Post author={{
                name: "Anakin skywalker",
                icon: ANAKIN_ICON,
                nickname: "@dart_vader",
                iconAlt: "Anakin skywalker icon"
            }}
            content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image={RAY_IMAGE}
            date="26 февр."
            imageAlt="Ray with ligth sward image"
    />
  );
}

export default App;
