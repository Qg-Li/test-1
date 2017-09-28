function test() {
	const promise = new Promise((resolve, reject) => {
		setTimeout(function () {
			try {
				throw new Error('test');
				resolve("ok");	// ! 不要尝试同时resolve和reject
			} catch (e) {
				reject(e);
			}
		}, 0);
	});
	promise.then((value) => { console.log(value) }, (e) => {
		console.error('1', e);
		throw e;	// 方式一
		return Promise.reject(e);	// 方式二
		// 注意： 1.如果这里处理完异常，并且逻辑上认为后续不需要处理该异常，以上两种方式皆不可行，正确的方式是：这里做出逻辑处理后，返回后续操作需要的值即可，可以是任意类型的值，也可以是Project.resolve状态的值均可。
	}).catch((e) => {
		console.error('2', e);
	});
	return promise;	// 注意这里一定要把Promise实例返回给调用者
}

async function main() {
	try {
		await test();
		console.log('Success');
	} catch (e) {
		console.log('Fail');
	}
}

main();
