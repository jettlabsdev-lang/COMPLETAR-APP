import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors, spacing, typography, radii } from '../../theme';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
}

export function Button({
  label,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  style,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[styles.base, styles[variant], styles[size], disabled && styles.disabled, style]}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' || variant === 'ghost' ? colors.primary : colors.white} />
      ) : (
        <Text style={[styles.label, styles[`${variant}Label`], styles[`${size}Label`]]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  primary: { backgroundColor: colors.primary } as ViewStyle,
  secondary: { backgroundColor: colors.secondary } as ViewStyle,
  outline: { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: colors.primary } as ViewStyle,
  ghost: { backgroundColor: 'transparent' } as ViewStyle,
  disabled: { opacity: 0.5 } as ViewStyle,

  sm: { paddingVertical: spacing.xs, paddingHorizontal: spacing.md } as ViewStyle,
  md: { paddingVertical: spacing.sm + 2, paddingHorizontal: spacing.base } as ViewStyle,
  lg: { paddingVertical: spacing.md, paddingHorizontal: spacing.xl } as ViewStyle,

  label: { fontWeight: typography.fontWeights.semibold } as TextStyle,
  primaryLabel: { color: colors.white } as TextStyle,
  secondaryLabel: { color: colors.white } as TextStyle,
  outlineLabel: { color: colors.primary } as TextStyle,
  ghostLabel: { color: colors.primary } as TextStyle,

  smLabel: { fontSize: typography.fontSizes.sm } as TextStyle,
  mdLabel: { fontSize: typography.fontSizes.base } as TextStyle,
  lgLabel: { fontSize: typography.fontSizes.lg } as TextStyle,
});
