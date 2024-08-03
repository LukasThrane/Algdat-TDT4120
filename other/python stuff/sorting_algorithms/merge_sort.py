import matplotlib.pyplot as plt
import matplotlib.animation as animation

def merge_sort(arr, steps):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        merge_sort(L, steps)
        merge_sort(R, steps)

        i = j = k = 0

        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            steps.append((arr.copy(), [k]))
            k += 1

        while i < len(L):
            arr[k] = L[i]
            i += 1
            steps.append((arr.copy(), [k]))
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            steps.append((arr.copy(), [k]))
            k += 1
    return arr

def animate_merge_sort(arr, interval=1):
    steps = []
    merge_sort(arr, steps)
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
        return bar_rects

    ani = animation.FuncAnimation(fig, update_fig, frames=steps, repeat=False, interval=interval, blit=True)
    plt.show()
    
    return len(steps)

# Example usage:
# arr = [5, 3, 8, 6, 2]
# animate_merge_sort(arr)
