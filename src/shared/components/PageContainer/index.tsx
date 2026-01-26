import React, { FC } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppTheme } from '@src/shared/hooks';
import { Spacing, SPACING_PAGE } from '@src/shared/themes';

interface PageContainerProps {
  children: React.ReactNode;
  padding?: boolean;
  disablePaddingBottom?: boolean;
  style?: StyleProp<ViewStyle>;
}
const PageContainer: FC<PageContainerProps> = ({
  children,
  padding,
  disablePaddingBottom,
  style,
}) => {
  const inset = useSafeAreaInsets();
  const { Colors } = useAppTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: Colors.defaultPageBackground,
          paddingHorizontal: padding ? SPACING_PAGE : Spacing.none,
          paddingTop: inset.top,
          paddingBottom: disablePaddingBottom ? Spacing.none : inset.bottom,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PageContainer
