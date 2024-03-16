const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=stirfry&type=track',{

headers:{
   'authorization': 'Bearer BQCFeSX_b4B0PrGKrgKvFCZzzwHNC5egzEzRy3AGIvVEebtAPXGTzNZc3HHbeXoiIkRhoPYQjwZ8JqTcYsyg3zkvXRr5-YUbfMYDeU-mrlSPA4LWyVPWUHegS_gjZcnFS9DRgflMnokdasYHGZsZWV-BGS5oDh4aPyqaWiz2K7uugd0BzcVR73_9QrsdcXQMSZnzaJ2kEjAgzFNGdB4'
}
})
.then((data)=>{
    console.log(data.data.tracks.items[0].id);
})