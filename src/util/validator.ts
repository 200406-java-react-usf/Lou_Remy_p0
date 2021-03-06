const isValidId = (id: number): boolean =>{
    return(id && typeof id === 'number' &&Number.isInteger(id))
}
 const isValidStings = (...strs: string[]): boolean => {
     for(let str of strs) {
         if (!str || str !== 'string'){
             return false;
         }
     }
 
     return true;
     
}

export function isValidObject <T> (obj: Object, ...nullableProps: string[]){

    return obj && Object.keys(obj).every(key => {
        if (nullableProps.includes(key)) return true;
        return obj[key];
    })

}

export function isEmptyObject <T> (obj: T ){
    return obj && Object.keys(obj).length === 0 
}



export default {
    isValidId,
    isValidStings,
    isValidObject
    
}

