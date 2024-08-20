const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();

// Set up Multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/image', (req, res) => {
    res.status(200).send(`
        <input type="file" />    
    `);
});

app.post('/image/extraction/text', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No image uploaded.');
    }

    // await new Promise(res => setTimeout(res, 500));

    const imagePath = path.join(__dirname, 'compressed_6b9f1876-cbb6-4faa-9e72-3f4f2ec6303e.png');
    const imageDataURL = await new Promise((res, rej) => {
        fs.readFile(imagePath, (err, imageBuffer) => {
            if (err) {
                console.error('Error reading the image:', err);
                return;
            }

            const base64Image = imageBuffer.toString('base64');
            const dataURL = `data:image/heic;base64,${base64Image}`;
        
            res(dataURL);
        });
    });

    // const imageBuffer = req.file.buffer;

    

    res.status(200).send({
        image: {
            dataURL: imageDataURL,
            type: 'image/heic',
        },
        fields: {
            companyName: 'blablu',
            price: 10,
            items: [
                {
                    barcode: '3453442164364',
                    name: 'product product',
                    amount: 5,                    
                },
                {
                    barcode: '211378423535',
                    name: 'product 2',
                    amount: 5,                    
                }
            ],
        },
    });
});

app.listen(3034, () => {
    console.log('Server is running at http://localhost:3034');
});

/**
var file = document.getElementsByTagName('input')[0].files[0]
async function send({ image }) {
    const formData = new FormData();
    formData.append('image', image);

    const response = await fetch('http://localhost:3034/image/extraction/text', {
        method: 'POST',
        body: formData,
    });
} 
    send({ image: file })
 
 */