export const matchPath = (path: string, pattern: string): boolean => {
  const escaped = pattern.replace(/([.+?^=!:${}()|\[\]\/\\])/g, '\\$1');

  const regexString = '^' + escaped.replace(/\\:([^\/\\]+)/g, '[^/]+') + '$';

  return new RegExp(regexString).test(path);
};
