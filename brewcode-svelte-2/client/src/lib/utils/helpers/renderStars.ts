// Helper function to render stars
export const renderStars = (rating: number) => {
	return [
		...Array(Math.floor(rating)).fill('full'),
		...Array(rating % 1 !== 0 ? 1 : 0).fill('half'),
		...Array(5 - Math.floor(rating) - (rating % 1) !== 0 ? 0 : 1).fill('full')
	];
};
