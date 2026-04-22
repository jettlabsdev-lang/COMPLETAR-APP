import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types/navigation';
import { Button } from '../../components/ui';
import { colors, spacing, typography } from '../../theme';

type Props = NativeStackScreenProps<AuthStackParamList, 'Onboarding'>;

export function OnboardingScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Completar</Text>
      <Text style={styles.subtitle}>Servicios técnicos del hogar, cuando los necesitás.</Text>
      <View style={styles.actions}>
        <Button label="Iniciar sesión" onPress={() => navigation.navigate('Login')} />
        <Button label="Crear cuenta" variant="outline" onPress={() => navigation.navigate('Register')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, justifyContent: 'center', padding: spacing.xl },
  title: { fontSize: typography.fontSizes['2xl'], fontWeight: typography.fontWeights.bold, color: colors.text, marginBottom: spacing.sm },
  subtitle: { fontSize: typography.fontSizes.base, color: colors.textSecondary, marginBottom: spacing['2xl'] },
  actions: { gap: spacing.md },
});
