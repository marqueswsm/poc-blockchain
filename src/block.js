const { SHA256 } = require('crypto-js');

class Block {
  constructor(index, timestamp, data, previusHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previusHash = previusHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(this.index + this.previusHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

module.exports = Block;