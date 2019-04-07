const initialState = {
    currentPath: "/dashboard",
    menuArray: [
        {
            to: "/dashboard",
            icon: "fal tachometer",
            label: "Dashboard"
        },
        {
            to: "/stats",
            icon: "fal chart-bar",
            label: "Performance",
            submenu: [
                {
                    to: "/stats",
                    label: "Branches"
                },
                {
                    to: "/stats/team",
                    label: "Teams"
                },
                {
                    to: "/stats/compare",
                    label: "Month Comparison"
                },
                {
                    to: "/stats/sales",
                    label: "Sales vs Collection"
                },
                {
                    to: "/stats/marketing",
                    label: "Marketing"
                }
            ]
        },
        {
            to: "/orders",
            icon: "fal shopping-bag",
            label: "Orders"
        },
        {
            to: "/product",
            icon: "fal box",
            label: "Products",
            submenu: [
                {
                    to: "/product",
                    icon: "far box",
                    label: "Manage Products"
                },
                {
                    to: "/product/new",
                    icon: "far plus-circle",
                    label: "New Product"
                }
            ]
        },
        {
            to: "/organisation",
            icon: "fal sitemap",
            label: "Organisation",
            submenu: [
                {
                    to: "/organisation",
                    icon: "far users",
                    label: "Manage Branch"
                },
                {
                    to: "/organisation/new_branch",
                    icon: "far building",
                    label: "New Branch"
                }
            ]
        },
        {
            to: "/account",
            icon: "fal user-circle",
            label: "Accounts",
            submenu: [
                {
                    to: "/account",
                    label: "Manage Account"
                },
                {
                    to: "/account/new",
                    label: "New Account"
                }
            ]
        },
        {
            to: "/customer",
            icon: "fal users",
            label: "Customers",
            submenu: [
                {
                    to: "/customer",
                    label: "Manage Customers"
                },
                {
                    to: "/customer/leads",
                    label: "Manage Leads"
                },
                {
                    to: "/customer/leads/new",
                    label: "New Lead"
                }
            ]
        },
        {
            to: "/control",
            icon: "fal sliders-h",
            label: "Admin Control",
            submenu: [
                {
                    to: "/control/push_notification",
                    icon: "far bell",
                    label: "Push Notification"
                },
                {
                    to: "/control/calendar",
                    icon: "far calendar-alt",
                    label: "Calendar"
                }
                // {
                //     to: "/control/activities",
                //     icon: "far heart-rate",
                //     label: "Activity Monitor"
                // }
            ]
        },
        {
            to: "/settings",
            icon: "fal cog",
            label: "Settings",
            submenu: [
                {
                    to: "/settings",
                    label: "General Settings"
                },
                {
                    to: "/settings/roles",
                    label: "Roles Settings"
                },
                {
                    to: "/settings/account",
                    label: "Account Settings"
                }
            ]
        }
    ]
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPath: payload
            };

        default:
            return state;
    }
};
