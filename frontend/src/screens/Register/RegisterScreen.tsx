import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types/navigation';
import { Button, Input } from '../../components/ui';
import { colors, spacing, typography } from '../../theme';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

export function RegisterScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>
      <View style={styles.form}>
        <Input label="Nombre completo" placeholder="Juan García" />
        <Input label="Email" placeholder="tu@email.com" keyboardType="email-address" autoCapitalize="none" />
        <Input label="Contraseña" placeholder="••••••••" secureTextEntry />
        <Button label="Registrarme" onPress={() => {}} />
      </View>
      <Button label="¿Ya tenés cuenta? Iniciá sesión" variant="ghost" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, justifyContent: 'center', padding: spacing.xl },
  title: { fontSize: typography.fontSizes['2xl'], fontWeight: typography.fontWeights.bold, color: colors.text, marginBottom: spacing.xl },
  form: { gap: spacing.md, marginBottom: spacing.xl },
});
