import * as data from './dist/tqf-date-trans.js';
import test from 'ava';
//测试is_leapyear

test('leapyear', async (t) => {
	t.is(data.is_leapyear(2011), false);


})


test('get_year', async (t) => {
	t.is(data.get_year(1507776663654), 2017);
	//此毫秒代表的年份是2017

})


test('set_year', async (t) => {
	t.is(data.set_year(1507781551091, 2017), 1507781551091);

})

//测试月份
test('get_month', async (t) => {
	t.is(data.get_month(1507781551091), 10);

})

test('set_month', async (t) => {
	t.is(data.set_month(1507781551091, 10), 1507781551091);

})

//测试日期
test('get_day_of_month', async (t) => {
	t.is(data.get_day_of_month(1507781551091), 12);

})

test('set_day_of_month', async (t) => {
	t.is(data.set_day_of_month(1507781551091, 12), 1507781551091);

})

//测试小时
test('get_hours', async (t) => {
	t.is(data.get_hours(1507785496034), 13);

})

test('set_hours', async (t) => {
	t.is(data.set_hours(1507785496034, 13), 1507785496034);

})

//测试分
test('get_minutes', async (t) => {
	t.is(data.get_minutes(1507785883463), 24);

})


test('set_minutes', async (t) => {
	t.is(data.set_minutes(1507785883463, 24), 1507785883463);

})

//测试秒
test('get_seconds', async (t) => {
	t.is(data.get_seconds(1507786562476), 2);

})


test('set_seconds', async (t) => {
	t.is(data.set_seconds(1507786562476, 2), 1507786562476);

})


//测试毫秒
test('get_milliseconds', async (t) => {
	t.is(data.get_milliseconds(1507787383300), 300);

})


test('set_milliseconds', async (t) => {
	t.is(data.set_milliseconds(1507787383300, 300), 1507787383300);

})


//测试是周几
test('get_dayofweek', async (t) => {
	t.is(data.get_dayOfWeek(1507787383300), 4);

})


//测试月份的天数
test('get_days_in_month', async (t) => {
	t.is(data.get_days_in_month(1507787383300), 31);

})


//测试从1970.1.1到指定日期的毫秒数
test('parse', async (t) => {
	t.is(data.parse(2017, 10, 12), 1483228800000);
})

//测试now函数 返回当前日期和时间
test('now', async (t) => {
	t.is(data.now(), Date.now());
})

//测试是一周的第几天
test('get_day_of_week', async (t) => {
	t.is(data.get_day_of_week(1507787383300), 4);
})


//测试本地时间与格林威治标准时间（GMT）的分钟差
test('get_timezone_offset', async (t) => {
	t.is(data.get_timezone_offset(1507787383300), -480);
})


//测试把date对象转换为字符串
test('tm2str', async (t) => {
	t.is(data.tm2str(1507787383300), 'Thu Oct 12 2017 13:49:43 GMT+0800 (中国标准时间)');
})


//测试把 Date 对象的时间部分转换为字符串。
test('tm2tmstr', async (t) => {
	t.is(data.tm2tmstr(1507787383300), '13:49:43 GMT+0800 (中国标准时间)');
})

//测试把根据本地时间格式，把 Date 对象转换为字符串。
test('tm2local_str', async (t) => {
	t.is(data.tm2local_str(1507787383300), '2017-10-12 13:49:43');
})

//测试根据本地时间格式，把 Date 对象的时间部分转换为字符串。
test('tm2local_tmstr', async (t) => {
	t.is(data.tm2local_tmstr(1507787383300), '13:49:43');
})

//测试使用 ISO 标准返回 Date 对象的字符串格式:
test('tm2isostr', async (t) => {
	t.is(data.tm2isostr(1507787383300), '2017-10-12T05:49:43.300Z');
})


//测试返回字符串的 Date 对象，并格式化为 JSON 数据:
test(' tm2json', async (t) => {
	t.is(data.tm2json(1507787486300, 2), '2017-10-12T05:51:26.300Z');
})

//测试返回 Date 对象的原始值。
test('valueof', async (t) => {
	t.is(data.valueof(1507787486300), 1507787486300);
})

