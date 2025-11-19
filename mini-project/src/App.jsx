


import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from "@mui/icons-material/Delete"
import Alert from '@mui/material/Alert';

function App() {
  let handleClick = () => {
    console.log("button was clicked")
  }

  return (
    <>
      <h1>Material UI Demo</h1>
      <Button variant="contained" onClick={handleClick} color='success' >Click Me</Button>
      <Button variant="outline" onClick={handleClick} disabled >Click Me!</Button>
      <Button variant="contained" onClick={handleClick} color='error' size='small'>Click Me!</Button>
      <br /><br />
      <Button variant="contained" startIcon={<DeleteIcon />}>Delete</Button>
      <Alert severity="error">Delete option is given!</Alert>

      
    </>
  )
}

export default App





