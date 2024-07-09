
export const getStringSide = (side:string,input:string) => {
        const match = side ==="left" ? input?.match(/(.*)-to-/) : input?.match(/to-(.*)/) ;
        return match ? match[1] : '';
 }
