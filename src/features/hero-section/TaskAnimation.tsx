import { ListTodo, Users } from "lucide-react";
function TaskDashboardAnimation() {
  return (
    <div className="relative w-full max-w-[500px] aspect-square">
      {/* Main dashboard card */}
      <div className="absolute inset-0 bg-white rounded-lg shadow-2xl p-4 border border-gray-200 animate-[fadeIn_0.5s_ease-in-out]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">T</span>
            </div>
            <span className="font-semibold">Project Dashboard</span>
          </div>
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
        </div>

        {/* Task `list */}
        <div className="space-y-3">
          <div className="flex items-center justify-between p-2 bg-violet-50 rounded-md border border-violet-100 animate-[slideInRight_0.5s_ease-in-out_0.2s_both]">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
              <span className="text-sm font-medium">Design homepage</span>
            </div>
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
              In Progress
            </span>
          </div>

          <div className="flex items-center justify-between p-2 bg-violet-50 rounded-md border border-violet-100 animate-[slideInRight_0.5s_ease-in-out_0.4s_both]">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-green-400"></div>
              <span className="text-sm font-medium">Research competitors</span>
            </div>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
              Completed
            </span>
          </div>

          <div className="flex items-center justify-between p-2 bg-violet-50 rounded-md border border-violet-100 animate-[slideInRight_0.5s_ease-in-out_0.6s_both]">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-blue-400"></div>
              <span className="text-sm font-medium">Create wireframes</span>
            </div>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              To Do
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6">
          <div className="flex justify-between text-xs mb-1">
            <span>Project Progress</span>
            <span>65%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full animate-[progressBar_2s_ease-out_forwards]"
              style={{ width: "65%" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Floating task card 1 */}
      <div className="absolute top-[-30px] right-[-20px] bg-white p-3 rounded-lg shadow-lg border border-gray-200 w-[180px] animate-[float_4s_ease-in-out_infinite_alternate] z-10">
        <div className="flex items-center space-x-2 mb-2">
          <ListTodo className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold">New Task</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full mb-2"></div>
        <div className="w-3/4 h-2 bg-gray-100 rounded-full"></div>
      </div>

      {/* Floating task card 2 */}
      <div className="absolute bottom-[-20px] left-[-30px] bg-white p-3 rounded-lg shadow-lg border border-gray-200 w-[160px] animate-[float_3.5s_ease-in-out_0.5s_infinite_alternate] z-10">
        <div className="flex items-center space-x-2 mb-2">
          <Users className="h-4 w-4 text-green-500" />
          <span className="text-xs font-semibold">Team</span>
        </div>
        <div className="flex space-x-1">
          <div className="w-6 h-6 rounded-full bg-violet-200 flex items-center justify-center text-[10px] font-bold">
            JD
          </div>
          <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center text-[10px] font-bold">
            TK
          </div>
          <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center text-[10px] font-bold">
            MR
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDashboardAnimation;
