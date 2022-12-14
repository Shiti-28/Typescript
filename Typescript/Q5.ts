interface shape{
   shapename:string;
}
class cone implements shape{
    shapename:string;
    radius:number;
    slantheight:number;
    constructor(shapename:string,radius:number,slantheight:number){
        this.shapename=shapename;
        this.radius=radius;
        this.slantheight=slantheight;
        console.log((3.14*this.radius*this.slantheight)+(3.14*this.radius*this.radius));
    }
    // areaofcone(radius,slantheight){
    //     return ((3.14*this.radius*this.slantheight)+(3.14*this.radius*this.radius));
    // }

}

class sphere implements shape{
    shapename:string;
    radius:number;
    constructor(shapename:string,radius:number){
        this.shapename=shapename;
        this.radius=radius;
        console.log(4*3.14*this.radius*this.radius);
    }
    // areaofcsphere(radius){
    //     return (4*3.14*this.radius*this.radius);
    // }
}

class rectangle implements shape{
    shapename: string;
    width:number;
    length:number;
    constructor(shapename:string,width:number,length:number){
        this.shapename=shapename;
        this.width=width;
        this.length=length;
        console.log(this.length*this.width);
    }
    // areaofrectangle(width,length){
    //     return (this.length*this.width);
    // }
}

let cn=new cone('cone',2,2);
//console.log(cn.areaofcone(2,2));

let sphr=new sphere('Sphere',2);
//console.log(sphr.areaofcsphere(2));

let rect=new rectangle('rectangle',2,5);
//console.log(rect.areaofrectangle(2,5));