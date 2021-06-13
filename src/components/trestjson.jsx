const questionList = {
  title: "titel van ontwerpatelier",
  description: "Een stukje over het vragenformulier",
  questions: [
    {
      questionId: 1,
      title: "Titel van vraag1",
      description: "Een mooie tekst",
      header: ["ik", "ben", "een", "header"],
      rows: [
        ["ik", "ben", "row", "1"],
        ["ik", "ben", "row", "2"],
      ],
      isEditMode: false,
    },
    {
      questionId: 2,
      title: "Titel van vraag2",
      description: "Een mooie tekst",
      header: ["ik", "ben", "een", "header"],
      rows: [
        ["ik", "ben", "row", "1"],
        ["ik", "ben", "row", "2"],
      ],
      isEditMode: false,
    },
  ],
  isEditMode: false,
};

export default questionList;
