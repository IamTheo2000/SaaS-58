const app = require("./index");

const port = Number(5500);

app.listen(port, () => {
    console.log('Accounts Service running on port ${port}!');
});
