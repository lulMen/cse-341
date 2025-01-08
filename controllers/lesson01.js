const helloRoute = (req, res) => {
    res.send("Hello, Men!");
};

const secretRoute = (req, res) => {
    res.send("Psst, it's a secret!");
};

module.exports = {
    helloRoute,
    secretRoute
};