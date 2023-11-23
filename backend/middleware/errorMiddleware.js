const notFound = (req, res, next) => {
  const error = new Error(`Not found resources in URL: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export { notFound };
