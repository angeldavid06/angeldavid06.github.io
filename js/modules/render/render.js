import { initCourses } from "./courses.js";
import { initExperience } from "./experience.js";
import { initPersonal } from "./personal.js";
import { initScholarship } from "./scholarships.js";
import { initSkills } from "./skills.js";

export const initRender = (data) => {
    initPersonal(data.personal);
    initExperience(data.experience);
    initSkills(data.skills);
    initScholarship(data.scholarship);
    initCourses(data.courses);
}