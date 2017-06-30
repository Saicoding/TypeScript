/**
 * Created by 417353147@qq.com on 2017/6/29.
 */
 export class Student{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    eat(word: string):void{
        console.log(`我在吃${word}`);
    }
}
