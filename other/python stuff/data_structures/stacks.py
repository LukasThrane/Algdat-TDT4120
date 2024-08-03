class Stack:
    def __init__(self):
        self.stack = []
        self.size = 0
    
    def is_empty(self):
        return self.size == 0

    def push(self, value):
        self.stack[self.size] = value
        self.size += 1
    
    def pop(self):
        self.stack[self.size] = None
        self.size -= 1