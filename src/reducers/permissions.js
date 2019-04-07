import permissions from "../permissions.json";

const perms = {
    list: permissions
};

export default (state = perms, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
};
