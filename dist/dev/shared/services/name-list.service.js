"use strict";
var NameListService = (function () {
    function NameListService() {
        this.names = [
            'Edsger Dijkstra',
            'Donald Knuth',
            'Alan Turing',
            'Grace Hopper'
        ];
    }
    NameListService.prototype.get = function () {
        return this.names;
    };
    NameListService.prototype.add = function (value) {
        this.names.push(value);
    };
    return NameListService;
}());
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9uYW1lLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtRQUNFLFVBQUssR0FBRztZQUNOLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsYUFBYTtZQUNiLGNBQWM7U0FDZixDQUFDO0lBUUosQ0FBQztJQU5DLDZCQUFHLEdBQUg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsNkJBQUcsR0FBSCxVQUFJLEtBQWE7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLHVCQUFlLGtCQWMzQixDQUFBIiwiZmlsZSI6InNoYXJlZC9zZXJ2aWNlcy9uYW1lLWxpc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOYW1lTGlzdFNlcnZpY2Uge1xuICBuYW1lcyA9IFtcbiAgICAnRWRzZ2VyIERpamtzdHJhJyxcbiAgICAnRG9uYWxkIEtudXRoJyxcbiAgICAnQWxhbiBUdXJpbmcnLFxuICAgICdHcmFjZSBIb3BwZXInXG4gIF07XG5cbiAgZ2V0KCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lcztcbiAgfVxuICBhZGQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubmFtZXMucHVzaCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==
