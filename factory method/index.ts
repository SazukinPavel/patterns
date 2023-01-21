import Company from "./models/Company";
import Programmer from "./models/Programmer";
import ProgrammerDepartament from "./models/ProgrammerDepartament";
import ProjectManagerDepartament from "./models/ProjectManagerDepartament";
import TeamLeadDepartament from "./models/TeamLeadDepartament";

const programmerDepartament = new ProgrammerDepartament();
const projectManagerDepartament = new ProjectManagerDepartament();
const teamLeadDepartament = new TeamLeadDepartament();

const company = new Company();

company.addEmployee(programmerDepartament, "Pavel Oigen");
company.addEmployee(programmerDepartament, "Tyler Durden");

company.printAll();
company.work();

company.addEmployee(projectManagerDepartament, "Mark");
company.addEmployee(teamLeadDepartament, "Tom");

company.printAll();
company.work();
