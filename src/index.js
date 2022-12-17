import express from "express";
import { Server } from "socket.io";
import http from "http"
import { create, delete_, get, setg, seth } from './functions.js'

const app = express()
const server = http.createServer(app)
const socket = new Server(server)

socket.on('connection', (socket) => {
    socket.on('create', create)
    socket.on('delete', delete_)
    socket.on('seth', seth)
    socket.on('setg', setg)
    socket.on('get', (data) => get(data, socket))
})

server.listen(3000)
console.log('port: ', 3000)