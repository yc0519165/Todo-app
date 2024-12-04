export const Added = ({ todos, completedAsMark, deleteTodos }) => {
  return (
    <>
      <div>
        <h1 className="text-[#fff] mb-3 text-lg font-medium ">Add todo -</h1>
        <div className=" flex flex-col gap-2 overflow-y-scroll scrollbar-hide h-[30vh] w-[350px]">
          {todos.map((todo) => {
            return (
              <>
                <div className="flex justify-between p-4 bg-[#15101C] rounded-lg">
                  <p className="text-[#9E78CF] text-base">{todo.text}</p>
                  <div className="flex gap-3">
                    <p
                      onClick={() => completedAsMark(todo.id)}
                      className="text-[#9E78CF] text-xl cursor-pointer"
                    >
                      <i className="bx bx-check"></i>
                    </p>
                    <p
                      onClick={() => deleteTodos(todo.id)}
                      className="text-[#9E78CF] text-xl cursor-pointer"
                    >
                      <i className="bx bx-trash-alt"></i>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
