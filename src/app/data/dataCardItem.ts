import { CardItemProps } from "../types/CardItem";

export const cardItem:CardItemProps[] = [
    {
        id:1,
        name:'Starter',
        title:"A free option for personal users. Convert files free but has limited",
        price:0,
        supported:[
            {
                id:1,
                name:'Free for users'
            },
            {
                id:2,
                name:'Upload 50MB files in parallel'
            },
            {
                id:3,
                name:'Upload take much time'
            },
        ]
    },
    {
        id:2,
        name:'Pro',
        title:'Best option for personal use to convert files about 500MB in parallel',
        price:10,
        credits:1,
        supported:[
            {
                id:1,
                name:'No ads'
            },
            {
                id:2,
                name:'Upload 500MB files in parallel'
            },
            {
                id:3,
                name:'Upload 3x faster'
            },
        ]
    },
    
]