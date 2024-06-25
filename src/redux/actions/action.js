import axios from "axios";
import { USER_LIST } from "../actionType"


export const userListAction = () => async (dispatch) => {
    try {
       const GET_URL = 'https://jsonplaceholder.typicode.com/users'
      axios
            .get(GET_URL)
            .then(function (response) {
                dispatch({
                    type: USER_LIST,
                    payload: response.data
                })

            });
    } catch (err) {
      throw new Error(err)
    }
  };
  