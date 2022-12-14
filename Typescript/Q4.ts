class item{
    itemid:number;
    itemname:string;
    itemprice:number;
    category:string;
    constructor(itemid:number,itemname:string,itemprice:number,category:string) {
        this.itemid=itemid;
        this.itemname=itemname;
        this.itemprice=itemprice;
        this.category=category;        
    }

}

let itm=new item(10,'kitkat',20,'chocolate');
console.log(itm);