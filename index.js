const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

let users = [];
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html')
})

app.post("/users", (req, res) => {
    const { id, username, email,password } = req.body;
    if (users.find(user => user.id === id)) {
        return res.status(400).json({ message: 'User already exists' });
    }
    users.push({ id, username, email,password });
    res.status(201).json({ message: 'User registered', users });

});
/*app.get("/users",(req,res)=>{
    res.status(201).json({ message: 'User data', users });

})*/
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, email,password } = req.body;

    const user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    user.username = username || user.username;
    user.email = email || user.email;
    user.password = password || user.password;

    res.json({ message: 'User updated', user });
});


app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    users.splice(index, 1);
    res.json({ message: 'User deleted', users });
});
app.listen(port, () => { console.log("listening port is" + port) });