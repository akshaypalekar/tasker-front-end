export class Task {
    TaskID: string;
    ListID: string;
    TaskTitle: string;
    TaskDescription: string;
    TaskPriority: string;
    TaskDueDT: moment.Moment;
    TaskStatus: string;
    isComplete: boolean;
    isArchived: boolean;
    isDueDateSet: boolean;
    TaskOrder: number;
    TaskCreatedDT: moment.Moment;
    TaskUpdatedDT: moment.Moment;
}
