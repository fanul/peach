/** 请求失败使用统一的中文原因，不初始化界面或路由状态。 */
export function requestErrorMessage(cause:any,status=0):string{
  const text=String(cause?.message??cause??'');
  const code=Number(status||cause?.status||text.match(/\b(400|401|403|404|408|409|413|429|500|502|503|504)\b/)?.[1]);
  const messages:Record<number,string>={400:'The submitted content is invalid. Check your input and try again.',401:'Your session has expired. Refresh the page and sign in again.',403:'This device does not have permission to perform this action. Try it on the computer running Peach.',404:'The requested content no longer exists. Refresh the list.',408:'The request timed out. Try again later.',409:'This action is not allowed in the current state. Refresh and try again.',413:'The submitted content is too large. Reduce its size and try again.',429:'Too many requests. Try again later.',500:'Peach could not process the request. Try again; if the problem persists, check the tray logs.',502:'Peach could not retrieve a response. Try again later; if the problem persists, check the tray logs.',503:'Peach is temporarily unavailable. Try again later.',504:'The service took too long to respond. Try again later.'};
  if(/Failed to fetch|fetch failed|NetworkError|Load failed|network request failed|ERR_CONNECTION/i.test(text))return 'Unable to connect to Peach. Check your network connection and make sure the tray service is running.';
  /* 正文里的 timeout 字样只在没有状态码时才算超时：500 的堆栈里常带着某个库的 timeout 参数名。 */
  if(cause?.name==='TimeoutError'||(!code&&/timed? ?out|timeout/i.test(text)))return 'The service took too long to respond. Check your connection and try again.';
  if(/[㐀-鿿]/.test(text))return 'The operation could not be completed. Try again; if the problem persists, check the tray logs.';
  if(messages[code])return messages[code];
  return 'The operation could not be completed. Try again; if the problem persists, check the tray logs.';
}
