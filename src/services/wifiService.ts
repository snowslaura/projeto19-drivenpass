import { wifi } from "@prisma/client"
import Cryptr from "cryptr"
import * as wifiRepository from "../repositories/wifiRepository.js"

export type CreateWifiData = Omit<wifi, "id" | "createdAt">


export async function createWifi({userId,title, networkName, password}:CreateWifiData){
    //await verifyWifiByUserIdAndTitle(userId, title)
    password = await encryptedPassword(password)
    wifiRepository.createWifi({userId,title, networkName, password})
}

async function encryptedPassword(password:string){
    const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
    return cryptr.encrypt(password);
}

// async function verifyWifiByUserIdAndTitle(userId:number, title: string){
//     const note = await wifiRepository.verifyWifiByUserIdAndTitle(userId, title)
//     if(note)throw{
//         type:"conflict",
//         message:"Titulo já existente"
//     }
// }

export async function fetchWifis(userId: number){
    const wifis = await wifiRepository.fetchWifis(userId)
    return wifis
}

export async function fetchOneWifi(userId:number,id:number){
    const wifi = await wifiRepository.fetchOneWifi(userId,id)
    if(wifi.length===0)throw{
        type:"unprocessable_entity",
        message:"Wifi inexistente"
    }
    return wifi
}

export async function deleteWifi(userId:number,id:number){
    await verifyWifiByUserIdAndId(userId,id)
    await wifiRepository.deleteWifi(id)
}

async function verifyWifiByUserIdAndId(userId:number,id:number){
    const note = await wifiRepository.verifyWifiByUserIdAndId(userId, id)
    if(!note)throw{
        type:"unauthorized",
        message:"Não autorizado"
    }
}