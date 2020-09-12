import React, { useEffect, useState } from 'react';
import './App.css';
// import Test from './Test';
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Redirect,
  withRouter,
  useParams,
  Switch,
  useLocation,
} from 'react-router-dom';

const DogImage = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dogsImage, setDogsImage] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch('https://dog.ceo/api/breed/hound/images');
        const dogsImage = await response.json();

        setDogsImage(dogsImage.message);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      {dogsImage ? (
        <div>
          {Object.keys(dogsImage).map((dogImage) => (
            <img width="50px" height="40px" src={dogImage}></img>
          ))}
        </div>
      ) : null}
    </div>
  );
};

function App() {
  const [dogs, setDogs] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [randomDogs, setRandomDogs] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const dogs = await response.json();

        setDogs(dogs.message);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return '...It takes a few seconds...';
  }

  if (error) {
    return 'Something go wrong. Again :(';
  }

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/breeds">Breeds</Link>
          </li>
          <li>
            <Link to="/random">Random Image of the dog</Link>
          </li>
          <li>
            <Link to="/dogImg">Img</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/breeds">
          <div>
            {dogs ? (
              <ul>
                {Object.keys(dogs).map((dog) => (
                  <li key={dog}>
                    <Link to={`/breeds/${dog}`}>{dog}</Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Route>
        <Route path="/random">
          <button
            onClick={async () => {
              const response = await fetch('https://dog.ceo/api/breeds/image/random');
              const dogsImage = await response.json();

              setRandomDogs(dogsImage.message);
            }}>
            Find new dog image
          </button>
          <img src={randomDogs} width="500px" height="400px"></img>
        </Route>
        <Route path="dogImg">
          <DogImage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
