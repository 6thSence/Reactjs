var Demo = React.creatClass({
	render: function() {
		return (

		<div className="container">
			<h1>React.js Radio Group Demo</h1>
			<form action="">
			
				<p className="h3">How did you hear about us?</p>
				<p className="radio">
					<label for="">
						<input type="radio" name="referrer" value="newspaper" />
						Newspaper
					</label>
				</p>
				<p className="radio">
					<label for="">
						<input type="radio" name="referrer" value="radio" />
						Radio
					</label>
				</p>
				<p className="radio">
					<label for="">
						<input type="radio" name="referrer" value="television" />
						Television
					</label>
				</p>
				<p className="radio">
					<label for="">
						<input type="radio" name="referrer" value="search engine" />
						Search Engine
					</label>
				</p>
				<p className="radio">
					<label for="">
						<input type="radio" name="referrer" value="social medis"/>
						Social Media
					</label>
				</p>
				<p className="radio">
					<label for="">
						<input type="radio" name="referrer" value="other"/>
						Other
					</label>
					<label className="form-inline">
						Please specify:
						<input type="text" name="referrer_other"/>
					</label>
				</p>
				<p><input type="submit" value="Submit"/></p>

			</form>
		</div>
		);
	}
});