import express from 'express';

const app = express();

const main = async () => {
    app.use((req, res) => {
        res.status(200).json({ msg: 'Success' });
    })

    app.listen(8080, () => {
        console.log('Now running on port 8080');
    });
};

main();