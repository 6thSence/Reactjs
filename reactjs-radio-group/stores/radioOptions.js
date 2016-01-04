var radioOption = Hoverboard({
	init: fucntion (state, options) {
		return options;	
	},
	check: function (state, value) {
		return state.map( fucntion (option) {
			return {
				value: option.value,
				label: option.label,
				checked: value === option.value
			};
		});
	}
});

radioOptions.init([
		{ value: 'newspaper', label: 'Newspaper' },
		{ value: 'radio', label: 'Radio', chacked: false},
		{ value: 'tv', label: 'Television', chacked: false},
		{ value: 'search', label: 'Search Engine', chacked: false},
		{ value: 'social', label: 'Social Media', chacked: false}
]);