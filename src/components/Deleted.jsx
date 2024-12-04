export const Deleted = ({ completedTodos }) => {
  return (
    <>
      <div>
        <h1 className="text-[#fff] mb-3 text-lg font-medium ">Done -</h1>
        <div className="flex flex-col gap-2 overflow-y-scroll scrollbar-hide h-[30vh] w-[350px]">
          {completedTodos.map((todo) => {
            return (
              <div
                key={todo.id}
                className="flex justify-between p-4 bg-[#15101C] rounded-lg"
              >
                <p className="text-[#78CFB0] line-through text-base">
                  {todo.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
