var d = new Date();
console.log(d.getTime());
console.log(d.getMilliseconds());
/*

function set_year(time, year) {
	const dt = new Date(time);
	const dayOfMonth = dt.getDate();

	dt.setFullYear(year);

	if (dt.getDate() < dayOfMonth) {
		dt.setDate(0);
	}
	dt.setFullYear(year);
	return dt.getTime();
}

const f = set_year(1507781551091, 2017);

console.log(f);

function parse(string) {
	return Date.parse(string);
}
const g = parse(2017, 10, 12);
console.log(g);

function get_day_of_week(time) {
	return new Date(time).getDay();
}
const t = get_day_of_week(1507787383300);
console.log(t);

function get_timezone_offset(time) {
	return new Date(time).getTimezoneOffset();
}
const q = get_timezone_offset(1507787383300);
console.log(q);


function tm2str(time) {
	return new Date(time).toString();
}

const w = tm2str(1507787383300);
console.log(w);


function tm2tmstr(time) {
	return new Date(time).toTimeString();
}

const e = tm2tmstr(1507787383300);
console.log(e);

function tm2local_str(time) {
	return new Date(time).toLocaleString();
}


const r = tm2local_str(1507787383300);
console.log(r);


function tm2isostr(time) {
	return new Date(time).toISOString();
}

const y = tm2isostr(1507787383300);
console.log(y);
*/

function tm2json(time, key) {
	return new Date(time).toJSON(key);
}

const u = tm2json(1507787486300, 2);
console.log(u);

function valueof(time) {
	return new Date(time).valueOf();
}

const i = valueof(1507787486300);
console.log(i);


