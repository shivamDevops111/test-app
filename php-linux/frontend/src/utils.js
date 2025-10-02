import { customAlphabet } from "nanoid";
export const DB_URL = "http://10.246.138.216:8888/api"

export const joinedUsers = [
    {
        id: 1,
        name: "Shivam",
        email: "shivam@example.com",
        profileImage: "/public/logo.png",
        isVideoOn: true,
        isAudioOn: false,
        isSpeaking: true
    },
    {
        id: 2,
        name: "Mishty",
        email: "mishty@example.com",
        profileImage: "/public/s1.png",
        isVideoOn: false,
        isAudioOn: true,
        isSpeaking: false
    },
    {
        id: 3,
        name: "Muskan",
        email: "muskan@example.com",
        profileImage: "/public/f1.png",
        isVideoOn: true,
        isAudioOn: true,
        isSpeaking: true
    },
    {
        id: 4,
        name: "Jasnoorpal singh",
        email: "jasnoor@example.com",
        profileImage: "/public/s3.png",
        isVideoOn: false,
        isAudioOn: false,
        isSpeaking: false
    },
    {
        id: 5,
        name: "Dheeraj",
        email: "dheeraj@example.com",
        profileImage: "/public/f3.png",
        isVideoOn: false,
        isAudioOn: false,
        isSpeaking: false
    }
];


export const createRoomID = () => {
    const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 12);
    return nanoid()

}