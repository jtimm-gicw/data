const { LinkedList, Node } = require('./insert');

describe('LinkedList', () => {
    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    });

    test('Can successfully add a node to the end of the linked list', () => {
        linkedList.append(1);
        expect(linkedList.head.value).toBe(1);
    });

    test('Can successfully add multiple nodes to the end of a linked list', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        expect(linkedList.head.value).toBe(1);
        expect(linkedList.head.next.value).toBe(2);
        expect(linkedList.head.next.next.value).toBe(3);
    });

    test('Can successfully insert a node before a node located in the middle of a linked list', () => {
        linkedList.append(1);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.insertBefore(3, 2);
        expect(linkedList.head.next.value).toBe(2);
    });

    test('Can successfully insert a node before the first node of a linked list', () => {
        linkedList.append(2);
        linkedList.insertBefore(2, 1);
        expect(linkedList.head.value).toBe(1);
    });

    test('Can successfully insert after a node in the middle of the linked list', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(4);
        linkedList.insertAfter(2, 3);
        expect(linkedList.head.next.next.value).toBe(3);
    });

    test('Can successfully insert a node after the last node of the linked list', () => {
        linkedList.append(1);
        linkedList.append(2);
        linkedList.insertAfter(2, 3);
        expect(linkedList.head.next.next.value).toBe(3);
    });
});
 