import {StackHeaderOptions} from '@react-navigation/stack/lib/typescript/src/types';
/**
 * 返回默认样式
 * @param height 高度
 * @param paddingTop 顶部间隔
 * @param proportion 比例
 * @param backgroundColor 背景颜色
 */
export const getDefaultHeaderStyle = (
  height: number,
  paddingTop: number,
  proportion = 0.5,
  backgroundColor = '#ffee00',
): StackHeaderOptions => ({
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor,
    borderBottomWidth: 0,
    elevation: 0,
    height: (height + paddingTop) * proportion,
  },
});
