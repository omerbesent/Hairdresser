import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  BackHandler,
  Alert,
} from 'react-native';
import MapView from 'react-native-map-clustering';
import {Marker, Callout} from 'react-native-maps';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as barberActions from '../../redux/actions/barbers/barberActions';

import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomMarkerPopup from '../../Components/CustomMarkerPopup';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      hairdressers: [],
      loading: true,
    };
  }

  componentDidMount() {
    let {actions} = this.props;

    actions.getBarbers().then(res => {
      if (res.status === 200) {
        if (res.data.success) {
          this.setState({
            hairdressers: res.data.data,
            loading: false,
          });
        } else alert(res.data.message);
      } else {
        alert(res.data);
      }
    });

    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  } 
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    Alert.alert(
      'Çıkış',
      'Çıkmak istediğinizden emin misiniz?',
      [
        {
          text: 'İptal',
          style: 'cancel',
        },
        {
          text: 'Evet',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      },
    );
    return true;
  };

  render() {
    const {loading, hairdressers} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        {loading ? (
          <View
            style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            <Text>Yükleniyor...</Text>
          </View>
        ) : (
          <View>
            <MapView
              initialRegion={{
                latitude: 41.0117311,
                longitude: 29.1315596,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
              }}
              style={{
                height: '100%',
              }}
              customMapStyle={mapStyle}>
              {hairdressers.map(item => {
                return (
                  <Marker
                    key={item.id}
                    coordinate={{
                      latitude: item.geolocation.latitude,
                      longitude: item.geolocation.longitude,
                    }}
                    image={require('../../assets/images/marker_icon.png')}>
                    <Callout
                      onPress={() =>
                        this.props.navigation.navigate('HairdresserDetails', {
                          id: item.id,
                          title: item.title,
                        })
                      }>
                      <CustomMarkerPopup
                        title={item.title}
                        description={item.mobilePhone}
                      />
                    </Callout>
                  </Marker>
                );
              })}
            </MapView>
            <TouchableOpacity style={styles.btn_leftMenu}>
              <Icon name="bars" size={20} style={styles.icon_leftMenu} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_notification}>
              <Icon name="bell" size={20} style={styles.icon_notification} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_myLocation}>
              <Icon
                name="crosshairs"
                size={20}
                style={styles.icon_myLocation}
              />
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  btn_myLocation: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 15,
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 10,
    marginBottom: 40,
    backgroundColor: 'white',
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon_myLocation: {
    color: 'red',
  },
  btn_leftMenu: {
    position: 'absolute',
    padding: 12,
    borderRadius: 5,
    margin: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon_leftMenu: {
    color: 'black',
  },
  btn_notification: {
    position: 'absolute',
    right: 0,
    padding: 12,
    borderRadius: 5,
    margin: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon_notification: {
    color: 'black',
  },
});

const mapStyle = [
  // {
  //   elementType: 'labels',
  //   stylers: [
  //     {
  //       visibility: 'off',
  //     },
  //   ],
  // },
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];

const mapStateToProps = state => ({
  barberList: state.barberList.barbers,
});

const ActionCreators = Object.assign({}, barberActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
