export 默认 {
  async fetch(request， env) {
    const url = new URL(request。url);
    if (url。pathname。startsWith('/')) {
      url。hostname = cf-shsus。256709394。xyz;
      const new_request = new Request(url， request);
      return fetch(new_request);
    }
    return env。ASSETS。fetch(request);
  }，
};
