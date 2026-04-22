import React from 'react';
import { View, Text, Image, StyleSheet, ViewStyle, ImageStyle } from 'react-native';
import { colors, typography, radii } from '../../theme';

type Size = 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps {
  uri?: string | null;
  name?: string;
  size?: Size;
  style?: ViewStyle;
}

const SIZES: Record<Size, number> = { sm: 32, md: 40, lg: 56, xl: 72 };
const FONT_SIZES: Record<Size, number> = { sm: 12, md: 14, lg: 20, xl: 26 };

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export function Avatar({ uri, name, size = 'md', style }: AvatarProps) {
  const dimension = SIZES[size];
  const fontSize = FONT_SIZES[size];
  const sizeStyle = { width: dimension, height: dimension, borderRadius: radii.full };

  if (uri) {
    return <Image source={{ uri }} style={[styles.image, sizeStyle] as ImageStyle[]} />;
  }

  return (
    <View style={[styles.fallback, sizeStyle, style]}>
      <Text style={[styles.initials, { fontSize }]}>
        {name ? getInitials(name) : '?'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  fallback: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  initials: {
    color: colors.white,
    fontWeight: typography.fontWeights.semibold,
  },
});
