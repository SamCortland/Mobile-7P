import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: theme.spacing.large,
    backgroundColor: theme.colors.background 
  },
  title: { 
    fontSize: 28,
    fontWeight: 'bold', 
    color: theme.colors.primary,
    marginBottom: theme.spacing.large, 
    textAlign: 'center' 
  },
  input: { 
    backgroundColor: theme.colors.white,
    borderWidth: 1, 
    borderColor: theme.colors.primary, 
    padding: theme.spacing.medium, 
    marginBottom: theme.spacing.medium, 
    borderRadius: 8,
    fontSize: theme.fonts.regular,
    color: theme.colors.text
  },
   buttonPrimary: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.small, 
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.medium, 
    borderWidth: 1,
    borderColor: '#666',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextSecondary: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  }
});