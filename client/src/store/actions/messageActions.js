export const sendMessage = (message, isThisMessageSendByClient) => {
  return {
    type: 'SEND_MESSAGE',
    payload: [message, isThisMessageSendByClient],
  }
}