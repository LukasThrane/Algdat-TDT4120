import matplotlib.pyplot as plt
import matplotlib.animation as animation

def animate_stack_operations(operations, interval=500):
    fig, ax = plt.subplots()
    stack = []
    bar_rects = ax.bar(range(10), [0]*10, align="edge")
    ax.set_ylim(0, 10)

    def update_fig(frame):
        operation, value = operations[frame]
        if operation == "push":
            stack.append(value)
        elif operation == "pop" and stack:
            stack.pop()
        for rect, val in zip(bar_rects, stack + [0]*(10-len(stack))):
            rect.set_height(val)
        return bar_rects

    ani = animation.FuncAnimation(fig, update_fig, frames=len(operations), interval=interval, blit=True, repeat=False)
    plt.show()

def animate_queue_operations(operations, interval=500):
    fig, ax = plt.subplots()
    queue = []
    bar_rects = ax.bar(range(10), [0]*10, align="edge")
    ax.set_ylim(0, 10)

    def update_fig(frame):
        operation, value = operations[frame]
        if operation == "enqueue":
            queue.append(value)
        elif operation == "dequeue" and queue:
            queue.pop(0)
        for rect, val in zip(bar_rects, queue + [0]*(10-len(queue))):
            rect.set_height(val)
        return bar_rects

    ani = animation.FuncAnimation(fig, update_fig, frames=len(operations), interval=interval, blit=True, repeat=False)
    plt.show()
