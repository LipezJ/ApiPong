import { readFile, writeFile } from 'fs/promises'

const filesrc = './src/partys/party.json'
let file = await readFile(filesrc, 'utf-8')
let json = JSON.parse(file)

export const create = async (data) => {
    if (!(data['name'] in Object.keys(json))) {
        console.log(data)
        json[data['name']] = [0,[0,0],0,[0,0]]
        await writeFile(filesrc, JSON.stringify(json))
    }
}
export const delete_ = async (data) => {
    if (data['name'] in Object.keys(json)) {
        delete json[data['name']]
    }
}
export const setg = async (data) => {
    json[data['name']][2] = data['pos']
    await writeFile(filesrc, JSON.stringify(json))
}
export const seth = async (data) => {
    json[data['name']][0] = data['posr']
    json[data['name']][1] = data['pos']
    json[data['name']][3] = data['points']
    await writeFile(filesrc, JSON.stringify(json))
}
export const get = async (data, socket) => {
    socket.emit('cget', json[data['name']])
}