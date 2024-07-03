type Support = {
    id:number,
    name:string
}

export type CardItemProps = {
    id:number,
    name:string,
    title:string,
    price:number,
    credits?:number,
    supported:Support[]
}