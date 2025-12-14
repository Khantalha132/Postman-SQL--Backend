const express = require('express');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/students', studentRoutes);

app.get('/', (req, res) => res.send('Student API is up'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
