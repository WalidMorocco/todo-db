type DeleteTodoProps = {
    // Delete Todo Props
    id: string
    handleDeleteTodo: (id: string) => void
}

// Create the DeleteTodo component
export const DeleteTodo  = ({
    id,
    handleDeleteTodo,
}: DeleteTodoProps) => (

    <div>
        <button  id="deleteButton"
            aria-label="Delete a todo"
            className="h-7 w-7 flex justify-center items-center bg-gray-700 hover:bg-gray-800 text-white font-bold rounded"
            onClick={() => handleDeleteTodo(id)}
        >
            X
        </button>
    </div>
)