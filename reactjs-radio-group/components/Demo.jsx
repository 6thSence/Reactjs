var Demo = React.createClass({
    render: function() {
    	var RadioOptions = [
    		{value: "newspaper",		label:"Newspaper"},
    		{value: "radio",			label:"Radio"},
    		{value: "tv", 				label:"Television"},
    		{value: "search engine",	label:"Search Engine"},
    		{value: "social media",		label:"Social Media"}
    	];
        return <div className="container">
			<h1>React.js Radio Group Demo</h1>
			<form>
				<p className="h3">How did you hear about us?</p>

			<RadioOptionGroup
				name="referrer"
			 	other={true} 
			 	options={RadioOptions}
			/>

			
				<p><input type="submit" value="Submit"/></p>
			</form>
		</div>;
    }
});