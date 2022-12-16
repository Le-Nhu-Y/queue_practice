import {Queue} from "./Queue";
let queue=new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(9);
console.log(queue.size());