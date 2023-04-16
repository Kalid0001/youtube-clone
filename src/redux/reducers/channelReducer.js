import {
  CHANNEL_DETAILS_FAIL,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  SET_SUBSCRIPTION_STATUS,
  SUBSCRIBE_CHANNEL_FAIL,
  SUBSCRIBE_CHANNEL_REQUEST,
  SUBSCRIBE_CHANNEL_SUCESS,
  SUBSCRIPTIONS_CHANNEL_REQUEST,
} from "../actionTypes";

export const channelDetailsReducer = (
  state = {
    loading: true,
    channel: {},
    subscriptionStatus: false,
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case CHANNEL_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CHANNEL_DETAILS_SUCCESS:
      return {
        ...state,
        channel: payload,
        loading: false,
      };
    case CHANNEL_DETAILS_FAIL:
      return {
        ...state,
        channel: null,
        loading: false,
        error: payload,
      };
    case SET_SUBSCRIPTION_STATUS:
      return {
        ...state,
        subscriptionStatus: payload,
      };
    default:
      return state;
  }
};

export const subscribeChannelReducer = (
  state = {
    loading: true,
    channelId: null,
    subscribed: false,
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case SUBSCRIBE_CHANNEL_REQUEST:
      return { ...state, loading: true };

    case SUBSCRIBE_CHANNEL_SUCESS: {
      return { ...state, loading: false };
    }
    case SUBSCRIBE_CHANNEL_FAIL: {
      return { ...state, loading: false };
    }
  }
};
