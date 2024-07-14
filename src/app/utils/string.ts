
export const getStringSide = (side:string,input:string) => {
        const match = side ==="left" ? input?.match(/(.*)-to-/) : input?.match(/to-(.*)/) ;
        return match ? match[1] : '';
 }

 export const sliceStringLength = (value:string,max:number) => {
        if(value.length > 42){
              let newString = `${value.slice(0,max) } ... ${value.slice(-10) }`
               return newString
        }

        return value


 }
