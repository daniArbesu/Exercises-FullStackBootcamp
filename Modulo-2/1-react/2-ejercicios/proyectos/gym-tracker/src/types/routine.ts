export type Exercise = {
  id: string;
  name: string;
  series: number;
  repetitions: number;
};

export type Routine = {
  id?: string;
  title: string;
  exercises: Exercise[];
};
