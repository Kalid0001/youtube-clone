import axios from "axios";
import request from "../../api";
import {
  CHANNEL_DETAILS_FAIL,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  SET_SUBSCRIPTION_STATUS,
  SUBSCRIPTIONS_CHANNEL_REQUEST,
  SUBSCRIPTIONS_CHANNEL_SUCCESS,
  SUBSCRIPTIONS_CHANNEL_FAIL,
  SUBSCRIBE_CHANNEL_REQUEST,
  SUBSCRIBE_CHANNEL_SUCESS,
  SUBSCRIBE_CHANNEL_FAIL,
} from "../actionTypes";

export const getChannelDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CHANNEL_DETAILS_REQUEST,
    });

    const { data } = await request("/channels", {
      params: {
        part: "snippet,statistics,contentDetails",
        id,
      },
    });
    dispatch({
      type: CHANNEL_DETAILS_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: CHANNEL_DETAILS_FAIL,
      payload: error.response.data,
    });
  }
};

export const checkSubscriptionStatus = (id) => async (dispatch, getState) => {
  //the api is not working
  try {
    const { data } = await request("/subscriptions", {
      params: {
        part: "snippet",
        forChannelId: id,
        mine: true,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    dispatch({
      type: SET_SUBSCRIPTION_STATUS,
      payload: data.items.length !== 0,
    });
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getSubscriptionChannel = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUBSCRIPTIONS_CHANNEL_REQUEST,
    });
    const { data } = await request("/subscriptions", {
      params: {
        part: "snippet,contentDetails",

        mine: true,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    dispatch({
      type: SUBSCRIPTIONS_CHANNEL_SUCCESS,
      payload: data.items.length !== 0,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: SUBSCRIPTIONS_CHANNEL_FAIL,
      payload: error.response.data,
    });
  }
};

export const subscribeChannel = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUBSCRIBE_CHANNEL_REQUEST,
    });

    const { data } = await axios.post(
      "https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&altjson&key=AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U",
      {
        snippet: {
          resourceId: {
            kind: "youtube#channel",
            channelId: "UC0YatYmg5JRYzXJPxIdRd8g",
          },
        },
      },
      {
        headers: {
          accessToken:
            "eyJhbGciOiJSUzI1NiIsImtpZCI6ImM4MjNkMWE0MTg5ZjI3NThjYWI4NDQ4ZmQ0MTIwN2ViZGZhMjVlMzkiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQ2FybCBHcmVlbiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BR05teXhZRHhtaFRjd2Vkd3M0NDdwdF8zMEZWS3F6UXNxdlQxUFVRUF8waj1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS95b3V0LWZiYmQyIiwiYXVkIjoieW91dC1mYmJkMiIsImF1dGhfdGltZSI6MTY4MTIxNTQ4NywidXNlcl9pZCI6IkRERXB2QVc0ZGJRNkczZlVrbVJFNmVGbGs1cDEiLCJzdWIiOiJEREVwdkFXNGRiUTZHM2ZVa21SRTZlRmxrNXAxIiwiaWF0IjoxNjgxMjE1NDg3LCJleHAiOjE2ODEyMTkwODcsImVtYWlsIjoiZ3JlZW5jYXJsNzgxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTE2OTE3ODAyMTczMDE2OTU5MTkzIl0sImVtYWlsIjpbImdyZWVuY2FybDc4MUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.R6N6XNQtwqIMrvohrIlWegVAiEnZghCrl7QfAHWGm4hU8_DxoN_NxM5aEsMRr6mVRvKFdlpZ35MZEPVmOiz2Pox-2akxRuGYR8ILF8HDKq6_ljIikoJ4QcmBDi06Lf6MyVztvlFLsm1NRU8Hyw_xodIlAWkZGF5vfy6vkDtXq9KxEvsUV0jPqkHnvGCr-Y1RaZEFmjRNFV9WzwVLwRM3l5ih2-QstOKeZyqwQd14CJj-xMTpzh3IC6wUmlpp8tCTVyTZZs25Gz2pMEmZTMMXIjDwKiOWAoq7qx_ouxqNwFxVCA53QtNcVzqWRFJsqgFuJ_3U22NVC8Oi-K5LZ7K8mQ",
        },
      }
    );
    dispatch({
      type: SUBSCRIBE_CHANNEL_SUCESS,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SUBSCRIBE_CHANNEL_FAIL,
    });
  }
};
