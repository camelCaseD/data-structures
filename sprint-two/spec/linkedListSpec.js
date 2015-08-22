describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property("head");
    expect(linkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a("function");
    expect(linkedList.removeHead).to.be.a("function");
    expect(linkedList.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  describe('doubly', function() {
    beforeEach(function() {
      doubly = DoublyLinkedList();
    });

    it('shourld have methods named "addToHead"  and "removeTail"', function() {
      expect(doubly.addToHead).to.be.a("function");
      expect(doubly.removeTail).to.be.a("function");
    });

    it('should have a property called "previous"', function() {
      doubly.addToHead(1);
      expect(doubly.tail).to.have.property("previous");
    });

    it('should be linked to another node', function() {
      doubly.addToHead(2);
      doubly.addToHead(3);
      expect(doubly.tail.previous.value).to.equal(3);
    });

    it('should be able to de-link from another node', function() {
      doubly.addToHead(3);
      doubly.addToHead(4);
      expect(doubly.tail.previous.value).to.equal(4);
      expect(doubly.removeTail()).to.equal(3);
      expect(doubly.tail.previous).to.equal(null);
    });
  });

  // add more tests here to test the functionality of linkedList
});
