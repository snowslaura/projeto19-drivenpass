import prisma from "../config/database.js"

export async function createWifi({userId,title, networkName, password}){
    return prisma.wifi.create({
        data:{
            userId,
            title,
            networkName,
            password
        }
    })
}

export async function verifyWifiByUserIdAndTitle(userId:number, title:string){
    return prisma.wifi.findFirst({
        where:{
            userId,
            title
        }
    })
}

export async function fetchWifis(userId:number){
    return prisma.wifi.findMany({
        where:{
            userId
        }
    })
}

export async function fetchOneWifi(userId:number,id:number){
    return prisma.wifi.findMany({
        where:{
            userId,
            id
        }
    })
}

export async function verifyWifiByUserIdAndId(userId:number, id:number){
    return prisma.wifi.findFirst({
        where:{
            userId,
            id
        }
    })
}

export async function deleteWifi(id:number){
    return prisma.wifi.delete({
        where:{
            id
        }
    })
}