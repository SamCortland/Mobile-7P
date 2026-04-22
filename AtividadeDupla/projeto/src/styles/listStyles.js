import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.background 
  },
  title: { 
    fontSize: theme.fonts.title, 
    fontWeight: 'bold', 
    color: theme.colors.primary,
    marginBottom: theme.spacing.large,
    marginTop: theme.spacing.medium,
    textAlign: 'center'
  },
  card: { 
    backgroundColor: theme.colors.white,
    padding: theme.spacing.medium, 
    marginBottom: theme.spacing.medium, 
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: theme.colors.tertiary, 
    elevation: 3,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  textBold: { 
    fontWeight: 'bold', 
    fontSize: theme.fonts.regular,
    color: theme.colors.primary,
    marginBottom: theme.spacing.small 
  },
  textNormal: {
    fontSize: theme.fonts.regular,
    color: theme.colors.text,
    marginBottom: 4
  }
});