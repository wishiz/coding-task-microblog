const fakeAuth = {
  isAuthorized: false,
  authorize(cb) {
    fakeAuth.isAuthorized = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthorized = false;
    setTimeout(cb, 100);
  },
};

export default fakeAuth;
