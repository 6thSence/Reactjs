
var RadioOtherOption = React.createClass({
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
							<p className="radio">
					<label>
						<input ref="myInput" type="radio" name={this.props.name} value="other" onChange={this.onChange}
							/>
						
						Other
					</label>
						{this.state.checked && (
							<label className="form-inline">
						Please specify:
						<input type="text" name="referrer_other"/>
					</label>)}
				</p>
			);
	}
}); 
