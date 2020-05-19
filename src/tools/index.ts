/**
 * 生成随机数
 * @param low 下边界
 * @param high 上边界
 */
export function getRandomNumber(low: number, high: number) {
  return Math.round(Math.random() * (high - low) + low);
}
