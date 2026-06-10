class LRUCache {
  constructor(size) {
    this.cache = [];
    this.size = size;
  }

  push(val) {
    const index = this.getIndex(val);
    if (this.cache.length < 4) {
      if (index !== -1) {
        this.cache.splice(index, 1);
      }
      this.cache.unshift(val);
    } else {
      if (index !== -1) {
        this.cache.splice(index, 1);
      } else {
        this.cache.splice(this.size - 1, 1);
      }
      this.cache.unshift(val);
    }
  }

  getIndex(val) {
    return this.cache.findIndex((cVal) => val === cVal);
  }
}

const lCache = new LRUCache();
