interface Error {
  path: string;
  message: string;
}

// Normalize our error array (ex: [{path: 'email', message: 'inval...'}] )
// Transforms to {email: 'inval...'}
export const normalizeErrors = (errors: Error[]) => {
  const errMap: { [key: string]: string } = {};

  errors.forEach(err => {
    errMap[err.path] = err.message;
  });
  return errMap;
};
