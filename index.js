const signedLeftShift = (num, spaces) => {
	return num << spaces;
};

const filledRightShift = (num, spaces) => {
	return num >> spaces;
};

const invert = (num) => {
	return ~num;
};

const xor = (num1, num2) => {
	return num1 ^ num2;
};

const and = (num1, num2) => {
	return num1 & num2;
};

const or = (num1, num2) => {
	return num1 | num2;
};

const xand = (num1, num2) => {
	return num1 & ~num2;
};

const xnot = (num1, num2) => {
	return ~num1 & num2;
};

const rotateLeft = (num, spaces) => {
	return (num << spaces) | (num >> (32 - spaces));
};

const rotateRight = (num, spaces) => {
	return (num >> spaces) | (num << (32 - spaces));
};

const filledLeftShift = (num, spaces) => {
	return num >>> spaces;
};

const signedRightShift = (num, spaces) => {
	return num >> spaces;
};

const toBinary = (num) => {
	return num.toString(2);
};

const fromBinary = (bin) => {
	return parseInt(bin, 2);
};

const coalesce = (num1, num2) => {
	return num1 || num2;
};

const calcBinary = (bin) => {

};

module.exports = {
	signedLeftShift,
	filledRightShift,
	invert,
	xor,
	and,
	or,
	xand,
	xnot,
	rotateLeft,
	rotateRight,
	filledLeftShift,
	signedRightShift,
	toBinary,
	coalesce,
};