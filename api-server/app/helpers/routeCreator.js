export const post = (url, handler, next) => ({
  method: "POST",
  url,
  handler,
  next,
});

export const get = (url, handler, next) => ({
  method: "GET",
  url,
  handler,
  next,
});

export const del = (url, handler, next) => ({
  method: "DELETE",
  url,
  handler,
  next,
});

export const patch = (url, handler, next) => ({
  method: "PATCH",
  url,
  handler,
  next,
});

export const put = (url, handler, next) => ({
  method: "PUT",
  url,
  handler,
  next,
});
