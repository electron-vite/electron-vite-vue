
//生成从minNum到maxNum的随机数
export function randomNum (min, max) {
	return parseInt(Math.random() * (max - min + 1) + min)
}
