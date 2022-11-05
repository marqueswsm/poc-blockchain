const Block = require("./block");

class Blockchain {
  constructor() {
    this.chain = [this.createFirstBlock()];
  }

  createFirstBlock() {
    return new Block(0, '05/11/2022', 'First Block', 'R$ 0,00')
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(block) {
    block.previusHash = this.getLastBlock().hash;
    block.hash = block.calculateHash();

    this.chain.push(block);
  }

  checkChain() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previusBlock = this.chain[i - 1];

      if(currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previusHash !== previusBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

module.exports = Blockchain;