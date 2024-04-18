def add_task(todo_list, task):
    todo_list.append({"task": task, "completed": False})
    print("Task added successfully!")

def delete_task(todo_list, task_index):
    if task_index >= 0 and task_index < len(todo_list):
        del todo_list[task_index]
        print("Task deleted successfully!")
    else:
        print("Invalid task index!")

def display_tasks(todo_list):
    print("To-Do List:")
    for index, task in enumerate(todo_list):
        print(f"{index + 1}. [{task['completed'] and 'X' or ' '}] {task['task']}")

def mark_task_complete(todo_list, task_index):
    if task_index >= 0 and task_index < len(todo_list):
        todo_list[task_index]['completed'] = True
        print("Task marked as complete!")
    else:
        print("Invalid task index!")

def main():
    todo_list = []

    while True:
        print("\nWhat would you like to do?")
        print("1. Add a task")
        print("2. Delete a task")
        print("3. Display tasks")
        print("4. Mark a task as complete")
        print("5. Exit")

        choice = input("Enter your choice (1-5): ")

        if choice == '1':
            task = input("Enter the task: ")
            add_task(todo_list, task)
        elif choice == '2':
            display_tasks(todo_list)
            task_index = int(input("Enter the index of the task to delete: ")) - 1
            delete_task(todo_list, task_index)
        elif choice == '3':
            display_tasks(todo_list)
        elif choice == '4':
            display_tasks(todo_list)
            task_index = int(input("Enter the index of the task to mark as complete: ")) - 1
            mark_task_complete(todo_list, task_index)
        elif choice == '5':
            print("Exiting...Bye")
            break
        else:
            print("Invalid choice. Please enter a number between 1 and 5.")

if __name__ == "__main__":
    main()
