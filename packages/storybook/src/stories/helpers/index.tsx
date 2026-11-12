export const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

// argTypes entry for a prop the scene sets itself: no control, the docs table shows the summary.
export const sceneOnly = (summary: string, detail?: string) => ({
  control: false as const,
  table: { defaultValue: { summary, detail } },
});

// The object controls edit JSON, so an edited value comes back with ISO strings where the
// component expects Dates. Apply it to date-bearing fields only; any other string becomes Invalid Date.
export const withDates = <T,>(value: T): T => {
  if (typeof value === 'string') return new Date(value) as T;
  if (Array.isArray(value)) return value.map((item) => withDates(item)) as T;
  if (value && typeof value === 'object' && !(value instanceof Date)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, withDates(item)])
    ) as T;
  }
  return value;
};
