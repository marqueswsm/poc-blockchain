# Blockchain

It is a simple blockchain proof of concept. I am creating this project using [these amazing videos as a reference](https://www.youtube.com/watch?v=zVqczFZr124).

[In developement] This project still in developement, but I will add some instructions about how to use the app.

You can create a new blockchain:
```
const coin = new Blockchain();
```

And than adding a new block to the created blockchain:
```
coin.addBlock(new Block(1, '05/11/2022', { amunt: 100.00 }));
```

You can also check if the blockchain is valid calling the function checkChain: 
```
coin.checkChain() // The return will be true or false
```