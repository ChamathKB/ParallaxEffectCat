import { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import moon from './22332346.jpg';
import land from './w2.png';
import cat from './cat.gif';


import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  // const [count, setCount] = useState(0)
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>

        <ParallaxLayer 
          offset={0} 
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgrounSize: 'cover'
          }}>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2} 
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgrounSize: 'cover'
          }}>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
          >
           <img src={cat} /> 
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
          >
            <h2>Welcome to my website</h2> 
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2> Hi! </h2>
        </ParallaxLayer>
      </Parallax>

    </div>
    
  )
}

export default App
