import './App.css';
import Home from './components/home/Home';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

function App() {
  return (
    <div className="App bg-gradient-to-r from-pinkish-100 to-cyan-500 h-screen w-screen cursor-none sm:bg-album md:bg-album">
        <CustomCursor
          targets={['.link', '.your-css-selector']}
          customClass='custom-cursor'
          dimensions={25}
          fill='black'
          smoothness={{
            movement: 0.8,
            scale: 1,
            opacity: 0.6,
          }}
          targetOpacity={0.5}
        />
        <Home />

    </div>
  );
}

export default App;
