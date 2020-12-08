export class Task {
    ItemType: string;
    ItemID: string;
    ListID: string;
    TaskTitle: string;
    TaskDescription: string;
    TaskPriority: string;
    TaskDueDT: moment.Moment;
    TaskStatus: string;
    isComplete: boolean;
    isArchived: boolean;
    CreatedOn: moment.Moment;
    CreatedBy: string;
    UpdatedOn: moment.Moment;
    UpdatedBy: string
}
