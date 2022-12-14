var item = /** @class */ (function () {
    function item(itemid, itemname, itemprice, category) {
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.category = category;
    }
    return item;
}());
var itm = new item(10, 'kitkat', 20, 'chocolate');
console.log(itm);
