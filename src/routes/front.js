import path from 'path';
import { fileURLToPath } from 'url';
import { Router } from 'express'

const router = Router()
const __dirname = path.dirname(fileURLToPath(import.meta.url));

router.get('/pruebas', (req, res) => {   
    res.sendFile(path.join(__dirname,'../views/pruebas/index.html'));
});

router.get('/pruebas/play/:idRifa', (req, res) => {   
    res.sendFile(path.join(__dirname,'../views/pruebas/compras.html'));
});
export default router

