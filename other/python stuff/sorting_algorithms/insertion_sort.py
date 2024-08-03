import matplotlib.pyplot as plt
import matplotlib.animation as animation

def insertion_sort(arr):
    steps = [(arr.copy(), [])]
    operations = 0
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            steps.append((arr.copy(), [j, j + 1]))
            j -= 1
            operations += 1
        arr[j + 1] = key
        steps.append((arr.copy(), [j + 1]))
    steps.append((arr.copy(), []))
    return steps, operations

def animate_insertion_sort(arr, interval=1):
    steps, operations = insertion_sort(arr)
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
            if len(indices) > 1:
                bar_rects[indices[1]].set_color("yellow")
        return bar_rects

    ani = animation.FuncAnimation(fig, update_fig, frames=steps, repeat=False, interval=interval, blit=True)
    plt.show()
    
    return operations

# Example usage:
# arr = [5, 3, 8, 6, 2]
# animate_insertion_sort(arr)
