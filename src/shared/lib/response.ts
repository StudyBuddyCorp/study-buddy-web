export interface Response<T> {
  _embedded: T;
  _links: {
    _self: T;
  };
}
