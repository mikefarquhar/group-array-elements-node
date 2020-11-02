const groupArrayElements = require("./group-array-elements");

describe("groupArrayElements", () => {
	test("It should only accept an array as the first argument (array).", () => {
		expect(() => groupArrayElements([1, 2, 3, 4], 2)).not.toThrow(
			"'array' must be an array."
		);

		// This is hardly all encompasing, but is enough to get the point across.
		// Additional cases can be added as and when bugs are found and fixed.
		expect(() => groupArrayElements(undefined, 2)).toThrow(
			"'array' must be an array."
		);
		expect(() => groupArrayElements(null, 2)).toThrow(
			"'array' must be an array."
		);
		expect(() => groupArrayElements(12345, 2)).toThrow(
			"'array' must be an array."
		);
		expect(() => groupArrayElements("abcdef", 2)).toThrow(
			"'array' must be an array."
		);
	});

	test("It should only accept a positive integer as the second argument (numGroups).", () => {
		expect(() => groupArrayElements([1, 2, 3, 4], 2)).not.toThrow(
			"'numGroups' must be a positive integer."
		);

		// Again, additional cases can be added as and when they become necessary.
		expect(() => groupArrayElements([1, 2, 3, 4], undefined)).toThrow(
			"'numGroups' must be a positive integer."
		);

		expect(() => groupArrayElements([1, 2, 3, 4], null)).toThrow(
			"'numGroups' must be a positive integer."
		);

		expect(() => groupArrayElements([1, 2, 3, 4], 0)).toThrow(
			"'numGroups' must be a positive integer."
		);

		expect(() => groupArrayElements([1, 2, 3, 4], "4")).toThrow(
			"'numGroups' must be a positive integer."
		);
	});

	test("It should group array elements into equal sized chunks.", () => {
		expect(groupArrayElements([1, 2, 3, 4, 5, 6], 2)).toEqual([
			[1, 2, 3],
			[4, 5, 6],
		]);
		expect(groupArrayElements([1, 2, 3, 4, 5, 6], 3)).toEqual([
			[1, 2],
			[3, 4],
			[5, 6],
		]);
	});

	test("The final group should contain fewer elements if the number of elements does not divide exactly by the group size.", () => {
		expect(groupArrayElements([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
			[1, 2, 3],
			[4, 5, 6],
			[7],
		]);
	});

	test("It should return an empty array if an empty array was provided.", () => {
		expect(groupArrayElements([], 3)).toEqual([]);
	});

	test("It should return a single element groups if the group size is greater than the array length.", () => {
		expect(groupArrayElements([1, 2, 3, 4], 12)).toEqual([[1], [2], [3], [4]]);
	});
});
