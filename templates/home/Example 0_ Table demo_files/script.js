

// create shivam container
let shivam = {};


// SHIVAM.table initialization
shivam.init = function () {
	// define reference to the SHIVAM.table object
	var rt = SHIVAM.table;
	// console.log(rt);
	// activate onmousedown event listener on cells within table with id="mainTable"
	rt.onMouseDown('mainTable', true);
	// show cellIndex (it is nice for debugging)
	rt.cellIndex(true);
	// define background color for marked cell
	rt.color.cell = '#FF5733';
};


// function merges table cells
shivam.merge = function () {
	// first merge cells horizontally and leave cells marked
	SHIVAM.table.merge('h', false);
	// and then merge cells vertically and clear cells (second parameter is true by default)
	SHIVAM.table.merge('v',true);
};


// function splits table cells if colspan/rowspan is greater then 1
// mode is 'h' or 'v' (cells should be marked before)
shivam.split = function (mode) {
	SHIVAM.table.split(mode);
};


// insert/delete table row
shivam.row = function (type) {
	SHIVAM.table.row('mainTable', type);
};


// insert/delete table column
shivam.column = function (type) {
	SHIVAM.table.column('mainTable', type);
};


// add onload event listener
if (window.addEventListener) {
	window.addEventListener('load', shivam.init, false);
}
else if (window.attachEvent) {
	window.attachEvent('onload', shivam.init);
}
