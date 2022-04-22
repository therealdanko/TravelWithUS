import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './NewTripForm.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button';

const ACCESS_KEY = `7e5f49dd5b022af0fced2ae06bcee965`
const states = [ '-','AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
const URL = `https://api-travel-backend-data.herokuapp.com/places/`


const formDefault = {
  title: "",
  description: "",
  image: "",
  address: "",
  city: "",
  state: "",
  geolocation: ['', '']
}

const NewTripForm = () => {
  const [tripInfo, setTripInfo] = useState(formDefault)


  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setTripInfo({...tripInfo, [name]: value})
  }

const handleSubmit = (e) => {
    e.preventDefault()
    getLatLong(tripInfo)
    
  }

  const navigate = useNavigate()
  const postToServer = (geo) => {
    console.log(geo)
    fetch(URL, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(geo)
          })
          .then(response => {
            response.json()
            navigate('/')
          })
  }

  const getLatLong = async (input) => {
    let res = await fetch(`http://api.positionstack.com/v1/forward?access_key=${ACCESS_KEY}&query=${input.address}, ${input.city} ${input.state}`)
    let response = await res.json()
    console.log(response)
    const geo = {...tripInfo, geolocation: [response.data[0].latitude, response.data[0].longitude]}
    postToServer(geo)
  }

  return (
    <div className="new-trip-form">
      <h2>Create a New Trip</h2>
    <form onSubmit={handleSubmit}>
      <Box className="new-trip-form-input"
          sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
      <TextField fullWidth margin="normal" label="Trip Name" id="fullWidth" name='title' onChange={handleChange} value={tripInfo.title} />
      </Box>
      <Box className="new-trip-form-input"
      sx={{
      width: 500,
      maxWidth: '100%',
        }}
      >
      <TextField fullWidth multiline margin="normal"  label="Description" id="fullWidth" name='description' onChange={handleChange} value={tripInfo.description}/>
      </Box>
      <Box className="new-trip-form-input"
      sx={{
      width: 500,
      maxWidth: '100%',
        }}
      >
      <TextField fullWidth label="Image URL" margin="normal"  id="fullWidth" name='image' onChange={handleChange} value={tripInfo.image}/>
      </Box>
      <Box className="new-trip-form-input"
      sx={{
      width: 500,
      maxWidth: '100%',
        }}
      >
      <TextField fullWidth multiline margin="normal"  label="Address" id="fullWidth" name='address' onChange={handleChange} value={tripInfo.address} />
      </Box>
      <div className="horizontal">
      <Box className="new-trip-form-input"
      sx={{
      width: 500,
      maxWidth: '75%',
        }}
      >
      <TextField fullWidth margin="normal"  label="City" id="fullWidth" name='city' onChange={handleChange} value={tripInfo.city} />
      </Box>
      <FormControl margin="normal" sx={{width: 100}}>
        <InputLabel  id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tripInfo.state}
          label="State"
          name='state'
          onChange={handleChange}
        >
          {states.map(state => <MenuItem key={state} value={state}>{state}</MenuItem>)}
        </Select>
      </FormControl>
      </div>
      <div className="submit-btn-container">
        <Button type='submit' className="submit-btn" variant="contained">Add Trip</Button>
      </div>
    </form>
        </div>
  )
}

export default NewTripForm