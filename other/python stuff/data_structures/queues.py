class Queue:
    def __init__(self):
        self.queue = []
        self.head = 0
        self.tail = 0
    
    def is_empty(self):
        return self.head == self.tail

    def enqueue(self, value):
        self.queue[self.tail] = value
        self.tail += 1
    
    def dequeue(self):
        if self.is_empty():
            return None
        value = self.queue[self.head]
        self.head += 1
        return value
