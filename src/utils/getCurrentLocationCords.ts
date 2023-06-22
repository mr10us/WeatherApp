import Geolocation, { GeolocationError, GeolocationResponse } from "@react-native-community/geolocation";

/**
 *
 * @returns Latitude - Array[0], Longitude – Array[1]
 */
export default async function getCurrentLocationCords(): Promise<[number, number]> {
    try {
      const info: GeolocationResponse = await new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(resolve, reject);
      });
      return [info.coords.latitude, info.coords.longitude];
    } catch (error: GeolocationError | any) {
      throw new Error(error.message);
    }
  }