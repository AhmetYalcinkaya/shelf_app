import { Client, Account, Avatars, Databases } from "react-native-appwrite"

export const client = new Client()

client
 .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68243c0d0007bd90c1aa')
    .setPlatform('dev.ahmet.selfie');

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)
