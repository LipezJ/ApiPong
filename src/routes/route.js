import { Router } from 'express';
import { readFile, writeFile } from 'fs/promises';

const router = Router();

const filesrc = './src/partys/party.json'
let file = await readFile(filesrc, 'utf-8')
let json = JSON.parse(file)

router.post('/create/:key', async (req, res) => {
      
    if (req.params.key.length >= 5 && !(Object.keys(json).indexOf(req.params.key) != -1)){
        json[req.params.key] = [0,[0,0],0,[0,0]]
        await writeFile(filesrc, JSON.stringify(json), (err) => console.log(err))
        res.send("")
    }else {
        res.send("")
    }
      
})
router.get('/get/:key', async (req, res) => {
      
    if (req.params.key.length >= 5 && Object.keys(json).indexOf(req.params.key) != -1){
        res.send(json[req.params.key])
    } else {
        res.send("error")
    }
      
})
router.post('/del/:key', async (req, res) => {
      
    if (req.params.key.length >= 5 && Object.keys(json).indexOf(req.params.key) != -1){
        delete json[req.params.key]
        await writeFile(filesrc, JSON.stringify(json), (err) => console.log(err))
        res.send("")
    } else {
        res.send("")
    }
      
})
router.post('/set/:key/:p_raq/:p_tablero', async (req, res) => {
      
    if (req.params.key.length >= 5 && Object.keys(json).indexOf(req.params.key) != -1){
        res.send(json[req.params.key])
        res.send("")
    }else {
        res.send("")
    }
      
})
router.post('/setht/:key/:p_tablero', async (req, res) => {
      
    if (req.params.key.length >= 5 && Object.keys(json).indexOf(req.params.key) != -1){
        json[req.params.key][1] = req.params.p_tablero.split(',').map((a) =>{return parseInt(a)})
        await writeFile(filesrc, JSON.stringify(json), (err) => console.log(err))
        res.send("")
    }else {
        res.send("")
    }
      
})
router.post('/sethr/:key/:p_raq', async (req, res) => {
      
    if (req.params.key.length >= 5 && Object.keys(json).indexOf(req.params.key) != -1){
        json[req.params.key][0] = parseInt(req.params.p_raq)
        await writeFile(filesrc, JSON.stringify(json), (err) => console.log(err))
        res.send("")
    }else {
        res.send("")
    }
      
})
router.post('/setg/:key/:p_raq', async (req, res) => {
      
    if (req.params.key.length >= 5 && Object.keys(json).indexOf(req.params.key) != -1){
        json[req.params.key][2] = parseInt(req.params.p_raq)
        await writeFile(filesrc, JSON.stringify(json), (err) => console.log(err))
        res.send("")
    } else {
        res.send("")
    }
      
})
router.post('/setpts/:key/:pts', async (req, res) => {
    if (req.params.key.length >= 5 && Object.keys(json).indexOf(req.params.key) != -1){
        json[req.params.key][3] = req.params.pts.split(',').map((a) =>{return parseInt(a)})
        await writeFile(filesrc, JSON.stringify(json), (err) => console.log(err))
        res.send("")
    } else {
        res.send("")
    }  
})

export default router