///<reference path='./references.d.ts' />
var EgyptianNumberSystem;
(function (EgyptianNumberSystem) {
    var UnitFraction = (function () {
        function UnitFraction(numerator, denominator) {
            this.numerator = numerator;
            this.denominator = denominator;
            this.numerator = 1;
            this.denominator = denominator;
        }
        return UnitFraction;
    })();
    EgyptianNumberSystem.UnitFraction = UnitFraction;
})(EgyptianNumberSystem || (EgyptianNumberSystem = {}));

module.exports = EgyptianNumberSystem;
