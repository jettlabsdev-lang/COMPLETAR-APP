import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types/navigation';
import { Button, Input } from '../../components/ui';
import { colors, spacing, typography } from '../../theme';

type Props = NativeStackScreenProps<AuthStackParamList, 'ForgotPassword'>;

export function ForgotPasswordScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar contraseña</Text>
      <Text style={styles.subtitle}>Ingresá tu email y te enviamos un link para resetearla.</Text>
      <View style={styles.form}>
        <Input label="Email" placeholder="tu@email.com" keyboardType="email-address" autoCapitalize="none" />
        <Button label="Enviar link" onPress={() => {}} />
        <Button label="Volver al login" variant="ghost" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, justifyContent: 'center', padding: spacing.xl },
  title: { fontSize: typography.fontSizes['2xl'], fontWeight: typography.fontWeights.bold, color: colors.text, marginBottom: spacing.sm },
  subtitle: { fontSize: typography.fontSizes.base, color: colors.textSecondary, marginBottom: spacing.xl },
  form: { gap: spacing.md },
});
