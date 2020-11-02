/**
 * Group the contents of an array into N groups of equal size.
 * If the array does not divide equally by N the last group will contain the remainder.
 * The actual number of groups may be fewer than N if there are not enough elements in the source
 * array (The assumption here is we don't want empty groups).
 *
 * @template T
 * @param {Array<T>} array The source array containing the elements to be grouped
 * @param {number} numGroups The target number of groups to extract from the array. Must be a positive integer
 * @returns {Array<Array<T>>} Array of grouped elements
 */
function groupArrayElements(array, numGroups) {
	// Validate arguments.
	// "== null" will check for both "null" and "undefined".
	if (array == null || !Array.isArray(array)) {
		throw new Error("'array' must be an array.");
	}

	if (numGroups == null || !Number.isInteger(numGroups) || numGroups < 1) {
		throw new Error("'numGroups' must be a positive integer.");
	}

	// Ensure the number of groups is less than or equal to the array length so that we don't end
	// up with more groups than we have elements for.
	const actualNumGroups = Math.min(numGroups, array.length);

	// The array length might not exactly divide by the number of groups so we must use ceil to
	// ensure we get the next whole number and avoid missing elements from the end of the array.
	const groupSize = Math.ceil(array.length / actualNumGroups);

	// Extract the groups from the array.
	const groups = [];
	for (let i = 0; i < actualNumGroups; ++i) {
		// Array slice copies a section of the array from from startIndex up to (but not including)
		// endIndex, this means the endIndex is always `groupSize` larger than startIndex.
		// Interestingly we also don't need to worry about overshooting the endIndex on the last
		// group as the Array slice method handles that for us.
		const startIndex = i * groupSize;
		const endIndex = startIndex + groupSize;

		// Extract the group and add it to the array of groups.
		const group = array.slice(startIndex, endIndex);
		groups.push(group);
	}

	return groups;
}

module.exports = groupArrayElements;
