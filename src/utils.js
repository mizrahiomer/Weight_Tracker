export const longestSuccessStreak = weights => {
	let counter = 0;
	var countArr = [0];
	for (let i = 0; i < weights.length; i++) {
		if (i + 1 < weights.length) {
			if (weights[i].weight > weights[i + 1].weight) {
				counter++;
			} else {
				countArr.push(counter);
				counter = 0;
			}
		} else {
			countArr.push(counter);
		}
	}

	return Math.max(...countArr);
};

export const removeDuplicates = arr => {
	const uniqueSet = new Set(arr);
	return [...uniqueSet];
};
