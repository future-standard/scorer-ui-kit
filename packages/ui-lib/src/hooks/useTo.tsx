import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useTo = ()=>{
  const navigate = useNavigate();
  const to = useCallback((url: string) => () => navigate(url),[navigate]);
  return to;
};