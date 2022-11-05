const Block = require('./src/block');
const Blockchain = require('./src/blockchain');

const wagCoin = new Blockchain();
wagCoin.addBlock(new Block(1, '05/11/2022', { amunt: 100.00 }));
wagCoin.addBlock(new Block(2, '05/11/2022', { amunt: 200.00 }));

console.log('Is block chain valid?', wagCoin.checkChain());
wagCoin.chain[1].data = { amount: 300.00 };
wagCoin.chain[1].hash = new Block().calculateHash();

console.log('Is this block chain still valid?', wagCoin.checkChain());
// console.log(JSON.stringify(wagCoin));