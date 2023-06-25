import Geolocation, {
  GeolocationError,
  GeolocationResponse,
} from '@react-native-community/geolocation';


export default async function getCurrentLocationCords(): Promise<ICords> {
  try {
    const info: GeolocationResponse = await new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(resolve, reject);
    });
    return {cords: {lat: info.coords.latitude, lon: info.coords.longitude}};
  } catch (error: GeolocationError | any) {
    throw new Error(error.message);
  }
}
