export interface CrudRepo<T> {
    getall():Promise<T[]>
    //getById(id: number): Promise<T>
    //update(updatedPbj: T): Promise<boolean>
    //save(newObj: T): Promise<T>
    //deleteById(id: number): Promise<boolean>
}