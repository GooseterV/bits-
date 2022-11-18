/* eslint-disable indent */
function log(n, base) {
	return Math.log(n) / Math.log(base);
}

class Num {
	constructor(value) {
		this.value = value;
		this.mappings = {
			0: 0,
			1: 1,
			2: 5,
			3: 20,
		};
		this.base = 20;
		this.stack = [];
		this.exp = log(this.value, 20);
		this.isEven20 = Number.isInteger(this.exp);
	}

	construct() {
		if (this.value === 0) return this.stack.unshift([0]);
		if (this.value < 5) return this.stack.unshift(Array(this.value).fill(1));
		if (this.value === 5) return this.stack.unshift([2]);
		if (this.value < 20) return this.stack.unshift((Array(Math.floor(this.value/5)).fill(2).concat(Array(this.value%5).fill(1))).reverse());
		if (this.value === 20) return this.stack.unshift([1], [0]);
		//[1, 2, 2].map(x=>(this.mappings[x]).reduce((x, y)=>x+y)
	}

}



