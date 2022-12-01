import { Button, ButtonGroup, Fab, FormGroup } from "@mui/material";
import  Save  from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Checkbox from "@mui/material/Checkbox";
import  FavoriteBorder  from "@mui/icons-material/FavoriteBorder";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Rating from "@mui/material/Rating";

function App() {
  return (
    <>
      <Button color="info" variant="contained" href="https://www.google.com" startIcon={<Save/>}  >Click Here</Button>
      <IconButton>
        <Save />
      </IconButton>

      <h3>Custom Button</h3>
      <Button onClick={() => alert("hello") } variant="contained" style={{backgroundColor:"green"}}>Custom Button</Button>

      <h2>Vertical Button</h2>
      <ButtonGroup variant="contained" orientation="vertical">
          <Button>Button One</Button>
          <Button>Button Two</Button>
          <Button>Button Three</Button>
      </ButtonGroup>

      <h2>Floating Action Button</h2>
      <Fab color="warning"><AddIcon /></Fab>
      <Fab color="warning"><EditIcon/></Fab>
      <Fab color="warning"><FavoriteIcon/></Fab>
      <Fab variant="extended" color="warning">Ahmedabad <NavigationIcon/></Fab>

      <h2>Checkbox</h2>
      <Checkbox  />
      <Checkbox checked />
      <Checkbox checked={true} />
      <Checkbox icon={<FavoriteBorder/>}  checkedIcon={<FavoriteIcon />}/>

      <Checkbox onChange={() => alert("Checked")} />
      <FormControlLabel 
        control={<Checkbox/>} label="India"
      />

      <h3>Radio Button</h3>
      <RadioGroup row ><h2>Gender: </h2>
        <FormControlLabel control={<Radio/>} value="male" label="Male" name="male-female"/>
        <FormControlLabel control={<Radio/>} value="female"  label="FeMale" name="male-female" />
      </RadioGroup>

      <h2>Rating</h2>


      
    </>
  );
}

export default App;
