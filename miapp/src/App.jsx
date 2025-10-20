import './App.css'
import RecordCard from './components/RecordCard';
import RecordForm from './components/RecordForm';
import { cat, dog, bird, turtle } from './assets/index.js';

function App() {
  const animals = [
    {
      id: 0,
      animal: 'Gato',
      attribute: 'Feroz',
      imageUrl: cat,
      imageSize: 150,
      description: 'Grrrrrr',
    },
    {
      id: 1,
      animal: 'Perro',
      attribute: 'Bello',
      imageUrl: dog,
      imageSize: 150,
      description: 'Perro callejero',
    },
    {
      id: 2,
      animal: 'Loro',
      attribute: 'Hablador',
      imageUrl: bird,
      imageSize: 150,
      description: 'Loro de la jungla',
    },
    {
      id: 3,
      animal: 'Tortuga',
      attribute: 'Perezosa',
      imageUrl: turtle,
      imageSize: 150,
      description: 'Tortuga',
    },
  ];

  return (
    <>
        {animals.map( animal => 
        <RecordCard 
          animal={animal.animal}
          attribute={animal.attribute}
          imageUrl={animal.imageUrl}
          imageSize={animal.imageSize}
          description={animal.description}
        />
      )}
      {/*<RecordForm />*/}
    </>
  );
}

export default App
