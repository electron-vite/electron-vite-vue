
//生成从minNum到maxNum的随机数
export function randomNum (min, max) {
	return parseInt(Math.random() * (max - min + 1) + min)
}

// promise 错误处理
export function awaitWrap<T, U = any>(promise: Promise<T>): Promise<[U | null, T | null]> {
	return promise
			.then<[null, T]>((data: T) => [null, data])
			.catch<[U, null]>(err => [err, null])
}
