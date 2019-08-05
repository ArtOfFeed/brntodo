const SHOW_ALL = 'SHOW_ALL';
const SHOW_ACTIVE = 'SHOW_ACTIVE';
const SHOW_INACTIVE = 'SHOW_INACTIVE';

export const applyFiltersTodo = (todos, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return todos;
        case SHOW_INACTIVE: {
            return todos.filter((todo) => (todo.completed))
        }
        case SHOW_ACTIVE: {
            return todos.filter((todo) => (!todo.completed))
        }
        default:
            return todos;
    }
}