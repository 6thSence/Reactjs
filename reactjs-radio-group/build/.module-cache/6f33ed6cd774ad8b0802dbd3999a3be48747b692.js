
var RadioOtherOption = React.createClass({displayName: "RadioOtherOption",
	PropTypes: {
		name: React.PropTypes.string.isRequired
	},
	getInitialState: function () {
		return {
			checked: false
		};
	},
	onChange: function (event) {
		var input = event.target;

		this.setState({
			checked: input.checked
		});
	},
	componentDidUpdate: function() {
		var input = ReactDOM.findDOMNode(this.refs.myInput);
		this.setState({
			checked: input.checked
		});
	},
	render: function () {
		return (
							React.createElement("p", {className: "radio"}, 
					React.createElement("label", null, 
						React.createElement("input", {ref: "myInput", type: "radio", name: this.props.name, value: "other", onChange: this.onChange}
							), 
						
						"Other"
					), 
						this.state.checked && (
							React.createElement("label", {className: "form-inline"}, 
						"Please specify:", 
						React.createElement("input", {type: "text", name: "referrer_other"})
					))
				)
			);
	}
}); 


console.log('Radio Other Option');