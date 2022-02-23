import { Button } from '@mui/material';
import { useAppDispatch } from 'store';
import { setEmail } from 'store/features/userSlice';
import './App.css';

function App() {
  const dispatch = useAppDispatch();

  dispatch(setEmail('bla@test.de'));

  return (
    <div className="App">
      It works
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
