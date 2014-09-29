///<reference path='./references.d.ts' />


module EgyptianNumberSystem {

	export interface IRationalNumber {
		numerator:number;
		denominator:number;

		unitFractionSummation?:IRationalNumber[];
	}

	export class UnitFraction implements IRationalNumber {
		constructor(public numerator:number, public denominator:number) {
			this.numerator = 1;
			this.denominator = denominator;
		}
	}
}

export = EgyptianNumberSystem;