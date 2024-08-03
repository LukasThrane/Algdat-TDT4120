import tkinter as tk
from tkinter import ttk
import random
import numpy as np
from scipy.optimize import curve_fit
from sorting_algorithms.insertion_sort import animate_insertion_sort, insertion_sort
from sorting_algorithms.bubble_sort import animate_bubble_sort, bubble_sort
from sorting_algorithms.merge_sort import animate_merge_sort, merge_sort
from sorting_algorithms.bogo_sort import animate_bogo_sort, bogo_sort
from data_structures.stacks import Stack
from data_structures.queues import Queue
from sorting_algorithms.animation_utils import animate_stack_operations, animate_queue_operations

def generate_array(length):
    return [random.randint(1, 100) for _ in range(length)]

def measure_operations(algorithm, size):
    arr = generate_array(size)
    if algorithm == "Insertion Sort":
        _, operations = insertion_sort(arr)
    elif algorithm == "Bubble Sort":
        _, operations = bubble_sort(arr)
    elif algorithm == "Merge Sort":
        _, operations = merge_sort(arr, [])
    elif algorithm == "Bogo Sort":
        _, operations = bogo_sort(arr)
    return operations

def estimate_complexity(algorithm):
    sizes = np.array([10, 20, 50, 100])
    operations = np.array([measure_operations(algorithm, size) for size in sizes])

    # Define potential complexity functions
    def linear(n, a): return a * n
    def quadratic(n, a): return a * n**2
    def cubic(n, a): return a * n**3
    def logarithmic(n, a): return a * np.log(n)
    def n_log_n(n, a): return a * n * np.log(n)
    def factorial(n, a): return a * np.array([np.math.factorial(x) for x in n], dtype=np.float64)

    complexities = {
        "O(n)": linear,
        "O(n^2)": quadratic,
        "O(n^3)": cubic,
        "O(log(n))": logarithmic,
        "O(n log(n))": n_log_n,
        "O(n!)": factorial
    }

    best_fit = None
    min_error = float('inf')

    for name, func in complexities.items():
        try:
            popt, _ = curve_fit(func, sizes, operations, maxfev=10000)
            fitted_operations = func(sizes, *popt)
            error = np.mean((fitted_operations - operations) ** 2)
            if error < min_error:
                min_error = error
                best_fit = name
        except Exception as e:
            continue

    return best_fit

def run_sorting_algorithm(algorithm, array_length, interval, runs):
    total_operations = 0
    for _ in range(runs):
        arr = generate_array(array_length)
        if algorithm == "Insertion Sort":
            _, operations = insertion_sort(arr)
        elif algorithm == "Bubble Sort":
            _, operations = bubble_sort(arr)
        elif algorithm == "Merge Sort":
            _, operations = merge_sort(arr, [])
        elif algorithm == "Bogo Sort":
            _, operations = bogo_sort(arr)
        total_operations += operations
    if runs > 0:
        average_operations = total_operations / runs
    else:
        average_operations = 0

    return average_operations

def start_sorting():
    algorithm = algorithm_var.get()
    length = int(length_var.get())
    interval = float(interval_var.get())
    runs = int(runs_var.get())
    interval = max(1, int(interval))  # Ensure interval is at least 1 millisecond

    # Reset counters
    operations = 0

    # Visualize sorting once
    arr = generate_array(length)
    if algorithm == "Insertion Sort":
        operations = animate_insertion_sort(arr, interval)
    elif algorithm == "Bubble Sort":
        operations = animate_bubble_sort(arr, interval)
    elif algorithm == "Merge Sort":
        operations = animate_merge_sort(arr, interval)
    elif algorithm == "Bogo Sort":
        operations = animate_bogo_sort(arr, interval)
    else:
        print("Unknown algorithm. Please choose a valid algorithm.")
        return

    if runs > 1:
        # Run additional sortings in the background
        average_operations = run_sorting_algorithm(algorithm, length, interval, runs - 1)
    else:
        average_operations = operations

    time_complexity = estimate_complexity(algorithm)

    results_label.config(text=f"Sorting completed with {operations} operations\n"
                              f"Estimated Time Complexity: {time_complexity}\n"
                              f"Total Sortings Completed: {runs}\n"
                              f"Average Operations: {average_operations:.2f}")

def start_data_structure():
    structure = structure_var.get()
    operations = []
    if structure == "Stack":
        operations = [("push", random.randint(1, 10)) for _ in range(5)] + [("pop", None) for _ in range(5)]
        animate_stack_operations(operations)
    elif structure == "Queue":
        operations = [("enqueue", random.randint(1, 10)) for _ in range(5)] + [("dequeue", None) for _ in range(5)]
        animate_queue_operations(operations)
    else:
        print("Unknown data structure. Please choose a valid structure.")
        return

def show_sorting_interface():
    for widget in root.winfo_children():
        widget.destroy()

    tk.Label(root, text="Choose Sorting Algorithm:").grid(row=0, column=0, padx=10, pady=10)
    algorithm_menu = ttk.Combobox(root, textvariable=algorithm_var)
    algorithm_menu['values'] = ("Insertion Sort", "Bubble Sort", "Merge Sort", "Bogo Sort")
    algorithm_menu.grid(row=0, column=1, padx=10, pady=10)
    algorithm_menu.current(0)

    tk.Label(root, text="Array Length:").grid(row=1, column=0, padx=10, pady=10)
    length_entry = tk.Entry(root, textvariable=length_var)
    length_entry.grid(row=1, column=1, padx=10, pady=10)
    length_var.set("10")

    tk.Label(root, text="Animation Interval (ms):").grid(row=2, column=0, padx=10, pady=10)
    interval_entry = tk.Entry(root, textvariable=interval_var)
    interval_entry.grid(row=2, column=1, padx=10, pady=10)
    interval_var.set("1")

    tk.Label(root, text="Number of Runs:").grid(row=3, column=0, padx=10, pady=10)
    runs_entry = tk.Entry(root, textvariable=runs_var)
    runs_entry.grid(row=3, column=1, padx=10, pady=10)
    runs_var.set("100")

    start_button = tk.Button(root, text="Start Sorting", command=start_sorting)
    start_button.grid(row=4, columnspan=2, pady=10)

    global results_label
    results_label = tk.Label(root, text="")
    results_label.grid(row=5, columnspan=2, pady=10)

def show_data_structure_interface():
    for widget in root.winfo_children():
        widget.destroy()

    tk.Label(root, text="Choose Data Structure:").grid(row=0, column=0, padx=10, pady=10)
    structure_menu = ttk.Combobox(root, textvariable=structure_var)
    structure_menu['values'] = ("Stack", "Queue")
    structure_menu.grid(row=0, column=1, padx=10, pady=10)
    structure_menu.current(0)

    start_button = tk.Button(root, text="Start Operations", command=start_data_structure)
    start_button.grid(row=1, columnspan=2, pady=10)

root = tk.Tk()
root.title("Algorithm and Data Structure Visualization")

algorithm_var = tk.StringVar()
length_var = tk.StringVar()
interval_var = tk.StringVar()
runs_var = tk.StringVar()
structure_var = tk.StringVar()

main_menu = tk.Menu(root)
root.config(menu=main_menu)

algorithm_menu = tk.Menu(main_menu, tearoff=0)
main_menu.add_cascade(label="Sorting Algorithms", menu=algorithm_menu)
algorithm_menu.add_command(label="Visualize", command=show_sorting_interface)

data_structure_menu = tk.Menu(main_menu, tearoff=0)
main_menu.add_cascade(label="Data Structures", menu=data_structure_menu)
data_structure_menu.add_command(label="Visualize", command=show_data_structure_interface)

root.mainloop()
