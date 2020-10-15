const express = require('express');
require('colors');

const app = express();

app.get('/', (req, res) => {
	res.status(200).json({ success: true, msg: 'API up and runnin on docker?' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`.green.bold);
});
