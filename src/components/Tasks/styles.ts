import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#262626',
    borderRadius: 8,
    gap: 8,
    shadowColor: '#0000000f',
    marginBottom: 8,
  },
  title: {},
  emptyContainer: {
    paddingHorizontal: 20,
    paddingVertical: 48,
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    fontWeight: 'bold',
    color: '#808080',
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#808080',
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
  },
});
