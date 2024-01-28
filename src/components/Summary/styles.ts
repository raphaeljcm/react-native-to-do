import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  created: {
    color: '#4EA8DE',
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
  },
  done: {
    color: '#8284FA',
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
  },
  summaryValue: {
    borderRadius: 999,
    color: '#D9D9D9',
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: '#333333',
  },
});
