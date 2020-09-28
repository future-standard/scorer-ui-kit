import { useCallback } from "react";
import { useHistory } from "react-router-dom";

export const useTo = ()=>{
  const history = useHistory();
  const to = useCallback((url: string) => () => history.push(url),[history]);
  return to;
};