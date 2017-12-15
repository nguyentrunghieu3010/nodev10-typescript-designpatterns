var SHA256 = require('crypto-js/sha256');
var Block = (function () {
    function Block(index, timestamp, data, previousHash) {
        if (previousHash === void 0) { previousHash = ''; }
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    Block.prototype.calculateHash = function () {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    };
    return Block;
}());
var Blockchain = (function () {
    function Blockchain() {
        this.chain = [this.createGenesisBlock()];
    }
    Blockchain.prototype.createGenesisBlock = function () {
        return new Block(0, '01/01/2017', 'Genesis block', '0');
    };
    Blockchain.prototype.getLatestBlock = function () {
        return this.chain[this.chain.length - 1];
    };
    Blockchain.prototype.addBlock = function (newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    };
    Blockchain.prototype.isChainValid = function () {
        for (var i = 1; i < this.chain.length; i++) {
            var currentBlock = this.chain[i];
            var previousBlock = this.chain[i - 1];
            if (currentBlock.currentHash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash != previousBlock.currentHash) {
                return false;
            }
        }
        return true;
    };
    return Blockchain;
}());
var bitcoin = new Blockchain();
bitcoin.addBlock(new Block(1, "10/07/2017", { amount: 4 }));
bitcoin.addBlock(new Block(2, "12/12/2017", { amount: 10 }));
console.log(JSON.stringify(bitcoin, null, 4));
bitcoin.chain[1].data = { amount: 100 };
bitcoin.chain[1].hash = bitcoin.chain[1].calculateHash();
console.log('Is blockchain valid ? ' + bitcoin.isChainValid());
