import { apiElement } from "./core";

const api = {
  subjects: apiElement("GET", "/subjects"),
  questions: apiElement("GET", "/subjects/:subjectId/:challengeId/qnas"),
};

export default api;
