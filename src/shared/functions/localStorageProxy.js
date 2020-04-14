
class localStorageProxy {
  static setItem(key, value) {
    localStorage.setItem(key, value);
  }

  static removeItem(key) {
    localStorage.removeItem(key);
  }

  static getItem(key) {
    return localStorage.getItem(key);
  }
}

export default localStorageProxy;
