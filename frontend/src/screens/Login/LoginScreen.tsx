import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types/navigation';
import { Button, Input } from '../../components/ui';
import { colors, spacing, typography } from '../../theme';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <View style={styles.form}>
        <Input label="Email" placeholder="tu@email.com" keyboardType="email-address" autoCapitalize="none" />
        <Input label="Contraseña" placeholder="••••••••" secureTextEntry />
        <Button label="Ingresar" onPress={() => {}} />
        <Button label="Olvidé mi contraseña" variant="ghost" onPress={() => navigation.navigate('ForgotPassword')} />
      </View>
      <Button label="¿No tenés cuenta? Registrate" variant="ghost" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, justifyContent: 'center', padding: spacing.xl },
  title: { fontSize: typography.fontSizes['2xl'], fontWeight: typography.fontWeights.bold, color: colors.text, marginBottom: spacing.xl },
  form: { gap: spacing.md, marginBottom: spacing.xl },
});
