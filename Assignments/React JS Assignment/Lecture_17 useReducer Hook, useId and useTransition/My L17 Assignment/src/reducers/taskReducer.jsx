import { ACTIONS } from '../constants/actionTypes';

export const initialState = {
  tasks: [],
  filter: 'ALL', // ALL | COMPLETED | PENDING
  searchTerm: '',
  activityLog: [],
};

export function taskReducer(state, action) {
  const timestamp = new Date().toLocaleTimeString();

  switch (action.type) {
    case ACTIONS.ADD_TASK: {
      const newTask = {
        id: action.payload.id || Date.now(),
        title: action.payload.title,
        priority: action.payload.priority || 'Low', // High, Medium, Low
        completed: false,
      };
      return {
        ...state,
        tasks: [newTask, ...state.tasks],
        activityLog: [
          { id: Date.now(), text: `Added task: "${newTask.title}"`, time: timestamp },
          ...state.activityLog,
        ],
      };
    }

    case ACTIONS.DELETE_TASK: {
      const deletedTask = state.tasks.find((t) => t.id === action.payload.id);
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload.id),
        activityLog: [
          {
            id: Date.now(),
            text: `Deleted task: "${deletedTask?.title || action.payload.id}"`,
            time: timestamp,
          },
          ...state.activityLog,
        ],
      };
    }

    case ACTIONS.TOGGLE_COMPLETE: {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      const targetTask = state.tasks.find((t) => t.id === action.payload.id);
      const newStatus = targetTask?.completed ? 'marked pending' : 'completed';

      return {
        ...state,
        tasks: updatedTasks,
        activityLog: [
          {
            id: Date.now(),
            text: `Task "${targetTask?.title}" ${newStatus}`,
            time: timestamp,
          },
          ...state.activityLog,
        ],
      };
    }

    case ACTIONS.SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };

    case ACTIONS.SET_SEARCH:
      return {
        ...state,
        searchTerm: action.payload.term,
      };

    case ACTIONS.BULK_ADD:
      return {
        ...state,
        tasks: [...action.payload.tasks, ...state.tasks],
        activityLog: [
          { id: Date.now(), text: `Generated ${action.payload.tasks.length} dummy tasks`, time: timestamp },
          ...state.activityLog,
        ],
      };

    default:
      return state;
  }
}