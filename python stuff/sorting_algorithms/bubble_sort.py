import matplotlib.pyplot as plt
import matplotlib.animation as animation

def bubble_sort(arr):
    steps = [(arr.copy(), [])]
    operations = 0
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                operations += 1
            steps.append((arr.copy(), [j, j + 1]))
        steps.append((arr.copy(), []))
    return steps, operations

def animate_bubble_sort(arr, interval=1):
    steps, operations = bubble_sort(arr)
    fig, ax = plt.subplots()
    bar_rects = ax.bar(range(len(arr)), arr, align="edge")
    ax.set_xlim(0, len(arr))
    ax.set_ylim(0, int(1.1 * max(arr)))

    def update_fig(step):
        arr, indices = step
        for rect, val in zip(bar_rects, arr):
            rect.set_height(val)
            rect.set_color("blue")
        if indices:
            bar_rects[indices[0]].set_color("red")
            bar_rects[indices[1]].set_color("yellow")
        return bar_rects

    ani = animation.FuncAnimation(fig, update_fig, frames=steps, repeat=False, interval=interval, blit=True)
    plt.show()
    
    return operations

# Example usage:
# arr = [5, 3, 8, 6, 2]
# animate_bubble_sort(arr)
