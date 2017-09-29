export function promise1(msg: string) {
	return Promise.resolve(msg);
}

export function promise2(msg: string) {
	return Promise.reject(msg);
}

export function promise3(msg: string) {
	return new Promise<string>((resolve, reject) => {
		setTimeout(() => {
			try {
				throw new Error(msg);
				// resolve(msg);	// ! 不要尝试同时resolve和reject
			} catch (e) {
				reject(e);
			}
		}, 0);
	});
}

export function promise4(msg: string) {
	return new Promise<string>((resolve, reject) => {
		setTimeout(() => {
			reject(msg);
		}, 0);
	});
}

export function promise5(msg: string) {
	return new Promise<string>((resolve, reject) => {
		setTimeout(() => {
			resolve(msg);
		}, 0);
	});
}

export function promise6(msg: string) {
	return new Promise<string>((resolve, reject) => {
		reject(msg);
	});
}

export function promise7(msg: string) {
	return new Promise<string>((resolve, reject) => {
		reject(msg);
	});
}

export async function promise8(msg: string) {
	return msg;
}

export async function promise9(msg: string) {
	return await msg;
}

export async function promise10(msg: string) {
	return await new Promise<string>((resolve, reject) => {
		resolve(msg);
	});
}
