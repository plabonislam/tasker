import { ListTodo, Users } from "lucide-react";
const avatars = [
  { initials: "JD", bg: "bg-violet-200" },
  { initials: "TK", bg: "bg-blue-200" },
  { initials: "MR", bg: "bg-green-200" },
];

const tasks = [
  {
    index: 1,
    label: "Design homepage",
    status: "In Progress",
    dotColor: "bg-yellow-400",
    statusBg: "bg-yellow-100",
    statusText: "text-yellow-800",
    animationDelay: "animate-[slideInRight_0.5s_ease-in-out_0.2s_both]",
  },
  {
    index: 2,
    label: "Research competitors",
    status: "Completed",
    dotColor: "bg-green-400",
    statusBg: "bg-green-100",
    statusText: "text-green-800",
    animationDelay: "animate-[slideInRight_0.5s_ease-in-out_0.4s_both]",
  },
  {
    index: 3,
    label: "Create wireframes",
    status: "To Do",
    dotColor: "bg-blue-400",
    statusBg: "bg-blue-100",
    statusText: "text-blue-800",
    animationDelay: "animate-[slideInRight_.5s_ease-in-out_0.6s_both]",
  },
];

const pogressBarAnimationDealy = "animate-[slideInRight_.5s_ease-in-out_0.7s_both]"
function TaskDashboardAnimation() {
  return (
    <div className="relative w-full max-w-[500px] aspect-square">
      {/* Main dashboard card */}
      <div className="absolute inset-0 bg-white rounded-lg shadow-2xl p-4 border border-gray-200 animate-slideInFromLeft">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">T</span>
            </div>
            <span className="font-semibold">Project Dashboard</span>
          </div>
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
        </div>

        {/* Task `list */}
        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.index}
              className={`flex items-center justify-between p-2 bg-violet-50 rounded-md border border-violet-100 ${task.animationDelay}`}
            >
              <div className="flex items-center space-x-2">
                <div className={`w-4 h-4 rounded-full ${task.dotColor}`} />
                <span className="text-sm font-medium">{task.label}</span>
              </div>
              <span
                className={`text-xs ${task.statusBg} ${task.statusText} px-2 py-1 rounded-full`}
              >
                {task.status}
              </span>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className={`mt-6 ${pogressBarAnimationDealy}`}>
          <div className="flex mt-6 justify-between text-xs mb-1">
            <span>Project Progress</span>
            <span>65%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2" >
            <div
              className="bg-primary h-2 rounded-full animate-[progressBar_2s_ease-out_1s_both]"
              style={{ width: "65%" }}
            />
          </div>
        </div>
      </div>

      {/* Floating task card 1 */}
      <div className="absolute top-[-30px] right-[-20px] bg-white p-3 rounded-lg shadow-lg border border-gray-200 w-[180px] animate-[floatFadeIn_3s_ease-in-out_.59s_both] z-10">
        <div className="flex items-center space-x-2 mb-2">
          <ListTodo className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold">New Task</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full mb-2" />
        <div className="w-3/4 h-2 bg-gray-100 rounded-full" />
      </div>

      {/* Floating task card 2 */}
      <div className="absolute bottom-[-20px] left-[-30px] bg-white p-3 rounded-lg shadow-lg border border-gray-200 w-[160px] animate-[float_3.5s_ease-in-out_0.5s_infinite_alternate] z-10">
        <div className="flex items-center space-x-2 mb-2">
          <Users className="h-4 w-4 text-green-500" />
          <span className="text-xs font-semibold">Team</span>
        </div>

        <div className="flex space-x-1">
          {avatars.map(({ initials, bg }) => (
            <div
              key={initials}
              className={`w-6 h-6 rounded-full ${bg} flex items-center justify-center text-[10px] font-bold`}
            >
              {initials}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskDashboardAnimation;
