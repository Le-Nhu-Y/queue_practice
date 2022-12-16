export class Queue<T>{
    storage:T[]=[];
    constructor() {
    }
    enqueue(data:T):void{
        this.storage.push(data)
    }
    dequeue():T|undefined{
        return this.storage.shift()
    }
    size():number{
        return this.storage.length
    }
}