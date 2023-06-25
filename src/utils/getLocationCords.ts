import axios, {AxiosError, AxiosResponse} from 'axios';

export default async function getLocationCords(input: string) {
  const formattedInput = input.toLowerCase();

  try {
    const response: AxiosResponse = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${formattedInput}&limit=5&appid=${process.env.API_KEY}`, // up to 5 responds(
    );

    return response.data;
  } catch (error: AxiosError) {
    throw new Error(error);
  }
}
