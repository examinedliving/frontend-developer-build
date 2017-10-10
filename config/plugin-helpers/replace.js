module.exports = (function() {
	return {
		"delete_blank_lines": {
			"search": new RegExp("\n\n", "g"),
			"replace": "\n"
		}
	};
}());