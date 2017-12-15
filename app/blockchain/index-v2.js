var SHA256 = require('crypto-js/sha256');
var Block = (function () {
    function Block(index, timestamp, data, previousHash) {
        if (previousHash === void 0) { previousHash = ''; }
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = '';
        this.nonce = 0;
    }
    Block.prototype.calculateHash = function () {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    };
    Block.prototype.mineBlock = function (difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block mined: " + this.hash);
    };
    return Block;
}());
var Blockchain = (function () {
    function Blockchain() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 5;
    }
    Blockchain.prototype.createGenesisBlock = function () {
        return new Block(0, "01/01/2017", "Genesis block", "0");
    };
    Blockchain.prototype.getLatestBlock = function () {
        return this.chain[this.chain.length - 1];
    };
    Blockchain.prototype.addBlock = function (newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    };
    Blockchain.prototype.isChainValid = function () {
        for (var i = 1; i < this.chain.length; i++) {
            var currentBlock = this.chain[i];
            var previousBlock = this.chain[i - 1];
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    };
    return Blockchain;
}());
var bitcoin = new Blockchain();
console.log('Mining block 1 ......');
bitcoin.addBlock(new Block(1, "10/10/2017", { amount: 4 }));
console.log('Mining block 2....');
bitcoin.addBlock(new Block(2, "12/12/2017", { amount: 8 }));
