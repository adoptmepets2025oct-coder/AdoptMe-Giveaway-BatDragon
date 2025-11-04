const express = require('express');
const app = express();
const url = require('url');

app.get('/', (req, res) => {
    const query = url.parse(req.url, true).query;
    const targetUrl = query.url;
    res.redirect(targetUrl);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
