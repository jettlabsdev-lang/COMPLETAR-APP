import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, typography, spacing, radii } from '../../theme';

type Status = 'pending' | 'accepted' | 'in_progress' | 'completed' | 'cancelled';
type Variant = 'filled' | 'outline';

interface BadgeProps {
  status: Status;
  variant?: Variant;
  style?: ViewStyle;
}

const STATUS_CONFIG: Record<Status, { label: string; bg: string; text: string; border: string }> = {
  pending:     { label: 'Pendiente',    bg: '#FEF3C7', text: '#92400E', border: '#F59E0B' },
  accepted:    { label: 'Aceptado',     bg: '#DBEAFE', text: '#1E40AF', border: '#2563EB' },
  in_progress: { label: 'En progreso',  bg: '#EDE9FE', text: '#5B21B6', border: '#7C3AED' },
  completed:   { label: 'Completado',   bg: '#D1FAE5', text: '#065F46', border: '#10B981' },
  cancelled:   { label: 'Cancelado',    bg: '#FEE2E2', text: '#991B1B', border: '#EF4444' },
};

export function Badge({ status, variant = 'filled', style }: BadgeProps) {
  const config = STATUS_CONFIG[status];

  return (
    <View
      style={[
        styles.base,
        variant === 'filled' && { backgroundColor: config.bg },
        variant === 'outline' && { backgroundColor: 'transparent', borderWidth: 1, borderColor: config.border },
        style,
      ]}
    >
      <Text style={[styles.label, { color: config.text }]}>{config.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    borderRadius: radii.full,
    paddingVertical: spacing.xs / 2,
    paddingHorizontal: spacing.sm + 2,
  },
  label: {
    fontSize: typography.fontSizes.xs,
    fontWeight: typography.fontWeights.semibold,
  },
});
