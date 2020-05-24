import { StyleSheet } from 'react-native';
import { colorLightGray, colorPaleGray, colorWhite, colorRed, colorBlue } from '../../config/color';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    paddingRight: 0,
    backgroundColor: '#fff',
  },
  left: {
    width: 90,
  },
  right: {
    flex: 1,
    paddingTop: 2,
  },
  logo: {
    width: 78,
    height: 78,
    resizeMode: 'cover',
  },
  logoImageStyle: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colorPaleGray,
  },
  shopNameText: {
    fontWeight: 'bold',
  },
  inline: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center',
  },
  marginR20: {
    marginRight: 20,
  },
  greyText: {
    fontSize: 10,
    color: colorLightGray
  },
  withBorderTop: {
    flex: 1,
    borderTopWidth: .2,
    borderTopColor: '#e6e6e6'
  },
  additionItem: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    height: 28,
  },
  queueReserveFlag: {
    width: 26,
    height: 15,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  queueFlag: {
    backgroundColor: colorRed,
  },
  flagText: {
    fontSize: 8,
    height: 15,
    color: colorWhite,
  },
  queueReserveDesc: {
    fontSize: 10,
    color: '#888',
  },
  queueDetail: {
    marginLeft: 'auto',
    paddingRight: 15,
    alignItems: 'center'
  },
  NoNeedQueue: {
    color: colorRed,
    fontSize: 10,
  },
  reserveFlag: {
    backgroundColor: colorBlue,
  },
  deskWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deskText: {
    marginLeft: 3,
    fontSize: 10,
    color: '#888',
  },
  descNum: {
    color: colorRed,
    fontSize: 14,
    fontWeight: 'bold',
  },
  hotTag: {
    position: 'absolute',
    left: -70,
    bottom: -3,
    width: 60,
    height: 25,
    resizeMode: 'cover',
  }
});
