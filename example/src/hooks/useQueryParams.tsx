import { useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";

export const useQueryParams = () => {
  const [queryParams, setQueryParams] = useState<URLSearchParams>(new URLSearchParams());

  const { push } = useHistory();
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    setQueryParams(params);
  }, [search]);

  const updateParam = useCallback((key, value) => {
    const strValue = value.toString();
    if (queryParams.get(key) === strValue) return;

    if (strValue === '') {
      queryParams.delete(key);
    } else {
      queryParams.set(key, value);
    }

    push({ search: queryParams.toString() });
  }, [push, queryParams]);

  const getParam = useCallback((key: string): string => {
    return queryParams.get(key) || '';
  }, [queryParams]);

  return {
    updateParam,
    getParam,
    search,
  };
};