///<reference path='./references.d.ts' />


declare module EgyptianNumberSystem {

	export interface IRationalNumber {
		numerator:number;
		denominator:number;

		unitFractionSummation?:IRationalNumber[];
	}

	export interface IUnitFractionControllerScope extends ng.IScope {
		rationalNumber:IRationalNumber;

		formattedSolution:string;

		calculate(rationalNumber):Q.IPromise<IRationalNumber[]>;
	}
}