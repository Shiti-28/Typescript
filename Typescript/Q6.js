var Check = /** @class */ (function () {
    function Check(str) {
        this.str = str;
    }
    Check.prototype.Findchar = function (str) {
        str = str.toUpperCase();
        // let vCount=0;
        var Count = 0;
        for (var i = 0; i <= str.length; i++) {
            if (str.charAt(0) == 'A' || str.charAt(0) == 'E' || str.charAt(0) == 'I' || str.charAt(0) == 'O' || str.charAt(0) == 'U') {
                if (str.charAt(i) != 'A' || str.charAt(i) != 'E' || str.charAt(i) != 'I' || str.charAt(i) != 'O' || str.charAt(i) != 'U') {
                    Count++;
                }
            }
            else {
                if (str.charAt(i) == 'A' || str.charAt(i) == 'E' || str.charAt(i) == 'I' || str.charAt(i) == 'O' || str.charAt(i) == 'U') {
                    Count++;
                }
            }
        }
        // console.log(vCount);
        console.log(Count);
    };
    return Check;
}());
var chk = new Check('Suyash');
chk.Findchar('Suyash');
