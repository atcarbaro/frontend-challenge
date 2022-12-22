const icons = {
  sendIcon: require('../../assets/icon.png'),
};
  
type Icons = keyof typeof icons;

export const useGetIcon = (
  iconType: Icons,
): number => {
  return icons[iconType];
};
  