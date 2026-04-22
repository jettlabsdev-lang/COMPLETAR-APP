import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ViewStyle, TextInputProps, TouchableOpacity } from 'react-native';
import { colors, spacing, typography, radii } from '../../theme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onIconPress?: () => void;
  containerStyle?: ViewStyle;
}

export function Input({
  label,
  error,
  icon,
  iconPosition = 'right',
  onIconPress,
  containerStyle,
  ...props
}: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputWrapper, focused && styles.inputFocused, !!error && styles.inputError]}>
        {icon && iconPosition === 'left' && (
          <TouchableOpacity onPress={onIconPress} disabled={!onIconPress} style={styles.iconLeft}>
            {icon}
          </TouchableOpacity>
        )}
        <TextInput
          style={[styles.input, icon && iconPosition === 'left' ? styles.inputWithIconLeft : undefined, icon && iconPosition === 'right' ? styles.inputWithIconRight : undefined]}
          placeholderTextColor={colors.textDisabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        {icon && iconPosition === 'right' && (
          <TouchableOpacity onPress={onIconPress} disabled={!onIconPress} style={styles.iconRight}>
            {icon}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: spacing.xs },
  label: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.medium,
    color: colors.text,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radii.md,
    backgroundColor: colors.surface,
  },
  inputFocused: { borderColor: colors.primary },
  inputError: { borderColor: colors.danger },
  input: {
    flex: 1,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.md,
    fontSize: typography.fontSizes.base,
    color: colors.text,
  },
  inputWithIconLeft: { paddingLeft: spacing.xs },
  inputWithIconRight: { paddingRight: spacing.xs },
  iconLeft: { paddingLeft: spacing.md },
  iconRight: { paddingRight: spacing.md },
  error: {
    fontSize: typography.fontSizes.xs,
    color: colors.danger,
  },
});
