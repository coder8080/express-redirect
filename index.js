const express = require('express');
const app = express();

const PORT = 3000;

// Обработчик маршрута /redirect
app.get('/redirect', (req, res) => {
    const { link } = req.query;

    if (!link) {
        return res.status(400).send('Missing "link" query parameter');
    }

    res.redirect(link);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
