import { useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";

export interface ISearchParams {
  [key: string]: string[]

}
export const useQueryParams = () => {
  const [queryParams, setQueryParams] = useState<ISearchParams>({});

  const { replace } = useHistory();
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const newSearch: ISearchParams = {};

    params.forEach((value, key) => {
      if (newSearch[key]) {
        const isAlready = newSearch[key].some(item => item === value);
        if (!isAlready) {
          newSearch[key] = [...newSearch[key], value];
        }
      } else {
        newSearch[key] = [value];
      }
    });

    setQueryParams(newSearch);
  }, [search]);

  const updateParams = useCallback((newParams: ISearchParams) => {
    const params = new URLSearchParams(search);
    for (const [key, arrValues] of Object.entries(newParams)) {
      params.delete(key);
      arrValues.forEach((value) => {
        params.append(key, value);
      });
    }
    replace({ search: params.toString() });
  }, [replace, search]);

  const getParam = useCallback((key: string): string[] => {
    return queryParams[key] || [];
  }, [queryParams]);

  return {
    getParam,
    updateParams,
  };
};