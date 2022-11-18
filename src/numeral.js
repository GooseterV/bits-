/* eslint-disable indent */
function log(n, base) {
	return Math.log(n) / Math.log(base);
}

class Num {

	constructor(value, base, mappings) {
		this.value = value;
		this.base = base;
		this.mappings = mappings;
		this.exp = log(this.value, this.base);
		this.isEvenBase = Number.isInteger(this.exp);
	}
	
	calc(stack = this.stack, total = this.total) {
		for (let i = 0; i<stack.length; i++) {
			total += stack[i].map((x) => this.mappings[x]).reduce((a, b) => a + b) * (this.base**i);
		}
		return total;
	}

}

class MayanNumeral extends Num {
	static mappings = {
		0: 0,
		1: 1,
		2: 5,
		3: 20,
	};

	constructor(value) {
		super(value, 20, MayanNumeral.mappings);
		this.stack = value.toString(20).split("").map(x=>parseInt(x,20)).map(x=>this.construct(x));
	}

	construct(value) {
		if (value === 0) return [0];
		if (value < 1) return null;
		if (value < 5) return Array(value).fill(1);
		if (value === 5) return [2];
		if (value < 20) return (Array(Math.floor(value/5)).fill(2).concat(Array(value%5).fill(1))).reverse();
	}

	export() {
		return this.stack.map(n =>
			String.fromCharCode(0xD834, 0xDEE0 + n.map((x) => this.mappings[x]).reduce((a, b)=>a+b))
		).join("");
	}
}

