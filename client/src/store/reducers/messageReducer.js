const initialState = {
  messages: [
    { isThisMessageSendByClient: true, text: 'message by< user 1' },
    { isThisMessageSendByClient: true, text: 'das dqseq dasd qgdsf qsdq sdagasdf dfasdf wfkdsf skfqsdkasdka kasdkadk' },
    { isThisMessageSendByClient: false, text: 'das dqseq dasd qgdsf qsdq sdagasdf dfasdf wfkdsf skfqsdkasdka kasdkadk' },
    { isThisMessageSendByClient: false, text: 'message by user 1' },
    { isThisMessageSendByClient: true, text: 'message' },
    { isThisMessageSendByClient: false, text: 'by' },
    { isThisMessageSendByClient: false, text: 'by user 1 yes' },
    { isThisMessageSendByClient: true, text: '1' },
  ]
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      let array = [...state.messages];

      let text = action.payload[0];
      let whoSend = action.payload[1];

      array.push({ text: text, isThisMessageSendByClient: whoSend });

      return {
        ...state,
        messages: array,
      };
  }
  return state;
}
export default messageReducer;