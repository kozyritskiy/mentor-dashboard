import data from "../../data/data.json";

const mentors = data.map(elem => {
    return {
        name: elem.mentorGit.slice(19)
    };
});

export default mentors;