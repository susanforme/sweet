import {StackHeaderOptions} from '@react-navigation/stack/lib/typescript/src/types';
export const getDefaultHeaderStyle = (
  height: number,
  proportion = 0.5,
  backgroundColor = '#ffee00',
): StackHeaderOptions => ({
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor,
    borderBottomWidth: 0,
    elevation: 0,
    height: height * proportion,
  },
});
