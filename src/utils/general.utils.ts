export const extractNumberFromUrl = (url: string) => {
  const match = url.match(/people\/(\d+)\//);
  if (match) {
    return match[1];
  }
  return undefined;
};
