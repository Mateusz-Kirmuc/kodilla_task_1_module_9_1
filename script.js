function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		return 'Nieprawidłowe dane';
	}

	return a * h / 2;
}

console.log(getTriangleArea(10, 6));

var triangleArea1 = getTriangleArea(100, 2);
var triangleArea2 = getTriangleArea(299, 231);
var triangleArea3 = getTriangleArea(23, 321);
