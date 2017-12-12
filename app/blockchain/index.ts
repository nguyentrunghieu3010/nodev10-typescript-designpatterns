const SHA256 = require('crypto-js/sha256');

class Block {

    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.currenHash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain {

    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, '01/01/2017', 'Genesis block', '0');
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().currenHash;
        newBlock.currenHash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

let bitcoin = new Blockchain();
bitcoin.addBlock(new Block(1, "10/07/2017", {amount: 4}));
bitcoin.addBlock(new Block(2, "12/12/2017", {amount: 10}));

console.log(JSON.stringify(bitcoin, null, 4));