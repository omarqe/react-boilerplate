export default {
    searchArray: function(object, keyword, lookup) {
        let results = [];
        let inArray = (needle, haystack) => {
            let length = haystack.length;
            for (let i = 0; i < length; i++) {
                if (haystack[i] === needle) return true;
            }

            return false;
        };

        let trimString = s => {
            let l = 0,
                r = s.length - 1;
            while (l < s.length && s[l] === " ") l++;
            while (r > l && s[r] === " ") r -= 1;
            return s.substring(l, r + 1);
        };

        let compareObjects = (o1, o2) => {
            let k = "";
            for (k in o1) if (o1[k] !== o2[k]) return false;
            for (k in o2) if (o1[k] !== o2[k]) return false;
            return true;
        };

        let itemExists = (haystack, needle) => {
            for (let i = 0; i < haystack.length; i++)
                if (compareObjects(haystack[i], needle)) return true;
            return false;
        };

        // Do the search
        keyword = trimString(keyword);
        for (let i = 0; i < object.length; i++) {
            for (let key in object[i]) {
                let value = object[i][key];
                if (
                    typeof value !== "string" ||
                    (typeof lookup !== "undefined" && lookup > 0 && !inArray(key, lookup))
                )
                    continue;

                let has_position = value.indexOf(keyword) !== -1;
                let split_needle = keyword.split(" ");
                let split_truth = {};

                // Fills everything in the split_truth as false by default
                for (let v in split_needle) split_truth[split_needle[v]] = false;

                for (let k in split_needle) {
                    let each_keyword = split_needle[k].toLowerCase();
                    if (value.toLowerCase().indexOf(each_keyword) !== -1)
                        split_truth[split_needle[k]] = true;
                }

                has_position = has_position || !inArray(false, Object.values(split_truth));
                if (has_position && !itemExists(results, object[i])) results.push(object[i]);
            }
        }

        return results;
    },

    hideProgressBar: props => {
        if (typeof props.ui === "undefined") return false;

        if (props.ui.progressBarStatus === true) props.setProgressBar(false);

        return true;
    },

    renderIf(condition, content, fallback = null) {
        return condition ? content : fallback;
    },

    renderif(condition, content, fallback = null) {
        return condition ? content : fallback;
    },

    getDayName(d) {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[d];
    },

    getMonthName(m) {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];

        return months[m];
    },

    numberFormat(x, sep = ",") {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);
    }
};
