import random
import matplotlib.pyplot as plt
import matplotlib.animation as animation

MAX_ITERATIONS = 10000  # Maximum iterations to prevent freezing

def is_sorted(arr):
    for i in range(1, len(arr)):
        if arr[i] < arr[i - 1]:
            return False
    return True

def bogo_sort(arr):
    steps = [(arr.copy(), [])]
    operations = 0

    while not is_sorted(arr) and operations < MAX_ITERATIONS:
        random.shuffle(arr)
        operations += 1
        steps.append((arr.copy(), []))

    steps.append((arr.copy(), []))
    return steps, operations

def animate_bogo_sort(arr, interval=1):
    steps, operations = bogo_sort(arr)
    fig, ax = plt.subplots()
    bar_rects = ax.bar(range(len(arr)), arr, align="edge")
    ax.set_xlim(0, len(arr))
    ax.set_ylim(0, int(1.1 * max(arr)))

    def update_fig(step):
        arr, _ = step
        for rect, val in zip(bar_rects, arr):
            rect.set_height(val)
            rect.set_color("blue")
        return bar_rects

    ani = animation.FuncAnimation(fig, update_fig, frames=steps, repeat=False, interval=interval, blit=True)
    plt.show()

    return operations
