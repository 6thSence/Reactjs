
var Demo = React.createClass({
	render: function() {
		return (
		React.createElement("div", {className: "container"}, 
			React.createElement("h1", null, "React.js Radio Group Demo"), 
			React.createElement("form", {action: ""}, 

				React.createElement("p", {className: "h3"}, "How did you hear about us?"), 
				React.createElement("p", {className: "radio"}, 
					React.createElement("label", {for: ""}, 
						React.createElement("input", {type: "radio", name: "referrer", value: "newspaper"}), 
						"Newspaper"
					)
				), 
				React.createElement("p", {className: "radio"}, 
					React.createElement("label", {for: ""}, 
						React.createElement("input", {type: "radio", name: "referrer", value: "radio"}), 
						"Radio"
					)
				), 
				React.createElement("p", {className: "radio"}, 
					React.createElement("label", {for: ""}, 
						React.createElement("input", {type: "radio", name: "referrer", value: "television"}), 
						"Television"
					)
				), 
				React.createElement("p", {className: "radio"}, 
					React.createElement("label", {for: ""}, 
						React.createElement("input", {type: "radio", name: "referrer", value: "search engine"}), 
						"Search Engine"
					)
				), 
				React.createElement("p", {className: "radio"}, 
					React.createElement("label", {for: ""}, 
						React.createElement("input", {type: "radio", name: "referrer", value: "social medis"}), 
						"Social Media"
					)
				), 
				React.createElement("p", {className: "radio"}, 
					React.createElement("label", {for: ""}, 
						React.createElement("input", {type: "radio", name: "referrer", value: "other"}), 
						"Other"
					), 
					React.createElement("label", {className: "form-inline"}, 
						"Please specify:", 
						React.createElement("input", {type: "text", name: "referrer_other"})
					)
				), 
				React.createElement("p", null, React.createElement("input", {type: "submit", value: "Submit"}))

			)
		)
		);
	}
});