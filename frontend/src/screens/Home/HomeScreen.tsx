import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../../theme';
import { Card } from '../../components/ui';
import { useAuthStore } from '../../store/authStore';

export function HomeScreen() {
  const user = useAuthStore((s) => s.user);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.greeting}>Hola, {user?.name ?? 'usuario'}</Text>
        <Text style={styles.subtitle}>¿Qué necesitás hoy?</Text>

        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Servicios disponibles</Text>
          <Text style={styles.placeholder}>Próximamente — conectando con la API</Text>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Tus solicitudes recientes</Text>
          <Text style={styles.placeholder}>Sin solicitudes aún</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  container: { padding: spacing.base, gap: spacing.base },
  greeting: {
    fontSize: typography.fontSizes['2xl'],
    fontWeight: typography.fontWeights.bold,
    color: colors.text,
  },
  subtitle: {
    fontSize: typography.fontSizes.base,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  card: { marginTop: spacing.sm },
  cardTitle: {
    fontSize: typography.fontSizes.base,
    fontWeight: typography.fontWeights.semibold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  placeholder: {
    fontSize: typography.fontSizes.sm,
    color: colors.textSecondary,
  },
});
