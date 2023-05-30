const { Queue } = require('../stack-and-queue/index');

describe('Queue', () => {
  test('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);

    expect(queue.front.value).toEqual(1);
    expect(queue.front.next).toBeNull();
  });


  test('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);

    expect(queue.front.value).toEqual(1);
    expect(queue.front.next).toBeNull();

    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);


    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next.value).toEqual(3);
    expect(queue.front.next.next.next.value).toEqual(4);
    expect(queue.front.next.next.next.next).toBeNull();
  });
