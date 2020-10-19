
import axios from "axios";
import { fetchData, API } from './fetchdata';
jest.mock('axios');
describe('fetchData', () => {


  //Test Case 1
  it('fetch all the rgb color from the api', async () => {
    const data = {
      headers: {
        Authorization: "&*^&^&%$fdffgfgeEEEWE#@"
      }
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(fetchData()).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(
      `${API}/?limit=32768`,
    );
  });

  //Test Case 2
    it('Getting error while fetching the rgb color from the api', async () => {
      const errorMessage = 'Network Error';
      axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
      );
    });
});
