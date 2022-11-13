var expect = chai.expect

describe('shuffleDeck', function() {
    describe('#shuffleDeck', function() {
        it('should shuffle the deck', function() {
            var x = shuffleDeck(deck)
            expect(x).to.equal(deck)
        })
    })
})