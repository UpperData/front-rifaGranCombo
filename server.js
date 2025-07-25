import express from 'express';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import morgan from 'morgan';

const app = express();
app.use(express.json());
axios.defaults.baseURL =process.env.API_GC;	
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, '/src/public/'))); // Middleware para parsear JSON

import pruebas from './src/routes/front.js';
app.use(morgan('dev'));

app.use( pruebas); // agrega rutas de pruebas

app.get('/design', (req, res) => { // home design
    res.sendFile(path.join(__dirname, 'src/views/design', 'index.html'));
});

// :::: Rutas del backend
    // Datos de una rifa
app.get('/api/rifa/:idPro', async (req, res) => {
    const { idPro } = req.params; 
    try {
        await axios.post('/buscarTodo', {idPro}).then(response => {
            return res.status(200).json(response.data);     })
    } catch (error) {
        console.error('Error en la ruta /api/rifa/:idLot:', error);
        res.status(500).send('Error interno del servidor');}
}); 
    // Datos generales
app.get('/api/general', async (req, res) => {
    try {                
        await axios.get('/rifaHome',{
            headers:{
                'Access-Control-Allow-Origin':'*'
            }

        }).then(response => {                
                return res.status(200).json(response.data);})
        }catch (error) {
            console.error('Error en la ruta /api/general:', error);
            res.status(500).send('Error interno del servidor');
        }
})
app.post('/api/avaliable', async (req, res) => {    
    
    try {
        await axios.post('/buscarExp', req.body, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }	
        }).then(response => {
            return res.status(200).json(response.data);
        })
    } catch (error) {
        console.error('Error en la ruta /api/available:', error);
        res.status(500).send('Error interno del servidor');
    } 
});


app.post('/api/sendMail', async (req, res) => {        
    const { NomCon, ApeCon, TelCon,MenCon,CorCon } = req.body;
    if(NomCon === '' || ApeCon === '' || CorCon === '' || TelCon === '' || MenCon === '') {
        return res.status(400).send('Todos los campos son obligatorios');
    }
    
    const data = {
        NomCon,
        ApeCon,
        CorCon,
        TelCon,
        MenCon        
    };    
     try {
        await axios.post('https://api.grancombo.com/conAdd/', data, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }	
        }).then(response => {
            res.status(200).send('Mensaje enviado correctamente');
            //return res.status(200).json(response.data);
            
        })
    } catch (error) {
        console.error('Error en la ruta /api/available:', error);
        //res.status(500).send('Error interno del servidor');
    }  
});




app.listen(process.env.PORT, () => {
    console.log( `Gran Combo server is working in port ${process.env.PORT}`);
});
